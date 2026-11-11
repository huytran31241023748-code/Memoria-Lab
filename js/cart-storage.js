/* Memoria Lab – Nhiệm vụ 8: lưu và khôi phục giỏ hàng an toàn bằng localStorage.
 *
 * Module này KHÔNG thay thế cart.js. Nó dùng chung khóa `memoria_cart` và cấu trúc item
 * { productId, name, price, image, quantity } của cart.js, rồi kiểm tra/làm sạch dữ liệu
 * mỗi lần trang được mở hoặc tải lại, trước khi giao diện đọc giỏ hàng.
 *
 * Thứ tự nạp đề xuất: products.js → cart.js → cart-storage.js → render-products.js.
 * API riêng: window.MemoriaCartStorage (không trùng getCart/saveCart/CART_STORAGE_KEY).
 */
(() => {
  "use strict";

  // Tránh chạy khôi phục hai lần nếu file bị nạp lặp trên cùng một trang.
  if (window.MemoriaCartStorage) return;

  // Dùng lại khóa của cart.js nếu đã nạp; nếu chưa thì dùng đúng giá trị nhóm đã thống nhất.
  // Biến khai báo trong IIFE nên không trùng với `const CART_STORAGE_KEY` toàn cục của cart.js.
  const STORAGE_KEY = typeof CART_STORAGE_KEY === "string" ? CART_STORAGE_KEY : "memoria_cart";

  let lastReport = null;

  /* ---------- Truy cập localStorage an toàn ---------- */

  // Một số trình duyệt ném SecurityError ngay khi đọc `window.localStorage` nếu bị chặn lưu dữ liệu.
  function getStorage() {
    try {
      const storage = window.localStorage;
      return storage || null;
    } catch (error) {
      return null;
    }
  }

  function isAvailable() {
    return getStorage() !== null;
  }

  // Trả về { ok, raw }. raw = null nghĩa là chưa có giỏ hàng (trường hợp bình thường).
  function readRaw() {
    const storage = getStorage();
    if (!storage) return { ok: false, raw: null };
    try {
      return { ok: true, raw: storage.getItem(STORAGE_KEY) };
    } catch (error) {
      return { ok: false, raw: null };
    }
  }

  function writeRaw(value) {
    const storage = getStorage();
    if (!storage) return false;
    try {
      if (value === null) {
        storage.removeItem(STORAGE_KEY);
      } else {
        storage.setItem(STORAGE_KEY, value);
      }
      return true;
    } catch (error) {
      // Ví dụ: bộ nhớ đầy (QuotaExceededError) hoặc trình duyệt chặn ghi.
      console.warn("Memoria Lab: không ghi được giỏ hàng vào localStorage.", error);
      return false;
    }
  }

  /* ---------- Đọc và kiểm tra dữ liệu ---------- */

  // localStorage chỉ lưu chuỗi, nên phải JSON.parse; chuỗi hỏng sẽ ném SyntaxError.
  function parseCartJson(raw) {
    if (raw === null) return { ok: true, data: [], reason: "empty" };
    let data;
    try {
      data = JSON.parse(raw);
    } catch (error) {
      return { ok: false, data: null, reason: "invalid-json" };
    }
    if (!Array.isArray(data)) return { ok: false, data: null, reason: "not-array" };
    return { ok: true, data, reason: "ok" };
  }

  // Nguồn sản phẩm chung do products.js tạo ra; null nếu chưa nạp hoặc sai kiểu.
  function getProductList() {
    return Array.isArray(window.products) ? window.products : null;
  }

  // Mã sản phẩm có thể là số (lưu từ products.js) hoặc chuỗi (đọc từ nút/URL): đưa về chuỗi để so sánh.
  function normalizeId(value) {
    if (typeof value === "number" && Number.isFinite(value)) return String(value);
    if (typeof value === "string" && value.trim() !== "") return value.trim();
    return null;
  }

  // Chỉ nhận số nguyên dương: 3 hoặc "3". Loại 0, -1, 1.5, "3abc", NaN, Infinity, số vượt giới hạn an toàn.
  function normalizeQuantity(value) {
    let number = null;
    if (typeof value === "number") {
      number = value;
    } else if (typeof value === "string" && /^\d+$/.test(value.trim())) {
      number = Number(value.trim());
    }
    return Number.isSafeInteger(number) && number >= 1 ? number : null;
  }

  // Thành tiền một dòng (giá × số lượng) phải còn là số nguyên an toàn để phép tính tổng tiền chính xác.
  // So sánh bằng phép chia để không phải nhân ra số đã mất độ chính xác. Đây là giới hạn kỹ thuật, không phải mức trần kinh doanh.
  function isSafeLineTotal(price, quantity) {
    const unitPrice = Number(price);
    if (!Number.isFinite(unitPrice) || unitPrice <= 0) return Number.isSafeInteger(quantity);
    return Number.isSafeInteger(quantity) && quantity <= Math.floor(Number.MAX_SAFE_INTEGER / unitPrice);
  }

  /* Làm sạch mảng giỏ hàng.
   * - Có products: bỏ mã không tồn tại, lấy lại name/price/image từ products.js.
   * - Không có products: chỉ kiểm tra cấu trúc, giữ nguyên name/price/image (không xóa gì thêm).
   * Các dòng trùng mã được gộp bằng cách cộng số lượng, giữ vị trí của dòng xuất hiện đầu tiên.
   */
  function sanitizeCartItems(data, products) {
    const report = { kept: 0, invalidItem: 0, invalidQuantity: 0, unknownProduct: 0, merged: 0, repriced: 0, unsafeQuantity: 0 };
    if (!Array.isArray(data)) return { items: [], report };

    const productMap = new Map();
    if (Array.isArray(products)) {
      products.forEach((product) => {
        const id = product ? normalizeId(product.id) : null;
        if (id !== null && !productMap.has(id)) productMap.set(id, product);
      });
    }

    const items = [];
    const indexById = new Map();

    data.forEach((entry) => {
      // Mỗi dòng phải là object thường và có productId hợp lệ.
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
        report.invalidItem += 1;
        return;
      }
      const id = normalizeId(entry.productId);
      if (id === null) {
        report.invalidItem += 1;
        return;
      }

      const quantity = normalizeQuantity(entry.quantity);
      if (quantity === null) {
        report.invalidQuantity += 1;
        return;
      }

      let item;
      if (products) {
        const product = productMap.get(id);
        if (!product) {
          report.unknownProduct += 1;
          return;
        }
        // Không tin giá cũ trong localStorage: dựng lại item từ nguồn sản phẩm hiện tại.
        item = {
          productId: product.id,
          name: product.name,
          price: Number(product.price),
          image: product.image,
          quantity
        };
        if (Number(entry.price) !== item.price) report.repriced += 1;
      } else {
        item = {
          productId: entry.productId,
          name: entry.name,
          price: entry.price,
          image: entry.image,
          quantity
        };
      }

      // Loại dòng có thành tiền theo giá hiện tại vượt giới hạn số nguyên an toàn.
      if (!isSafeLineTotal(item.price, quantity)) {
        report.unsafeQuantity += 1;
        return;
      }

      // Gộp dòng trùng mã (ví dụ 1 và "1") thành một dòng, đúng cách addToCart của cart.js gộp.
      // Nếu tổng sau khi gộp không an toàn: giữ dòng trước, loại dòng đang xét và ghi nhận riêng.
      if (indexById.has(id)) {
        const existing = items[indexById.get(id)];
        const total = existing.quantity + quantity;
        if (!isSafeLineTotal(existing.price, total)) {
          report.unsafeQuantity += 1;
          return;
        }
        existing.quantity = total;
        report.merged += 1;
        return;
      }

      indexById.set(id, items.length);
      items.push(item);
    });

    report.kept = items.length;
    return { items, report };
  }

  /* ---------- API lưu, đọc, khôi phục ---------- */

  // Đọc giỏ đã kiểm tra, KHÔNG ghi lại vào localStorage. Lỗi bất kỳ → trả mảng rỗng.
  function load() {
    const read = readRaw();
    if (!read.ok) return [];
    const parsed = parseCartJson(read.raw);
    if (!parsed.ok) return [];
    return sanitizeCartItems(parsed.data, getProductList()).items;
  }

  // Lưu một mảng giỏ hàng sau khi kiểm tra. Trả về true nếu ghi thành công.
  function save(cart) {
    if (!Array.isArray(cart)) {
      console.warn("Memoria Lab: dữ liệu giỏ hàng cần lưu phải là mảng.");
      return false;
    }
    const { items } = sanitizeCartItems(cart, getProductList());
    return writeRaw(JSON.stringify(items));
  }

  /* Khôi phục khi mở/tải lại trang: đọc → kiểm tra → ghi lại bản sạch nếu có thay đổi.
   * Không làm gì với dữ liệu nếu localStorage bị chặn hoặc products.js chưa sẵn sàng.
   */
  function restore() {
    const report = { status: "ok", reason: "ok", changed: false, details: null };

    const read = readRaw();
    if (!read.ok) {
      report.status = "skipped";
      report.reason = "storage-unavailable";
      return finish(report);
    }

    const products = getProductList();
    if (!products) {
      // Không có nguồn sản phẩm thì không thể đối chiếu → giữ nguyên dữ liệu, không xóa.
      report.status = "skipped";
      report.reason = "products-unavailable";
      return finish(report);
    }

    const parsed = parseCartJson(read.raw);
    if (!parsed.ok) {
      // JSON hỏng hoặc không phải mảng: không thể khôi phục an toàn → đưa giỏ về trạng thái trống.
      report.status = "reset";
      report.reason = parsed.reason;
      report.changed = writeRaw(null);
      return finish(report);
    }
    if (read.raw === null) {
      report.reason = "empty";
      return finish(report);
    }

    const { items, report: details } = sanitizeCartItems(parsed.data, products);
    report.details = details;

    const cleanJson = items.length > 0 ? JSON.stringify(items) : null;
    if (cleanJson !== read.raw) {
      report.status = "cleaned";
      report.changed = writeRaw(cleanJson);
    }
    return finish(report);
  }

  // Ghi nhận kết quả, in Console làm minh chứng và báo giao diện vẽ lại nếu dữ liệu đã đổi.
  function finish(report) {
    lastReport = report;
    if (report.status === "ok") return report;

    const log = report.status === "cleaned" ? console.info : console.warn;
    log("Memoria Lab – khôi phục giỏ hàng:", report.status, report.reason, report.details || "");

    if (report.changed) {
      // Dùng lại sự kiện `cartUpdated` có sẵn của cart.js để trang giỏ/badge cập nhật.
      window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { cart: load() } }));
    }
    return report;
  }

  window.MemoriaCartStorage = Object.freeze({
    STORAGE_KEY,
    isAvailable,
    load,
    save,
    restore,
    sanitizeCartItems,
    getLastReport: () => lastReport
  });

  /* Thời điểm khôi phục: chạy ngay khi file được nạp. Với script `defer` (hoặc đặt cuối body)
   * theo đúng thứ tự trên, việc này xảy ra trước DOMContentLoaded – trước khi cart.js render giỏ.
   * Nếu lúc đó products.js chưa nạp, thử lại một lần khi DOM sẵn sàng.
   */
  try {
    const first = restore();
    if (first.reason === "products-unavailable" && document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
        try {
          restore();
        } catch (error) {
          console.warn("Memoria Lab: không khôi phục được giỏ hàng.", error);
        }
      }, { once: true });
    }
  } catch (error) {
    // Lưới an toàn cuối cùng: lỗi khôi phục không được làm dừng trang.
    console.warn("Memoria Lab: không khôi phục được giỏ hàng.", error);
  }
})();
