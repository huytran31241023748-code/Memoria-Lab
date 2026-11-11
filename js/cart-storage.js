/* Memoria Lab – kiểm tra và khôi phục giỏ hàng, giữ nguyên cấu hình từng dòng. */
(() => {
  "use strict";
  if (window.MemoriaCartStorage) return;

  const STORAGE_KEY = window.CART_STORAGE_KEY || "memoria_cart";
  let lastReport = null;

  function getStorage() {
    try { return window.localStorage || null; } catch (error) { return null; }
  }

  function readRaw() {
    const storage = getStorage();
    if (!storage) return { ok: false, raw: null };
    try { return { ok: true, raw: storage.getItem(STORAGE_KEY) }; }
    catch (error) { return { ok: false, raw: null }; }
  }

  function writeRaw(value) {
    const storage = getStorage();
    if (!storage) return false;
    try {
      if (value === null) storage.removeItem(STORAGE_KEY);
      else storage.setItem(STORAGE_KEY, value);
      return true;
    } catch (error) {
      console.warn("Memoria Lab: không ghi được giỏ hàng vào localStorage.", error);
      return false;
    }
  }

  function normalizeId(value) {
    if (typeof value === "number" && Number.isFinite(value)) return String(value);
    if (typeof value === "string" && value.trim()) return value.trim();
    return null;
  }

  function normalizeQuantity(value) {
    const number = typeof value === "number" ? value : (typeof value === "string" && /^\d+$/.test(value.trim()) ? Number(value.trim()) : NaN);
    return Number.isSafeInteger(number) && number > 0 ? number : null;
  }

  function normalizeCustomization(entry) {
    const rawOptions = entry && entry.options && typeof entry.options === "object" ? entry.options : {};
    const options = {};
    Object.keys(rawOptions).sort().forEach((key) => {
      const value = String(rawOptions[key] ?? "").trim();
      if (key.trim() && value) options[key.trim()] = value;
    });
    return { options, personalNote: String(entry && entry.personalNote || "").trim().slice(0, 500) };
  }

  function itemIdentity(productId, entry) {
    const clean = normalizeCustomization(entry);
    return JSON.stringify([String(productId), clean.options, clean.personalNote]);
  }

  function sanitizeCartItems(data, products) {
    const report = { kept: 0, invalidItem: 0, invalidQuantity: 0, unknownProduct: 0, merged: 0, repriced: 0 };
    if (!Array.isArray(data)) return { items: [], report };

    const productMap = new Map();
    if (Array.isArray(products)) {
      products.forEach((product) => {
        const id = product ? normalizeId(product.id) : null;
        if (id !== null && !productMap.has(id)) productMap.set(id, product);
      });
    }

    const items = [];
    const indexByIdentity = new Map();
    data.forEach((entry) => {
      if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
        report.invalidItem += 1;
        return;
      }
      const id = normalizeId(entry.productId);
      const quantity = normalizeQuantity(entry.quantity);
      if (id === null) { report.invalidItem += 1; return; }
      if (quantity === null) { report.invalidQuantity += 1; return; }

      const customization = normalizeCustomization(entry);
      let item;
      if (Array.isArray(products)) {
        const product = productMap.get(id);
        if (!product) { report.unknownProduct += 1; return; }
        item = {
          productId: product.id,
          name: product.name,
          price: Number(product.price),
          image: product.image,
          quantity,
          options: customization.options,
          personalNote: customization.personalNote
        };
        if (Number(entry.price) !== item.price) report.repriced += 1;
      } else {
        item = {
          productId: entry.productId,
          name: String(entry.name || ""),
          price: Number(entry.price),
          image: String(entry.image || ""),
          quantity,
          options: customization.options,
          personalNote: customization.personalNote
        };
      }

      const identity = itemIdentity(id, item);
      item.cartItemId = identity;
      if (indexByIdentity.has(identity)) {
        const existing = items[indexByIdentity.get(identity)];
        const total = existing.quantity + quantity;
        if (!Number.isSafeInteger(total) || total > Math.floor(Number.MAX_SAFE_INTEGER / Math.max(1, Number(existing.price) || 1))) {
          report.invalidQuantity += 1;
          return;
        }
        existing.quantity = total;
        report.merged += 1;
      } else {
        indexByIdentity.set(identity, items.length);
        items.push(item);
      }
    });

    report.kept = items.length;
    return { items, report };
  }

  function load() {
    const read = readRaw();
    if (!read.ok || read.raw === null) return [];
    try {
      const parsed = JSON.parse(read.raw);
      if (!Array.isArray(parsed)) return [];
      return sanitizeCartItems(parsed, Array.isArray(window.products) ? window.products : null).items;
    } catch (error) {
      return [];
    }
  }

  function save(cart) {
    if (!Array.isArray(cart)) return false;
    const { items } = sanitizeCartItems(cart, Array.isArray(window.products) ? window.products : null);
    return writeRaw(JSON.stringify(items));
  }

  function restore() {
    const report = { status: "ok", reason: "ok", changed: false, details: null };
    const read = readRaw();
    if (!read.ok) {
      report.status = "skipped"; report.reason = "storage-unavailable";
    } else if (read.raw !== null) {
      try {
        const parsed = JSON.parse(read.raw);
        if (!Array.isArray(parsed)) throw new Error("not-array");
        const result = sanitizeCartItems(parsed, Array.isArray(window.products) ? window.products : null);
        report.details = result.report;
        const cleanJson = result.items.length ? JSON.stringify(result.items) : null;
        if (cleanJson !== read.raw) {
          report.status = "cleaned";
          report.changed = writeRaw(cleanJson);
        }
      } catch (error) {
        report.status = "reset";
        report.reason = "invalid-cart-data";
        report.changed = writeRaw(null);
      }
    } else {
      report.reason = "empty";
    }

    lastReport = report;
    if (report.changed) {
      window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { cart: load() } }));
    }
    return report;
  }

  window.MemoriaCartStorage = Object.freeze({
    STORAGE_KEY,
    isAvailable: () => getStorage() !== null,
    load,
    save,
    restore,
    sanitizeCartItems,
    getLastReport: () => lastReport
  });

  try { restore(); }
  catch (error) { console.warn("Memoria Lab: không khôi phục được giỏ hàng.", error); }
})();
