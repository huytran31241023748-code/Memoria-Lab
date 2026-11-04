/* Tìm tên sản phẩm và lọc danh mục trên cùng danh sách. */
(() => {
  "use strict";

  const controls = document.querySelector("[data-product-filters]");
  const grid = document.getElementById("product-list");
  const heading = document.getElementById("product-list-title");
  const status = document.getElementById("product-filter-status");

  if (!controls || !grid || !heading || !status) return;

  const buttons = Array.from(controls.querySelectorAll("button[data-filter]"));
  const cards = Array.from(grid.querySelectorAll(".product-card[data-category]"));
  const input = document.getElementById("product-search");
  const form = document.getElementById("product-search-form");
  const clear = document.getElementById("clear-product-search");

  if (!buttons.length || !cards.length) return;

  let selected = buttons.find((button) => button.dataset.filter === "all") || buttons[0];

  function normalize(text) {
    return text.toLowerCase().normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d").replace(/×/g, "x").trim();
  }

  const products = cards.map((card) => ({
    card,
    name: normalize(card.querySelector(".product-card__title")?.textContent || "")
  }));

  function render() {
    const query = (input?.value || "").trim();
    const words = normalize(query).split(/\s+/).filter(Boolean);
    let count = 0;

    for (const { card, name } of products) {
      const inCategory = selected.dataset.filter === "all"
        || card.dataset.category === selected.dataset.filter;

      const matches = inCategory && words.every((word) => name.includes(word));
      card.hidden = !matches;

      if (matches) count += 1;
    }

    for (const button of buttons) {
      button.classList.toggle("category-btn--active", button === selected);
      button.setAttribute("aria-pressed", String(button === selected));
    }

    heading.textContent = selected.dataset.filter === "all"
      ? "Tất cả sản phẩm" : selected.textContent.trim();

    status.textContent = count === 0
      ? "Không tìm thấy sản phẩm phù hợp. Hãy đổi từ khóa hoặc chọn danh mục Tất cả."
      : `Hiển thị ${count} sản phẩm${query ? ` cho “${query}”` : ""}.`;

    if (clear) clear.hidden = !input?.value;
  }

  for (const button of buttons) {
    button.addEventListener("click", () => {
      selected = button;
      render();
    });
  }

  input?.addEventListener("input", render);

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    render();
  });

  clear?.addEventListener("click", () => {
    input.value = "";
    render();
    input.focus();
  });

  if (input) {
    input.value = new URLSearchParams(location.search).get("q")?.slice(0, 100) || "";
  }

  render();
  controls.hidden = false;
  status.hidden = false;

  if (location.hash === "#product-search") {
    input?.focus({ preventScroll: true });
  }
})();
