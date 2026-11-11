/**
 * Memoria Lab – Quản lý giỏ hàng.
 * Mỗi dòng được định danh bằng sản phẩm + lựa chọn cá nhân hóa + ghi chú.
 */
(() => {
  "use strict";

  const CART_STORAGE_KEY = "memoria_cart";

  function normalizeProductId(value) {
    if (typeof value === "number" && Number.isFinite(value)) return String(value);
    if (typeof value === "string" && value.trim()) return value.trim();
    return null;
  }

  function normalizeQuantity(value) {
    const number = typeof value === "number" ? value : Number(value);
    return Number.isSafeInteger(number) && number > 0 ? number : null;
  }

  function normalizeCustomization(customization = {}) {
    const source = customization && typeof customization === "object" ? customization : {};
    const rawOptions = source.options && typeof source.options === "object" ? source.options : {};
    const options = {};
    Object.keys(rawOptions).sort().forEach((key) => {
      const value = String(rawOptions[key] ?? "").trim();
      if (key.trim() && value) options[key.trim()] = value;
    });
    return {
      options,
      personalNote: String(source.personalNote ?? "").trim().slice(0, 500)
    };
  }

  function getCustomizationKey(customization) {
    const clean = normalizeCustomization(customization);
    return JSON.stringify([clean.options, clean.personalNote]);
  }

  function createCartItemId(productId, customization) {
    return JSON.stringify([String(productId), getCustomizationKey(customization)]);
  }

  function getCart() {
    try {
      if (window.MemoriaCartStorage && typeof window.MemoriaCartStorage.load === "function") {
        return window.MemoriaCartStorage.load();
      }
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
      console.error("Memoria Lab: không đọc được giỏ hàng.", error);
      return [];
    }
  }

  function saveCart(cart) {
    try {
      if (window.MemoriaCartStorage && typeof window.MemoriaCartStorage.save === "function") {
        return window.MemoriaCartStorage.save(cart);
      }
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
      return true;
    } catch (error) {
      console.error("Memoria Lab: không lưu được giỏ hàng.", error);
      return false;
    }
  }

  function notifyCartUpdated(cart) {
    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: { cart } }));
  }

  function addToCart(productId, quantity = 1, customization = {}) {
    const cleanId = normalizeProductId(productId);
    const addQty = normalizeQuantity(quantity);
    const products = Array.isArray(window.products) ? window.products : [];
    if (!cleanId || !addQty) return false;

    const product = products.find((item) => normalizeProductId(item.id) === cleanId);
    if (!product) {
      console.error("Memoria Lab: không tìm thấy sản phẩm", cleanId);
      return false;
    }

    const cleanCustomization = normalizeCustomization(customization);
    const cartItemId = createCartItemId(cleanId, cleanCustomization);
    const cart = getCart();
    const existing = cart.find((item) =>
      createCartItemId(normalizeProductId(item.productId), item) === cartItemId
    );

    if (existing) {
      const nextQuantity = normalizeQuantity(existing.quantity + addQty);
      if (!nextQuantity) return false;
      existing.quantity = nextQuantity;
    } else {
      cart.push({
        cartItemId,
        productId: product.id,
        name: product.name,
        price: Number(product.price),
        image: product.image,
        quantity: addQty,
        options: cleanCustomization.options,
        personalNote: cleanCustomization.personalNote
      });
    }

    if (!saveCart(cart)) return false;
    notifyCartUpdated(getCart());
    return true;
  }

  function updateCartItemQuantity(cartItemId, newQuantity) {
    const quantity = normalizeQuantity(newQuantity);
    if (!quantity || typeof cartItemId !== "string") return false;
    const cart = getCart();
    const item = cart.find((entry) => entry.cartItemId === cartItemId);
    if (!item) return false;
    item.quantity = quantity;
    if (!saveCart(cart)) return false;
    notifyCartUpdated(getCart());
    return true;
  }

  // API tương thích ngược: chỉ cập nhật khi mã sản phẩm có đúng một dòng trong giỏ.
  function updateCartQuantity(productId, newQuantity) {
    const cleanId = normalizeProductId(productId);
    const matches = getCart().filter((item) => normalizeProductId(item.productId) === cleanId);
    if (matches.length !== 1) return false;
    return updateCartItemQuantity(matches[0].cartItemId, newQuantity);
  }

  function removeCartItem(cartItemId) {
    if (typeof cartItemId !== "string") return false;
    const cart = getCart();
    const next = cart.filter((item) => item.cartItemId !== cartItemId);
    if (next.length === cart.length) return false;
    if (!saveCart(next)) return false;
    notifyCartUpdated(getCart());
    return true;
  }

  function removeFromCart(productId) {
    const cleanId = normalizeProductId(productId);
    const cart = getCart();
    const next = cart.filter((item) => normalizeProductId(item.productId) !== cleanId);
    if (next.length === cart.length) return false;
    if (!saveCart(next)) return false;
    notifyCartUpdated(getCart());
    return true;
  }

  function clearCart() {
    try {
      if (window.MemoriaCartStorage && typeof window.MemoriaCartStorage.save === "function") {
        if (!window.MemoriaCartStorage.save([])) return false;
      } else {
        localStorage.removeItem(CART_STORAGE_KEY);
      }
      notifyCartUpdated([]);
      return true;
    } catch (error) {
      console.error("Memoria Lab: không xóa được giỏ hàng.", error);
      return false;
    }
  }

  function getCartSummary() {
    const items = getCart().map((item) => ({
      ...item,
      subtotal: Number(item.price) * Number(item.quantity)
    }));
    return {
      items,
      totalQuantity: items.reduce((sum, item) => sum + Number(item.quantity || 0), 0),
      totalPrice: items.reduce((sum, item) => sum + item.subtotal, 0)
    };
  }

  window.CART_STORAGE_KEY = CART_STORAGE_KEY;
  window.getCart = getCart;
  window.saveCart = saveCart;
  window.addToCart = addToCart;
  window.updateCartQuantity = updateCartQuantity;
  window.updateCartItemQuantity = updateCartItemQuantity;
  window.removeFromCart = removeFromCart;
  window.removeCartItem = removeCartItem;
  window.clearCart = clearCart;
  window.getCartSummary = getCartSummary;
})();
