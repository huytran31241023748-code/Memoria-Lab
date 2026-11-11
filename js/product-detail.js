/* Memoria Lab - Trang chi tiết động. Chỉ dùng window.products (products.js). */
(() => {
  "use strict";
  const params = new URLSearchParams(window.location.search);
  const rawId = params.get("id");
  // Mã URL chỉ chấp nhận số nguyên dương dạng số thập phân, có thể có số 0 đầu.
  const valid = typeof rawId === "string" && /^\d+$/.test(rawId.trim()) && Number.isSafeInteger(Number(rawId.trim())) && Number(rawId.trim()) > 0;
  const id = valid ? String(Number(rawId.trim())) : null;
  const products = Array.isArray(window.products) ? window.products : [];
  // Thiếu hoặc sai mã đều hiện thông báo, không tự chọn sản phẩm.
  const product = id === null ? null : products.find(item => String(item.id) === id);
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const money = new Intl.NumberFormat("vi-VN", {style:"currency",currency:"VND",maximumFractionDigits:0});
  const labels = { photostrip:"Dải ảnh", cards:"Thiệp & Postcard", frames:"Khung tranh & Scrapbook", combo:"Combo" };
  const notice = $("#product-detail-notice");
  const breadcrumbCurrent = $('.breadcrumb [aria-current="page"]');

  function fail(message) {
    if (!notice) return;
    notice.replaceChildren();
    const p = document.createElement("p"); p.textContent = message; notice.append(p);
    const link = document.createElement("a"); link.href = "products.html"; link.textContent = "← Quay lại danh sách sản phẩm"; notice.append(link);
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
  const meta = $('meta[name="description"]'); if (meta) meta.content = product.description;
  $("#product-title").textContent = product.name;
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;
  $(".product-price").textContent = price;
  $(".product-tag").textContent = labels[product.category] || product.category;
  $(".product-summary").textContent = product.description;
  const descriptions = Array.isArray(product.detailDescription) && product.detailDescription.length ? product.detailDescription : [product.description];
  const descriptionPanel = $("#description-panel");
  const descHeading = document.createElement("h2");descHeading.textContent = `Về ${product.name}`;descriptionPanel.append(descHeading);
  descriptions.forEach(text => {const p=document.createElement("p");p.textContent=text;descriptionPanel.append(p);});
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
      select.setAttribute("aria-describedby", "customization-note");
      title.className = "field-title";
      title.htmlFor = select.id;
      title.textContent = label;
      choices.forEach(choice => select.add(new Option(choice)));
      item.append(title, select);
      choiceGrid.append(item);
      return;
    }

    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.className = "field-title";
    term.textContent = label;
    description.textContent = value;
    item.append(term, description);
    quickSpecs.append(item);
  });
  choiceGrid.hidden = choiceGrid.childElementCount === 0;

  const specs = $(".spec-list");
  const info = {"Tên sản phẩm":product.name,"Danh mục":labels[product.category] || product.category,...(product.specs || {}),"Giá":price};
  Object.entries(info).forEach(([label,value]) => {
    const div=document.createElement("div"),dt=document.createElement("dt"),dd=document.createElement("dd");
    dt.textContent=label;dd.textContent=value;div.append(dt,dd);specs.append(div);
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

  const grid = $(".related-grid");
  const related = products.filter(item => String(item.id) !== String(product.id))
    .sort((a,b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0,3);
  related.forEach(item => {
    const article=document.createElement("article");article.className="related-card";
    const href=`product-detail.html?id=${encodeURIComponent(item.id)}`;
    const photoLink=document.createElement("a");photoLink.href=href;
    const img=document.createElement("img");img.src=item.image;img.alt=item.name;img.loading="lazy";img.width=300;img.height=375;photoLink.append(img);
    const body=document.createElement("div");body.className="related-card__body";
    const title=document.createElement("h3"),nameLink=document.createElement("a");nameLink.href=href;nameLink.textContent=item.name;title.append(nameLink);
    const p=document.createElement("p");p.textContent=money.format(Number(item.price));
    const action=document.createElement("a");action.href=href;action.textContent="Xem chi tiết →";
    body.append(title,p,action);article.append(photoLink,body);grid.append(article);
  });
  const addButton = $("#detail-add-to-cart");
  const note = $("#purchase-note");
  const quantityInput = $("#quantity");
  const decreaseQuantity = $("#detail-quantity-decrease");
  const increaseQuantity = $("#detail-quantity-increase");
  quantityInput.max = String(Number.MAX_SAFE_INTEGER);

  function updateQuantityControls() {
    quantityInput.setCustomValidity("");
    const quantity = quantityInput.valueAsNumber;
    decreaseQuantity.disabled = quantity === 1;
    increaseQuantity.disabled = quantity === Number.MAX_SAFE_INTEGER;
  }

  function changeQuantity(step) {
    const quantity = quantityInput.valueAsNumber;
    const next = Number.isSafeInteger(quantity) && quantity >= 1 ? quantity + step : 1;
    if (Number.isSafeInteger(next) && next >= 1) {
      quantityInput.value = String(next);
    }
    updateQuantityControls();
  }

  quantityInput.addEventListener("input", updateQuantityControls);
  decreaseQuantity.addEventListener("click", () => changeQuantity(-1));
  increaseQuantity.addEventListener("click", () => changeQuantity(1));
  $("#detail-customize").addEventListener("click", () => {
    $("#personal-note").focus();
    note.textContent = "Bạn có thể thử các lựa chọn và ghi chú thiết kế tại đây. Studio thiết kế chưa mở.";
  });
  addButton.addEventListener("click", () => {
    const quantity = quantityInput.valueAsNumber;
    if (!Number.isSafeInteger(quantity) || quantity < 1) {
      quantityInput.setCustomValidity("Vui lòng nhập số nguyên dương hợp lệ.");
      quantityInput.reportValidity();
      return;
    }
    window.addToCartWithFeedback(product, quantity, addButton);
  });
  $$("section.product-detail, section.product-tabs, section.related-products").forEach(section => section.hidden=false);
})();
