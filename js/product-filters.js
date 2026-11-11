/* Tìm kiếm, lọc theo danh mục và sắp xếp giá trên trang danh sách sản phẩm.
 * Dữ liệu lấy từ window.products (js/products.js).
 * Danh sách được vẽ lại bằng window.renderProducts (js/render-products.js).
 * Mảng window.products ban đầu không bị thay đổi.
 */
document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const allProducts = Array.isArray(window.products) ? window.products : [];
  const listId = "product-list";

  const filterGroup = document.querySelector("[data-product-filters]");
  const categoryButtons = filterGroup
    ? Array.from(filterGroup.querySelectorAll("button[data-filter]"))
    : [];
  const searchForm = document.getElementById("product-search-form");
  const searchInput = document.getElementById("product-search");
  const clearButton = document.getElementById("clear-product-search");
  const sortSelect = document.getElementById("product-sort");
  const heading = document.getElementById("product-list-title");
  const status = document.getElementById("product-filter-status");

  // Không phải trang danh sách hoặc chưa nạp hàm render thì dừng
  if (!document.getElementById(listId) || typeof window.renderProducts !== "function") return;

  // Danh mục đang chọn: "all", "photostrip", "cards", "frames", "combo"
  let currentCategory = "all";

  // Chuẩn hóa chữ để tìm kiếm không phân biệt hoa thường và dấu tiếng Việt
  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/đ/g, "d")
      .replace(/×/g, "x")
      .trim();
  }

  // Trả về danh sách sản phẩm thỏa mãn cả 3 điều kiện: danh mục, từ khóa, sắp xếp
  function getVisibleProducts() {
    const words = normalize(searchInput ? searchInput.value : "")
      .split(/\s+/)
      .filter(Boolean);

    // Bước 1: lọc theo danh mục (filter tạo mảng mới, không sửa mảng gốc)
    let result = allProducts.filter(function (product) {
      return currentCategory === "all" || product.category === currentCategory;
    });

    // Bước 2: lọc theo từ khóa, tên phải chứa đủ các từ đã nhập
    result = result.filter(function (product) {
      const name = normalize(product.name);
      return words.every(function (word) {
        return name.includes(word);
      });
    });

    // Bước 3: sắp xếp trên bản sao, vì sort() làm thay đổi mảng nó xử lý
    const sortValue = sortSelect ? sortSelect.value : "default";
    if (sortValue === "price-asc") {
      result = [...result].sort(function (a, b) {
        return a.price - b.price;
      });
    } else if (sortValue === "price-desc") {
      result = [...result].sort(function (a, b) {
        return b.price - a.price;
      });
    }

    return result;
  }

  // Cập nhật nút danh mục, tiêu đề, thông báo và vẽ lại danh sách
  function updateList() {
    const list = getVisibleProducts();
    const keyword = searchInput ? searchInput.value.trim() : "";

    window.renderProducts(list, listId);

    categoryButtons.forEach(function (button) {
      const isActive = button.dataset.filter === currentCategory;
      button.classList.toggle("category-btn--active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (heading) {
      const activeButton = categoryButtons.find(function (button) {
        return button.dataset.filter === currentCategory;
      });
      heading.textContent = currentCategory === "all" || !activeButton
        ? "Tất cả sản phẩm"
        : activeButton.textContent.trim();
    }

    if (list.length === 0) {
      // Thay câu thông báo chung bằng câu gợi ý cụ thể hơn
      const message = document.querySelector("#" + listId + " .product-render-message");
      if (message) {
        message.textContent = "Không tìm thấy sản phẩm phù hợp. Hãy đổi từ khóa hoặc chọn danh mục Tất cả.";
      }
      if (status) status.hidden = true;
    } else if (status) {
      status.hidden = false;
      status.textContent = "Hiển thị " + list.length + " sản phẩm" +
        (keyword ? " cho “" + keyword + "”" : "") + ".";
    }

    if (clearButton) clearButton.hidden = keyword === "";
  }

  // Bấm nút danh mục
  categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      currentCategory = button.dataset.filter;
      updateList();
    });
  });

  // Gõ từ khóa thì lọc ngay
  if (searchInput) searchInput.addEventListener("input", updateList);

  // Bấm "Tìm kiếm" hoặc Enter: không tải lại trang
  if (searchForm) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      updateList();
    });
  }

  // Xóa từ khóa
  if (clearButton) {
    clearButton.addEventListener("click", function () {
      searchInput.value = "";
      updateList();
      searchInput.focus();
    });
  }

  // Đổi cách sắp xếp
  if (sortSelect) sortSelect.addEventListener("change", updateList);

  // Đọc từ khóa trên đường dẫn, ví dụ products.html?q=photostrip
  if (searchInput) {
    const q = new URLSearchParams(window.location.search).get("q");
    searchInput.value = q ? q.slice(0, 100) : "";
  }

  if (filterGroup) filterGroup.hidden = false;
  updateList();

  // Bấm kính lúp trên header (products.html#product-search) thì đưa con trỏ vào ô tìm kiếm
  if (window.location.hash === "#product-search" && searchInput) {
    searchInput.focus({ preventScroll: true });
  }
});
