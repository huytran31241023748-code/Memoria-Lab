/**
 * js/cart.js
 * Quản lý giỏ hàng: Thêm, cập nhật số lượng, xóa và tính toán tổng tiền.
 */

// Tên khóa lưu trữ giỏ hàng trong LocalStorage (Thống nhất thời điểm lưu với VHuy)
const CART_STORAGE_KEY = 'memoria_cart';

/**
 * Lấy danh sách giỏ hàng hiện tại từ LocalStorage
 * @returns {Array} Danh sách các item trong giỏ
 */
function getCart() {
    try {
        const cartData = localStorage.getItem(CART_STORAGE_KEY);
        const parsed = cartData ? JSON.parse(cartData) : [];
        return Array.isArray(parsed) ? parsed : [];
    } catch (error) {
        console.error('Lỗi khi đọc giỏ hàng từ LocalStorage:', error);
        return [];
    }
}

/**
 * Lưu danh sách giỏ hàng vào LocalStorage (Gọi sau mỗi thao tác theo thống nhất với VHuy)
 * @param {Array} cart - Mảng giỏ hàng mới
 */
function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        return true;
    } catch (error) {
        console.error('Lỗi khi lưu giỏ hàng vào LocalStorage:', error);
        return false;
    }
}

/**
 * Thêm sản phẩm vào giỏ hàng (Gọi chung từ nút danh sách & trang chi tiết)
 * @param {string|number} productId - Mã sản phẩm nhận từ DOM / URL
 * @param {number} quantity - Số lượng cần thêm (mặc định là 1)
 */
function addToCart(productId, quantity = 1) {
    // 1. Chuẩn hóa mã nhận từ nút (chuyển về chuỗi hoặc kiểu dữ liệu khớp với products.js)
    const cleanId = String(productId).trim();
    const addQty = Number(quantity);

    if (!Number.isSafeInteger(addQty) || addQty <= 0) {
        console.warn('Số lượng thêm vào không hợp lệ:', quantity);
        return false;
    }

    // 2. Tra cứu sản phẩm từ mảng dữ liệu chung `products` (products.js)
    if (typeof products === 'undefined' || !Array.isArray(products)) {
        console.error('Nguồn dữ liệu sản phẩm (products.js) chưa được nạp!');
        return false;
    }

    const product = products.find(p => String(p.id).trim() === cleanId);
    if (!product) {
        console.error(`Không tìm thấy sản phẩm có mã ID: ${cleanId}`);
        return false;
    }

    // 3. Đọc giỏ hàng hiện tại & xử lý thêm/tăng số lượng
    const cart = getCart();
    const existingIndex = cart.findIndex(item => String(item.productId).trim() === cleanId);

    if (existingIndex > -1) {
        // Đã có sản phẩm trong giỏ -> Tăng số lượng ở dòng hiện có
        const newQuantity = cart[existingIndex].quantity + addQty;
        if (!Number.isSafeInteger(newQuantity)) return false;
        cart[existingIndex].quantity = newQuantity;
    } else {
        // Chưa có -> Thêm dòng mới (lấy giá gốc từ dữ liệu sản phẩm chung)
        cart.push({
            productId: product.id,
            name: product.name,
            price: Number(product.price),
            image: product.image,
            quantity: addQty
        });
    }

    // 4. Lưu lại sau thao tác (thống nhất với VHuy)
    if (!saveCart(cart)) return false;

    // Kích hoạt sự kiện để các thành viên kết nối giao diện (Yến, Quang) cập nhật UI
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } }));

    return true;
}

/**
 * Cập nhật số lượng của một dòng sản phẩm trong giỏ hàng
 * @param {string|number} productId - Mã sản phẩm
 * @param {number} newQuantity - Số lượng mới (tối thiểu là 1)
 */
function updateCartQuantity(productId, newQuantity) {
    const cleanId = String(productId).trim();
    const targetQty = Number(newQuantity);

    // Giữ số lượng tối thiểu là 1 (không tự động xóa khi giảm về 0, việc xóa dùng hàm removeFromCart riêng)
    if (!Number.isSafeInteger(targetQty) || targetQty < 1) {
        console.warn('Số lượng phải tối thiểu là 1. Để xóa sản phẩm, hãy dùng thao tác xóa.');
        return false;
    }

    const cart = getCart();
    const item = cart.find(i => String(i.productId).trim() === cleanId);

    if (item) {
        item.quantity = targetQty;
        if (!saveCart(cart)) return false;
        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } }));
        return true;
    }

    return false;
}

/**
 * Xóa một sản phẩm khỏi giỏ hàng
 * @param {string|number} productId - Mã sản phẩm cần xóa
 */
function removeFromCart(productId) {
    const cleanId = String(productId).trim();
    let cart = getCart();

    const initialLength = cart.length;
    cart = cart.filter(item => String(item.productId).trim() !== cleanId);

    if (cart.length !== initialLength) {
        if (!saveCart(cart)) return false;
        window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart } }));
        return true;
    }

    return false;
}

/**
 * Xóa toàn bộ giỏ hàng
 */
function clearCart() {
    try {
        localStorage.removeItem(CART_STORAGE_KEY);
    } catch (error) {
        console.error('Lỗi khi xóa giỏ hàng khỏi LocalStorage:', error);
        return false;
    }
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { cart: [] } }));
    return true;
}

/**
 * Tính toán tổng hợp thông tin giỏ hàng (thành tiền từng dòng, tổng số lượng, tổng tiền)
 * @returns {Object} Thông tin chi tiết để Yến render giao diện
 */
function getCartSummary() {
    const cart = getCart();

    // Tính thành tiền từng dòng sản phẩm
    const itemsWithSubtotal = cart.map(item => ({
        ...item,
        subtotal: item.price * item.quantity
    }));

    // Tính tổng số lượng tất cả sản phẩm
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Tính tổng tiền toàn bộ giỏ hàng
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return {
        items: itemsWithSubtotal,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice
    };
}
