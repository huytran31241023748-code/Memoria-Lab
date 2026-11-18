/* Memoria Lab – render sản phẩm dùng chung cho trang chủ và danh sách. */
(() => {
  "use strict";

  const products = Array.isArray(window.products) ? window.products : [];
  const money = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0
  });

  const categoryLabels = {
    photostrip: "Dải ảnh",
    cards: "Thiệp & Postcard",
    frames: "Khung tranh & Scrapbook",
    combo: "Combo"
  };

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  }

  function showEmptyState(container, message) {
    container.replaceChildren();
    const notice = makeElement("p", "product-render-message", message);
    notice.setAttribute("role", "status");
    container.appendChild(notice);
  }

  function createProductCard(product, options = {}) {
    const featured = options.featured === true;
    const card = makeElement("article", "product-card");
    card.dataset.category = product.category;
    card.dataset.productId = String(product.id);

    const detailUrl = `product-detail.html?id=${encodeURIComponent(product.id)}`;
    const imageBox = makeElement("a", "product-card__img-box product-card__image-link");
    imageBox.href = detailUrl;
    imageBox.setAttribute("aria-label", `Xem chi tiết ${product.name}`);
    const image = makeElement("img", "product-card__image");
    image.src = product.image;
    image.alt = `Hình ảnh minh họa ${product.name}`;
    image.loading = "lazy";
    image.decoding = "async";
    image.addEventListener("error", () => {
      const fallback = makeElement(
        "div",
        "product-card__image-fallback",
        "Hình ảnh sản phẩm hiện chưa tải được"
      );
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", `Không tải được ảnh ${product.name}`);
      image.replaceWith(fallback);
    }, { once: true });
    imageBox.appendChild(image);
    card.appendChild(imageBox);

    const body = makeElement("div", "product-card__body");
    const category = makeElement(
      "p",
      "product-card__category",
      categoryLabels[product.category] || product.category
    );
    body.appendChild(category);

    const title = makeElement("h3", "product-card__title");
    const titleLink = makeElement("a", "product-card__title-link", product.name);
    titleLink.href = detailUrl;
    title.appendChild(titleLink);
    title.id = `product-title-${String(product.id).replace(/[^a-zA-Z0-9_-]/g, "-")}`;
    card.setAttribute("aria-labelledby", title.id);
    body.appendChild(title);

    if (featured && product.description) {
      body.appendChild(makeElement("p", "product-card__summary", product.description));
    }

    const price = makeElement("p", "product-card__price", money.format(Number(product.price)));
    const actions = makeElement("div", featured ? "product-card__purchase" : "product-card__actions");
    actions.appendChild(price);

    const detailLink = makeElement("a", "btn product-card__btn", "Xem chi tiết");
    detailLink.href = detailUrl;
    detailLink.setAttribute("aria-label", `Xem chi tiết ${product.name}`);
    actions.appendChild(detailLink);

    const addButton = makeElement("button", "btn product-card__add-btn", "Thêm vào giỏ");
    addButton.type = "button";
    addButton.dataset.addToCart = String(product.id);
    addButton.setAttribute("aria-label", `Thêm ${product.name} vào giỏ hàng`);
    actions.appendChild(addButton);

    body.appendChild(actions);
    card.appendChild(body);
    return card;
  }

  function renderProducts(list, containerOrId, options = {}) {
    const container = typeof containerOrId === "string"
      ? document.getElementById(containerOrId)
      : containerOrId;

    if (!container) {
      console.warn("Memoria Lab: không tìm thấy vùng hiển thị sản phẩm.");
      return;
    }

    if (!Array.isArray(list) || list.length === 0) {
      showEmptyState(container, "Hiện chưa có sản phẩm phù hợp. Vui lòng thử lại sau.");
      return;
    }

    const fragment = document.createDocumentFragment();
    list.forEach((product) => fragment.appendChild(createProductCard(product, options)));
    container.replaceChildren(fragment);
  }

  // API dùng chung để Quyên gọi lại sau tìm kiếm, lọc và sắp xếp.
  window.renderProducts = renderProducts;
  window.createProductCard = createProductCard;

  document.addEventListener("DOMContentLoaded", () => {
    const featuredContainer = document.getElementById("featured-product-list");

    if (featuredContainer) renderProducts(products.slice(0, 4), featuredContainer, { featured: true });

    const spotlight = document.querySelector("[data-spotlight-product]");
    if (!spotlight) return;
    const product = products.find((item) => String(item.id) === spotlight.dataset.spotlightProduct);
    if (!product) return;

    const spec = product.specs?.["Kích thước / quy cách"];
    if (spec) {
      const specElement = spotlight.querySelector("[data-spotlight-spec]");
      specElement.textContent = spec;
      specElement.hidden = false;
    }

    const priceElement = spotlight.querySelector("[data-spotlight-price]");
    priceElement.textContent = money.format(Number(product.price));
    priceElement.hidden = false;
  });

  // Dùng event delegation để các nút vẫn hoạt động sau mỗi lần render lại.
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add-to-cart]");
    if (!button) return;

    const product = products.find((item) => String(item.id) === button.dataset.addToCart);
    if (product) window.addToCartWithFeedback(product, 1, button);
  });
})();
