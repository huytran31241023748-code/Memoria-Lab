/* Lọc danh mục trên trang sản phẩm; dữ liệu gốc vẫn nằm trong HTML. */
(() => {
  "use strict";

  const controls = document.querySelector("[data-product-filters]");
  const grid = document.getElementById("product-list");
  const heading = document.getElementById("product-list-title");
  const status = document.getElementById("product-filter-status");

  if (!controls || !grid || !heading || !status) return;

  const buttons = Array.from(controls.querySelectorAll("button[data-filter]"));
  const cards = Array.from(grid.querySelectorAll(".product-card[data-category]"));
  if (!buttons.length || !cards.length) return;

  function applyFilter(selectedButton) {
    const category = selectedButton.dataset.filter;
    let visibleCount = 0;

    for (const card of cards) {
      const matches = category === "all" || card.dataset.category === category;
      card.hidden = !matches;
      if (matches) visibleCount += 1;
    }

    for (const button of buttons) {
      const isSelected = button === selectedButton;
      button.classList.toggle("category-btn--active", isSelected);
      button.setAttribute("aria-pressed", String(isSelected));
    }

    heading.textContent = category === "all"
      ? "Tất cả sản phẩm"
      : selectedButton.textContent.trim();
    status.textContent = `Hiển thị ${visibleCount} sản phẩm.`;
  }

  for (const button of buttons) {
    button.addEventListener("click", () => applyFilter(button));
  }

  applyFilter(buttons.find((button) => button.dataset.filter === "all") || buttons[0]);
  controls.hidden = false;
  status.hidden = false;
})();
