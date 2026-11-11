/* Giao diện giỏ của Yến, kết nối với API giỏ dùng chung. */
(() => {
    "use strict";

    const cartMoneyFormatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        maximumFractionDigits: 0
    });

    function formatCartMoney(amount) {
        return cartMoneyFormatter.format(Number(amount) || 0);
    }

    function escapeHtml(str) {
        return String(str || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    /**
     * Tự động cập nhật số lượng trên nút Giỏ hàng ở Header mà không cần sửa HTML Header
     */
    function syncHeaderCartIcon() {
        const cartBtn = document.querySelector('.header-actions [aria-label*="Giỏ hàng"]');
        if (!cartBtn) return;

        let badge = cartBtn.querySelector('.cart-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.id = 'header-cart-count';
            badge.setAttribute('aria-live', 'polite');
            cartBtn.appendChild(badge);
        }

        if (cartBtn.tagName === 'BUTTON' && !cartBtn.dataset.cartNavBound) {
            cartBtn.dataset.cartNavBound = 'true';
            cartBtn.addEventListener('click', function () {
                if (!window.location.pathname.endsWith('cart.html')) {
                    window.location.href = 'cart.html';
                }
            });
        }

        const { totalQuantity } = getCartSummary();
        badge.textContent = String(totalQuantity);

        if (totalQuantity > 0) {
            badge.removeAttribute('hidden');
            cartBtn.setAttribute('aria-label', `Giỏ hàng (${totalQuantity} sản phẩm)`);
        } else {
            badge.setAttribute('hidden', '');
            cartBtn.setAttribute('aria-label', 'Giỏ hàng (0 sản phẩm)');
        }
    }

    /**
     * Render giao diện trang cart.html dựa trên kết quả từ getCartSummary()
     */
    function renderCartPage() {
        syncHeaderCartIcon();

        const cartContentEl = document.getElementById('cart-content');
        const cartEmptyEl = document.getElementById('cart-empty');
        const itemsListEl = document.getElementById('cart-items-list');
        const totalQtyEl = document.getElementById('summary-total-qty');
        const totalPriceEl = document.getElementById('summary-total-price');

        if (!cartContentEl || !cartEmptyEl || !itemsListEl) return;

        const summary = getCartSummary();

        if (summary.items.length === 0) {
            cartContentEl.setAttribute('hidden', '');
            cartEmptyEl.removeAttribute('hidden');
            itemsListEl.innerHTML = '';
            if (totalQtyEl) totalQtyEl.textContent = '0';
            if (totalPriceEl) totalPriceEl.textContent = formatCartMoney(0);
            return;
        }

        cartEmptyEl.setAttribute('hidden', '');
        cartContentEl.removeAttribute('hidden');

        itemsListEl.innerHTML = summary.items.map(item => {
            const safeId = escapeHtml(item.productId);
            const safeName = escapeHtml(item.name);
            const safeImg = escapeHtml(item.image);
            const isMinQty = item.quantity <= 1;

            return `
              <li class="cart-item" data-product-id="${safeId}">
                <div class="cart-item__info">
                  <a class="cart-item__thumb-link" href="product-detail.html?id=${safeId}" aria-label="Xem chi tiết ${safeName}">
                    <img class="cart-item__thumb"
                         src="${safeImg}"
                         alt="${safeName}"
                         width="76"
                         height="95"
                         loading="lazy"
                         decoding="async">
                  </a>
                  <div class="cart-item__meta">
                    <h3 class="cart-item__name">
                      <a href="product-detail.html?id=${safeId}">${safeName}</a>
                    </h3>
                  </div>
                </div>

                <div class="cart-item__price">
                  <span class="cart-item__mobile-label">Đơn giá:</span>
                  <span>${formatCartMoney(item.price)}</span>
                </div>

                <div class="cart-item__qty">
                  <div class="qty-control" role="group" aria-label="Số lượng của ${safeName}">
                    <button type="button"
                            class="qty-btn js-qty-decrease"
                            data-product-id="${safeId}"
                            aria-label="Giảm số lượng ${safeName}"
                            ${isMinQty ? 'disabled' : ''}>−</button>
                    <input type="number"
                           class="qty-input js-qty-input"
                           data-product-id="${safeId}"
                           value="${item.quantity}"
                           min="1"
                           inputmode="numeric"
                           aria-label="Số lượng ${safeName}">
                    <button type="button"
                            class="qty-btn js-qty-increase"
                            data-product-id="${safeId}"
                            aria-label="Tăng số lượng ${safeName}">+</button>
                  </div>
                </div>

                <div class="cart-item__subtotal">
                  <span class="cart-item__mobile-label">Thành tiền:</span>
                  <span>${formatCartMoney(item.subtotal)}</span>
                </div>

                <div class="cart-item__remove">
                  <button type="button"
                          class="btn-remove js-remove-item"
                          data-product-id="${safeId}"
                          title="Xóa sản phẩm"
                          aria-label="Xóa ${safeName} khỏi giỏ hàng">✕</button>
                </div>
              </li>
            `;
        }).join('');

        if (totalQtyEl) totalQtyEl.textContent = String(summary.totalQuantity);
        if (totalPriceEl) totalPriceEl.textContent = formatCartMoney(summary.totalPrice);
    }

    /**
     * Kết nối các thao tác đổi số lượng và xóa trên trang giỏ hàng.
     */
    function initCartEvents() {
        const itemsListEl = document.getElementById('cart-items-list');
        const clearBtnEl = document.getElementById('btn-clear-cart');

        if (itemsListEl) {
            itemsListEl.addEventListener('click', function (event) {
                const btn = event.target.closest('button');
                if (!btn) return;

                const productId = btn.getAttribute('data-product-id');
                if (!productId) return;

                const currentItem = getCart().find(
                    i => String(i.productId).trim() === String(productId).trim()
                );

                if (btn.classList.contains('js-qty-increase') && currentItem) {
                    updateCartQuantity(productId, currentItem.quantity + 1);
                } else if (btn.classList.contains('js-qty-decrease') && currentItem) {
                    if (currentItem.quantity > 1) {
                        updateCartQuantity(productId, currentItem.quantity - 1);
                    }
                } else if (btn.classList.contains('js-remove-item')) {
                    removeFromCart(productId);
                }
            });

            itemsListEl.addEventListener('change', function (event) {
                const input = event.target.closest('.js-qty-input');
                if (!input) return;

                const productId = input.getAttribute('data-product-id');
                const newQty = Number(input.value);

                if (!Number.isSafeInteger(newQty) || newQty < 1) {
                    renderCartPage();
                    return;
                }

                updateCartQuantity(productId, newQty);
            });
        }

        if (clearBtnEl) {
            clearBtnEl.addEventListener('click', function () {
                clearCart();
            });
        }
    }

    window.addEventListener('cartUpdated', renderCartPage);
    window.addEventListener('storage', function (event) {
        if (event.key === CART_STORAGE_KEY || event.key === null) {
            renderCartPage();
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        initCartEvents();
        renderCartPage();
    });
})();
