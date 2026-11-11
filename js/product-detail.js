/* Memoria Lab – Trang chi tiết động. */
(() => {
  "use strict";
  const params = new URLSearchParams(window.location.search);
  const rawId = params.get("id");
  const valid = typeof rawId === "string" && /^\d+$/.test(rawId.trim())
    && Number.isSafeInteger(Number(rawId.trim())) && Number(rawId.trim()) > 0;
  const id = valid ? String(Number(rawId.trim())) : null;
  const products = Array.isArray(window.products) ? window.products : [];
  const product = id === null ? null : products.find((item) => String(item.id) === id);
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const money = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });
  const labels = { photostrip: "Dải ảnh", cards: "Thiệp & Postcard", frames: "Khung tranh & Scrapbook", combo: "Combo" };
  const notice = $("#product-detail-notice");
  const breadcrumbCurrent = $('.breadcrumb [aria-current="page"]');

  function fail(message) {
    if (!notice) return;
    notice.replaceChildren();
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
    notice.append(paragraph);
    const link = document.createElement("a");
    link.href = "products.html";
    link.textContent = "← Quay lại danh sách sản phẩm";
    notice.append(link);
    notice.hidden = false;
    document.title = "Không tìm thấy sản phẩm | Memoria Lab";
    if (breadcrumbCurrent) breadcrumbCurrent.textContent = "Không tìm thấy sản phẩm";
  }

  if (!product) {
    fail(rawId === null ? "Thiếu mã sản phẩm trong đường dẫn." : "Mã sản phẩm không hợp lệ hoặc không tồn tại.");
    return;
  }

  const price = money.format(Number(product.price));
  document.title = `${product.name} | Memoria Lab`;
  const meta = $('meta[name="description"]');
  if (meta) meta.content = product.description;
  $("#product-title").textContent = product.name;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;
  $(".product-price").textContent = price;
  $(".product-tag").textContent = labels[product.category] || product.category;
  $(".product-summary").textContent = product.description;

  const descriptions = Array.isArray(product.detailDescription) && product.detailDescription.length
    ? product.detailDescription : [product.description];
  const descriptionPanel = $("#description-panel");
  const descriptionHeading = document.createElement("h2");
  descriptionHeading.textContent = `Về ${product.name}`;
  descriptionPanel.append(descriptionHeading);
  descriptions.forEach((value) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = value;
    descriptionPanel.append(paragraph);
  });

  const quickSpecs = $(".product-quick-specs");
  const choiceGrid = $("#detail-choices");
  const quickSpecLabels = ["Kích thước / quy cách", "Bố cục / thành phần", "Chất liệu", "Màu khung", "Phong bì", "Hộp quà", "Kỷ niệm số"];
  quickSpecLabels.forEach((label, index) => {
    const choices = product.previewOptions?.[label] || [];
    const value = choices[0] || product.specs?.[label];
    if (!value) return;
    const item = document.createElement("div");
    if (choices.length > 1) {
      const title = document.createElement("label");
      const select = document.createElement("select");
      select.id = `detail-choice-${index}`;
      select.dataset.optionLabel = label;
      select.setAttribute("aria-describedby", "customization-note");
      title.className = "field-title";
      title.htmlFor = select.id;
      title.textContent = label;
      choices.forEach((choice) => select.add(new Option(choice)));
      item.append(title, select);
      choiceGrid.append(item);
    } else {
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      term.className = "field-title";
      term.textContent = label;
      description.textContent = value;
      item.append(term, description);
      quickSpecs.append(item);
    }
  });
  choiceGrid.hidden = choiceGrid.childElementCount === 0;

  // Photostrip 1×3: xem trước ba ảnh tải từ thiết bị, không gửi ảnh lên máy chủ.
  if (String(product.id) === "1") {
    const uploadSection = document.createElement("section");
    uploadSection.className = "photostrip-customizer";
    uploadSection.setAttribute("aria-labelledby", "photostrip-customizer-title");
    const uploadHeading = document.createElement("h2");
    uploadHeading.id = "photostrip-customizer-title";
    uploadHeading.textContent = "Thử bố cục Photostrip 1×3";
    const uploadHelp = document.createElement("p");
    uploadHelp.className = "photostrip-customizer__help";
    uploadHelp.textContent = "Chọn ba ảnh từ thiết bị để xem thử thứ tự ảnh trên dải. Ảnh chỉ hiển thị trong phiên xem trước này.";
    const uploadGrid = document.createElement("div");
    uploadGrid.className = "photostrip-upload-grid";
    const previewUrls = [null, null, null];

    for (let index = 0; index < 3; index += 1) {
      const slot = document.createElement("label");
      slot.className = "photostrip-upload-slot";
      const preview = document.createElement("img");
      preview.className = "photostrip-upload-slot__image";
      preview.alt = `Ảnh xem trước ô ${index + 1}`;
      preview.hidden = true;
      const prompt = document.createElement("span");
      prompt.className = "photostrip-upload-slot__prompt";
      prompt.textContent = `+ Chọn ảnh ${index + 1}`;
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/jpeg,image/png,image/webp";
      input.setAttribute("aria-label", `Tải ảnh ${index + 1} cho Photostrip`);
      input.addEventListener("change", () => {
        const file = input.files && input.files[0];
        if (!file) return;
        if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
          input.value = "";
          uploadStatus.textContent = "Vui lòng chọn ảnh JPG, PNG hoặc WebP.";
          return;
        }
        if (previewUrls[index]) URL.revokeObjectURL(previewUrls[index]);
        previewUrls[index] = URL.createObjectURL(file);
        preview.src = previewUrls[index];
        preview.hidden = false;
        prompt.hidden = true;
        slot.classList.add("has-image");
        uploadStatus.textContent = `Đã chọn ảnh ${index + 1}.`;
      });
      slot.append(preview, prompt, input);
      uploadGrid.append(slot);
    }

    const uploadStatus = document.createElement("p");
    uploadStatus.className = "photostrip-customizer__status";
    uploadStatus.setAttribute("role", "status");
    uploadSection.append(uploadHeading, uploadHelp, uploadGrid, uploadStatus);
    choiceGrid.after(uploadSection);
    window.addEventListener("beforeunload", () => {
      previewUrls.forEach((url) => { if (url) URL.revokeObjectURL(url); });
    });

    const noteLabel = $('label[for="personal-note"]');
    const noteInput = $("#personal-note");
    if (noteLabel) noteLabel.textContent = "Ghi chú ngắn (không bắt buộc)";
    if (noteInput) {
      noteInput.maxLength = 120;
      noteInput.placeholder = "Ví dụ: Mãi bên nhau nhé!";
    }
  }

  const specs = $(".spec-list");
  const info = { "Tên sản phẩm": product.name, "Danh mục": labels[product.category] || product.category, ...(product.specs || {}), "Giá": price };
  Object.entries(info).forEach(([label, value]) => {
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    row.append(term, description);
    specs.append(row);
  });

  const gallery = $(".product-gallery");
  const photos = [product.image, ...(product.gallery || []).slice(0, 2)];
  const viewLabels = $$(".gallery-thumbs label", gallery);
  const stages = $$(".gallery-stage img", gallery);
  const radios = $$(".gallery-input", gallery);
  viewLabels.slice(photos.length).forEach((label) => { label.hidden = true; });

  function setGalleryImage(image, source, description) {
    image.alt = description;
    image.addEventListener("error", () => {
      image.alt = "Ảnh sản phẩm hiện chưa tải được";
      image.removeAttribute("src");
    }, { once: true });
    image.src = source;
  }

  photos.forEach((source, index) => {
    const label = viewLabels[index].textContent.trim();
    setGalleryImage(stages[index], source, `${label} – ${product.name}`);
    if (photos.length > 1) {
      setGalleryImage($("img", viewLabels[index]), source, "");
      radios[index].setAttribute("aria-label", label);
      radios[index].hidden = false;
    }
  });
  if (photos.length > 1) {
    gallery.classList.add("product-gallery--multiple");
    $(".gallery-thumbs", gallery).hidden = false;
    $(".gallery-disclosure", gallery).hidden = false;
  }

  const stage = $(".gallery-stage", gallery);
  const lightbox = document.createElement("div");
  lightbox.className = "product-lightbox";
  lightbox.hidden = true;
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.setAttribute("aria-label", `Ảnh sản phẩm ${product.name}`);
  lightbox.innerHTML = `
    <button class="product-lightbox__close" type="button" aria-label="Đóng ảnh">×</button>
    <button class="product-lightbox__arrow product-lightbox__prev" type="button" aria-label="Ảnh trước">‹</button>
    <img class="product-lightbox__image" alt="">
    <button class="product-lightbox__arrow product-lightbox__next" type="button" aria-label="Ảnh tiếp theo">›</button>
    <p class="product-lightbox__counter" aria-live="polite"></p>`;
  document.body.append(lightbox);
  const lightboxImage = $(".product-lightbox__image", lightbox);
  const lightboxCounter = $(".product-lightbox__counter", lightbox);
  let activePhoto = 0;
  let previousFocus = null;

  function currentPhotoIndex() {
    const checked = radios.findIndex((radio) => radio.checked);
    return checked >= 0 ? checked : 0;
  }
  function showPhoto(index) {
    activePhoto = (index + photos.length) % photos.length;
    if (radios[activePhoto]) radios[activePhoto].checked = true;
    lightboxImage.src = photos[activePhoto];
    lightboxImage.alt = `${product.name} – ảnh ${activePhoto + 1}`;
    lightboxCounter.textContent = `${activePhoto + 1} / ${photos.length}`;
  }
  function openLightbox() {
    previousFocus = document.activeElement;
    showPhoto(currentPhotoIndex());
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
    $(".product-lightbox__close", lightbox).focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    if (previousFocus && previousFocus.isConnected) previousFocus.focus();
  }
  function movePhoto(step) { showPhoto(activePhoto + step); }

  stage.addEventListener("click", openLightbox);
  stage.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); openLightbox(); }
  });
  stage.tabIndex = 0;
  stage.setAttribute("role", "button");
  stage.setAttribute("aria-label", "Mở ảnh sản phẩm toàn màn hình");
  $(".product-lightbox__close", lightbox).addEventListener("click", closeLightbox);
  $(".product-lightbox__prev", lightbox).addEventListener("click", () => movePhoto(-1));
  $(".product-lightbox__next", lightbox).addEventListener("click", () => movePhoto(1));
  lightbox.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    else if (event.key === "ArrowLeft") { event.preventDefault(); movePhoto(-1); }
    else if (event.key === "ArrowRight") { event.preventDefault(); movePhoto(1); }
  });

  const relatedGrid = $(".related-grid");
  const related = products.filter((item) => String(item.id) !== String(product.id))
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 3);
  related.forEach((item) => {
    const article = document.createElement("article");
    article.className = "related-card";
    const href = `product-detail.html?id=${encodeURIComponent(item.id)}`;
    const imageLink = document.createElement("a");
    imageLink.href = href;
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.name;
    image.loading = "lazy";
    image.width = 300;
    image.height = 375;
    imageLink.append(image);
    const body = document.createElement("div");
    body.className = "related-card__body";
    const heading = document.createElement("h3");
    const nameLink = document.createElement("a");
    nameLink.href = href;
    nameLink.textContent = item.name;
    heading.append(nameLink);
    const paragraph = document.createElement("p");
    paragraph.textContent = money.format(Number(item.price));
    const action = document.createElement("a");
    action.href = href;
    action.textContent = "Xem chi tiết →";
    body.append(heading, paragraph, action);
    article.append(imageLink, body);
    relatedGrid.append(article);
  });

  const addButton = $("#detail-add-to-cart");
  const purchaseNote = $("#purchase-note");
  const quantityInput = $("#quantity");
  const decreaseButton = $("#detail-quantity-decrease");
  const increaseButton = $("#detail-quantity-increase");
  quantityInput.max = String(Number.MAX_SAFE_INTEGER);

  function updateQuantityControls() {
    quantityInput.setCustomValidity("");
    const quantity = quantityInput.valueAsNumber;
    decreaseButton.disabled = quantity === 1;
    increaseButton.disabled = quantity === Number.MAX_SAFE_INTEGER;
  }
  function changeQuantity(step) {
    const current = quantityInput.valueAsNumber;
    const next = Number.isSafeInteger(current) && current >= 1 ? current + step : 1;
    if (Number.isSafeInteger(next) && next >= 1) quantityInput.value = String(next);
    updateQuantityControls();
  }
  quantityInput.addEventListener("input", updateQuantityControls);
  decreaseButton.addEventListener("click", () => changeQuantity(-1));
  increaseButton.addEventListener("click", () => changeQuantity(1));
  $("#detail-customize").addEventListener("click", () => {
    $("#personal-note").focus();
    purchaseNote.textContent = "Bạn có thể chọn quy cách và ghi chú cá nhân hóa trước khi thêm vào giỏ.";
  });

  addButton.addEventListener("click", () => {
    const quantity = quantityInput.valueAsNumber;
    if (!Number.isSafeInteger(quantity) || quantity < 1) {
      quantityInput.setCustomValidity("Vui lòng nhập số nguyên dương hợp lệ.");
      quantityInput.reportValidity();
      return;
    }
    const options = {};
    $$("#detail-choices select").forEach((select) => {
      options[select.dataset.optionLabel || select.id] = select.value;
    });
    const customization = { options, personalNote: $("#personal-note").value };
    window.addToCartWithFeedback(product, quantity, addButton, customization);
  });

  $$("section.product-detail, section.product-tabs, section.related-products").forEach((section) => { section.hidden = false; });
})();
