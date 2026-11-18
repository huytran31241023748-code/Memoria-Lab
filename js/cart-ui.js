/* Memoria Lab – giao diện giỏ hàng và phản hồi thêm sản phẩm. */
(() => {
  "use strict";

  const money = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });
  const formatMoney = (value) => money.format(Number(value) || 0);

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[char]));
  }

  function syncHeaderCartIcon() {
    const button = document.querySelector('.header-actions [aria-label*="Giỏ hàng"]');
    if (!button) return;
    let badge = button.querySelector(".cart-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "cart-badge";
      badge.id = "header-cart-count";
      badge.setAttribute("aria-live", "polite");
      button.appendChild(badge);
    }
    if (button.tagName === "BUTTON" && !button.dataset.cartNavBound) {
      button.dataset.cartNavBound = "true";
      button.addEventListener("click", () => {
        if (!window.location.pathname.endsWith("cart.html")) window.location.href = "cart.html";
      });
    }
    const { totalQuantity } = getCartSummary();
    badge.textContent = String(totalQuantity);
    badge.hidden = totalQuantity === 0;
    button.setAttribute("aria-label", `Giỏ hàng (${totalQuantity} sản phẩm)`);
  }

  function renderCartPage() {
    syncHeaderCartIcon();
    const content = document.getElementById("cart-content");
    const empty = document.getElementById("cart-empty");
    const list = document.getElementById("cart-items-list");
    const totalQty = document.getElementById("summary-total-qty");
    const totalPrice = document.getElementById("summary-total-price");
    if (!content || !empty || !list) return;

    const summary = getCartSummary();
    if (!summary.items.length) {
      content.hidden = true;
      empty.hidden = false;
      list.replaceChildren();
      if (totalQty) totalQty.textContent = "0";
      if (totalPrice) totalPrice.textContent = formatMoney(0);
      return;
    }

    empty.hidden = true;
    content.hidden = false;
    list.innerHTML = summary.items.map((item) => {
      const id = escapeHtml(item.cartItemId);
      const productId = escapeHtml(item.productId);
      const name = escapeHtml(item.name);
      const image = escapeHtml(item.image);
      const options = item.options && typeof item.options === "object" ? Object.entries(item.options) : [];
      const optionMarkup = options.map(([label, value]) =>
        `<li><span>${escapeHtml(label)}:</span> ${escapeHtml(value)}</li>`
      ).join("");
      const noteMarkup = item.personalNote
        ? `<p class="cart-item__note"><strong>Ghi chú:</strong> ${escapeHtml(item.personalNote)}</p>`
        : "";
      const customizationMarkup = optionMarkup || noteMarkup
        ? `<div class="cart-item__customization">${optionMarkup ? `<ul>${optionMarkup}</ul>` : ""}${noteMarkup}</div>`
        : "";
      return `
        <li class="cart-item" data-cart-item-id="${id}">
          <div class="cart-item__info">
            <a class="cart-item__thumb-link" href="product-detail.html?id=${productId}" aria-label="Xem chi tiết ${name}">
              <img class="cart-item__thumb" src="${image}" alt="${name}" width="76" height="95" loading="lazy" decoding="async">
            </a>
            <div class="cart-item__meta">
              <h3 class="cart-item__name"><a href="product-detail.html?id=${productId}">${name}</a></h3>
              ${customizationMarkup}
            </div>
          </div>
          <div class="cart-item__price"><span class="cart-item__mobile-label">Đơn giá:</span><span>${formatMoney(item.price)}</span></div>
          <div class="cart-item__qty">
            <div class="qty-control" role="group" aria-label="Số lượng của ${name}">
              <button type="button" class="qty-btn js-qty-decrease" data-cart-item-id="${id}" aria-label="Giảm số lượng ${name}" ${item.quantity <= 1 ? "disabled" : ""}>−</button>
              <input type="number" class="qty-input js-qty-input" data-cart-item-id="${id}" value="${item.quantity}" min="1" step="1" inputmode="numeric" aria-label="Số lượng ${name}">
              <button type="button" class="qty-btn js-qty-increase" data-cart-item-id="${id}" aria-label="Tăng số lượng ${name}">+</button>
            </div>
          </div>
          <div class="cart-item__subtotal"><span class="cart-item__mobile-label">Thành tiền:</span><span>${formatMoney(item.subtotal)}</span></div>
          <div class="cart-item__remove"><button type="button" class="btn-remove js-remove-item" data-cart-item-id="${id}" aria-label="Xóa ${name} khỏi giỏ hàng">✕</button></div>
        </li>`;
    }).join("");

    if (totalQty) totalQty.textContent = String(summary.totalQuantity);
    if (totalPrice) totalPrice.textContent = formatMoney(summary.totalPrice);
  }

  function initCartEvents() {
    const list = document.getElementById("cart-items-list");
    const clearButton = document.getElementById("btn-clear-cart");
    if (list) {
      list.addEventListener("click", (event) => {
        const button = event.target.closest("button[data-cart-item-id]");
        if (!button) return;
        const id = button.dataset.cartItemId;
        const item = getCart().find((entry) => entry.cartItemId === id);
        if (!item) return;
        if (button.classList.contains("js-qty-increase")) updateCartItemQuantity(id, item.quantity + 1);
        else if (button.classList.contains("js-qty-decrease") && item.quantity > 1) updateCartItemQuantity(id, item.quantity - 1);
        else if (button.classList.contains("js-remove-item")) removeCartItem(id);
      });
      list.addEventListener("change", (event) => {
        const input = event.target.closest(".js-qty-input");
        if (!input) return;
        const quantity = Number(input.value);
        if (!Number.isSafeInteger(quantity) || quantity < 1) { renderCartPage(); return; }
        updateCartItemQuantity(input.dataset.cartItemId, quantity);
      });
    }
    if (clearButton) clearButton.addEventListener("click", clearCart);
  }

  let showCartFeedback;
  function initCartFeedback() {
    const announcement = document.createElement("div");
    announcement.className = "cart-toast-announcement";
    announcement.setAttribute("role", "status");
    announcement.setAttribute("aria-atomic", "true");

    const toast = document.createElement("aside");
    toast.className = "cart-toast";
    toast.setAttribute("aria-label", "Thông báo giỏ hàng");
    toast.hidden = true;
    toast.innerHTML = `
      <div class="cart-toast__body">
        <p class="cart-toast__title"></p>
        <p class="cart-toast__message"></p>
        <a class="cart-toast__link" href="cart.html">Xem giỏ hàng</a>
      </div>
      <button class="cart-toast__close" type="button" aria-label="Đóng thông báo">×</button>`;
    document.body.append(announcement, toast);

    let trigger = null;
    toast.querySelector(".cart-toast__close").addEventListener("click", () => {
      const shouldRestoreFocus = toast.contains(document.activeElement);
      toast.hidden = true;
      announcement.textContent = "";
      if (shouldRestoreFocus && trigger?.isConnected) trigger.focus({ preventScroll: true });
    });

    const title = toast.querySelector(".cart-toast__title");
    const message = toast.querySelector(".cart-toast__message");
    const link = toast.querySelector(".cart-toast__link");
    return (success, productName, quantity, button) => {
      trigger = button;
      title.textContent = success ? "Đã thêm vào giỏ hàng" : "Chưa thể thêm vào giỏ";
      message.textContent = success
        ? `Đã thêm ${quantity} × ${productName} vào giỏ hàng.`
        : "Vui lòng thử lại.";
      link.hidden = !success;
      toast.dataset.state = success ? "success" : "error";
      toast.hidden = false;
      announcement.textContent = `${title.textContent}. ${message.textContent}`;
    };
  }

  window.addToCartWithFeedback = (product, quantity, button, customization = {}) => {
    let success = false;
    try {
      success = typeof window.addToCart === "function"
        && window.addToCart(product.id, quantity, customization) === true;
    } catch (error) {
      console.error("Memoria Lab: lỗi khi thêm sản phẩm vào giỏ.", error);
    }
    showCartFeedback ||= initCartFeedback();
    showCartFeedback(success, product.name, quantity, button);
    return success;
  };

  window.addEventListener("cartUpdated", renderCartPage);
  window.addEventListener("storage", (event) => {
    if (event.key === (window.CART_STORAGE_KEY || "memoria_cart") || event.key === null) renderCartPage();
  });

  document.addEventListener("DOMContentLoaded", () => {
    initCartEvents();
    if (document.querySelector("#detail-add-to-cart, #product-list, #featured-product-list")) {
      showCartFeedback ||= initCartFeedback();
    }
    renderCartPage();
  });
})();
