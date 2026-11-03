# Nhật ký tích hợp website Memoria Lab – Buổi 2

- **Nhiệm vụ:** 9 – Tích hợp, kiểm thử và GitHub (phần của VHuy – Vũ Trọng Huy).
- **Ngày thực hiện:** 03/11/2026.
- **Người thực hiện:** VHuy, thực hiện có hỗ trợ AI (Claude Code).
- **Kiểm thử thủ công:** ngày 03/11/2026 VHuy đã tự kiểm tra trên Chrome/Edge 5 nhóm (4 trang, điều hướng và 8 sản phẩm, responsive 1366/768/390px, hover, focus bằng Tab). Kết quả cụ thể từng tiêu chí: **Chưa xác nhận** (xem mục 4B), trừ header/menu ở 390/768/1366px và viền focus của menu: VHuy đã kiểm thử lại sau TH-20 và xác nhận đạt.
- **Phương án:** PA-B, gồm một CSS nền dùng chung (`css/style.css`) và một CSS riêng cho từng trang.
- **Nền tích hợp:** bản sao `03_GITHUB_HIEN_TAI`. Các thư mục `01_…`, `02_…`, `03_…` không bị chỉnh sửa.
- **Trạng thái GitHub:** chưa commit, chưa push, chưa tạo nhánh.

Quy ước trạng thái:

| Ký hiệu | Ý nghĩa |
|---|---|
| ✅ AI-KIỂM | Đã thay đổi; Claude đã kiểm chứng bằng công cụ (phương pháp ghi ở mục 4A). Đây không phải kết quả kiểm tra thủ công của VHuy. |
| 🧑 VHUY-ĐÃ-KIỂM | VHuy đã thực hiện kiểm tra thủ công trên trình duyệt; kết quả ghi ở mục 4B. |
| ❔ CHƯA XÁC NHẬN | Đã có bước kiểm tra nhưng chưa có kết quả cụ thể hoặc minh chứng; không được coi là Đạt. |
| ⏳ CHƯA KIỂM | Đã thay đổi nhưng chưa có công cụ nào kiểm chứng. |
| ⚠️ TỒN TẠI | Vấn đề còn tồn tại trong bản tích hợp. |
| 👥 THÀNH VIÊN KHÁC | Vấn đề thuộc phần việc của thành viên khác; chỉ ghi nhận. |

---

## 1. Bảng đối chiếu nguồn gốc HTML/CSS

| File trong bản tích hợp | Nguồn | Người viết ban đầu | Mức thay đổi khi tích hợp |
|---|---|---|---|
| `index.html` dòng 1–91, 215–cuối | `03_GITHUB_HIEN_TAI/index.html` | Kim Anh (header, hero, quy trình, Photobooth/Studio, quà theo dịp), Yến (footer) | TH-05 (2 nút Photobooth/Studio) |
| `index.html` dòng 92–214 | `04_THUY…/ban-giao/featured-products.html` | Trần Lâm Huy (THuy) | TH-03, TH-04 |
| `css/style.css` dòng 1–666 | `03_GITHUB_HIEN_TAI/css/style.css` (bằng bản của Yến) | Kim Anh, Yến | Không đổi |
| `css/style.css` dòng 668–956 | `04_THUY…/ban-giao/featured-products.css` | THuy | Nối nguyên văn (TH-02) |
| `products.html` | `03_QUYEN_DANH_SACH/products.html` | Quyên (header/footer chép từ Kim Anh/Yến) | TH-07, TH-08 |
| `css/products.css` | `03_QUYEN…/css/style.css` dòng 667–902 | Quyên | Chép nguyên văn và thêm 1 dòng chú thích nguồn (TH-06) |
| `product-detail.html` | `05_QUANG_CHI_TIET/product-detail-01.html` | Quang | Sao chép với tên mới (TH-09), thêm link CSS (TH-13) |
| `product-detail-02.html` … `product-detail-08.html` | `05_QUANG_CHI_TIET/` cùng tên | Quang | Thêm link CSS (TH-13) |
| `css/product-detail.css` | `05_QUANG…/css/style.css` dòng 554–575 và 820–821 | Quang | TH-10, TH-11, TH-12 |
| `about.html` | `06_VANH_GIOI_THIEU/about.html` | Vương Thị Anh (Vanh) | TH-15, TH-16, TH-17 |
| `css/about.css` | `06_VANH…/css/style.css` dòng 667–1150 | Vanh | Chép nguyên văn và thêm 1 dòng chú thích nguồn (TH-14) |
| `images/products/product-01…08.jpg` | `03_GITHUB_HIEN_TAI/images/products/` | Nhóm (đặc tả Kim Anh) | Không đổi; md5 trùng bản của Quyên, THuy, Quang |
| `images/` 7 ảnh trang giới thiệu | `06_VANH_GIOI_THIEU/images/` | Vanh | Chép, giữ nguyên tên (TH-18) |
| `README.md` | `03_GITHUB_HIEN_TAI/README.md` | Trần Lâm Huy (Chương 1) | Thêm mục Buổi 2, giữ nguyên Chương 1 (TH-19) |
| `docs/`, `AGENTS.md`, `PROJECT_PLAN.md`, `REQUIREMENTS.md`, `AI_USAGE_LOG.md` | `03_GITHUB_HIEN_TAI` | Như trên GitHub | Không đổi |

**Không đưa vào bản tích hợp** (vẫn giữ nguyên ở `02_SOURCE_GOC_THANH_VIEN`):

- `index.html`, `products.html`, `about.html` và `images/*.jpg|png` (ảnh wireframe) của Quang: đây là các bản riêng của trang thành viên khác.
- `product-detail-01.html` của Quang: đã dùng làm `product-detail.html`; giữ thêm bản `-01` sẽ thành trang trùng lặp mà không có link nào dẫn tới.
- Toàn bộ `xem-thu/`, `minh-chung/`, `docs/` của THuy: là bản xem thử và minh chứng.
- `index.html` của Vanh: bản sao của Yến.
- CSS phần nền đã lặp lại trong file của Quyên, Quang, Vanh (dòng 1–666/553): trùng với `css/style.css`.

---

## 2. Nhật ký thay đổi chi tiết

### TH-01. Tạo bản tích hợp — ✅ AI-KIỂM
- **File:** toàn bộ thư mục `04_WEBSITE_TICH_HOP_VHUY`.
- **Thay đổi:** sao chép nguyên `03_GITHUB_HIEN_TAI`, sau đó chép các file của thành viên như bảng mục 1.
- **Lý do:** đề yêu cầu tích hợp trên bản sao độc lập.
- **Kiểm tra:** so md5 ảnh sản phẩm; so khác biệt (`diff`) giữa phần CSS nền và bản gốc → giống hệt.

### TH-02. `css/style.css` – nối CSS sản phẩm nổi bật — ✅ AI-KIỂM
- **Người viết ban đầu:** THuy.
- **Trước:** file kết thúc ở dòng 666 (`}` cuối media query mobile của footer).
- **Sau:** dòng 667 để trống, dòng 668–956 là nguyên văn `featured-products.css`, bắt đầu bằng:
  ```css
  /* THuy - Bo sung vao cuoi css/style.css, sau CSS nen cua nhom. */
  .featured-products {
  ```
- **Lý do:** làm theo hướng dẫn bàn giao của THuy (README mục 4.2). Mọi selector đều nằm dưới `.featured-products` hoặc `#product-01…04`, nên không ảnh hưởng trang khác.
- **Tác động:** chỉ khu vực sản phẩm nổi bật ở trang chủ.
- **Kiểm tra:** `diff` dòng 668–cuối với file bàn giao → giống hệt.

### TH-03. `index.html` – thay khu vực sản phẩm nổi bật — ✅ AI-KIỂM
- **Người viết ban đầu:** Kim Anh (ô giữ chỗ), THuy (nội dung mới).
- **Trước (dòng 92–127):**
  ```html
  <!-- CHỖ GHÉP SẢN PHẨM TỪ BƯỚC 5 -->
  <section class="section section--soft" id="featured-products">
    …
    <div class="product-grid product-grid--featured">
      <!-- Kim Anh chừa sẵn 4 vị trí để ghép product card ở bước 5 -->
      <article class="product-slot">
        <div class="product-slot__image">Product 01</div>
        …(4 ô giữ chỗ)
  </section>
  ```
- **Sau (dòng 92–214):** nguyên văn `ban-giao/featured-products.html`, từ `<!-- THUY: BAT DAU KHU VUC SAN PHAM NOI BAT -->` đến `<!-- THUY: KET THUC KHU VUC SAN PHAM NOI BAT -->`. Ký tự xuống dòng đổi từ CRLF sang LF cho khớp phần còn lại của file; nội dung không đổi.
- **Lý do:** Kim Anh chừa sẵn vị trí này để ghép phần của THuy (sheet, dòng 5).
- **Tác động:** trang chủ hiển thị 4 thẻ có ảnh, tên, giá và nút.
- **Kiểm tra:** `diff` với `xem-thu/index.html` (bản THuy đã kiểm thử), bỏ qua khác biệt CRLF → **giống hệt** (trước khi làm TH-04, TH-05).

### TH-04. `index.html` – liên kết 3 thẻ sản phẩm nổi bật — ✅ AI-KIỂM
- **Người viết ban đầu:** THuy.
- **Trước** (thẻ 2; thẻ 3 và 4 tương tự với `#product-03`, `#product-04`):
  ```html
  <a class="btn product-card__btn" href="products.html#product-02"
     aria-label="Xem Photostrip 1×4 – Vintage trong danh sách">
    <span>Xem trong danh sách</span>
  ```
- **Sau:**
  ```html
  <a class="btn product-card__btn" href="product-detail-02.html"
     aria-label="Xem chi tiết Photostrip 1×4 – Vintage">
    <span>Xem chi tiết</span>
  ```
  Thẻ 3 → `product-detail-03.html` (Postcard 2×2 – Y2K); thẻ 4 → `product-detail-04.html` (Khung tranh Desktop Custom). Thẻ 1 giữ nguyên `product-detail.html`.
- **Lý do:**
  1. `products.html` của Quyên không có `id="product-02…04"`, nên neo không hoạt động: trang mở ở đầu, không cuộn tới thẻ.
  2. Bản tích hợp đã có trang chi tiết riêng của Quang. README của THuy (mục 1) ghi: "Khi có trang chi tiết riêng, thay đường dẫn và nhãn tương ứng". Nhãn và `aria-label` được đổi theo đúng mẫu của thẻ 1 do THuy viết.
- **Tác động:** bấm thẻ mở đúng trang chi tiết của sản phẩm. Thẻ 1–4 giờ có cùng nhãn "Xem chi tiết".
- **Kiểm tra:** script đọc DOM, đối chiếu tên và giá của thẻ với `#product-title` và `.product-price` của trang đích → 4/4 khớp.

### TH-05. `index.html` – nút Photobooth/Custom Studio — ✅ AI-KIỂM (mã); giao diện ⏳ CHƯA KIỂM
- **Người viết ban đầu:** Kim Anh (bản gốc `href="#"`); Yến đổi thành `href="products.html"` (bản đang trên GitHub).
- **Trước (dòng 137–138 và 147–148 của `index.html` bản GitHub):**
  ```html
  <p>Chụp bằng webcam hoặc tải ảnh để bắt đầu tạo kỷ niệm.</p>
  <a class="btn btn--primary" href="products.html">Bắt đầu sáng tạo</a>
  …
  <p>Thêm chữ, sticker, khung và xem trước thành phẩm.</p>
  <a class="btn btn--secondary" href="products.html">Khám phá Studio</a>
  ```
- **Sau (dòng 224–226 và 235–237):**
  ```html
  <p>Chụp bằng webcam hoặc tải ảnh để bắt đầu tạo kỷ niệm.</p>
  <p>Giao diện minh họa – chức năng Photobooth chưa triển khai trong Buổi 2.</p>
  <a class="btn btn--primary" aria-disabled="true">Bắt đầu sáng tạo</a>
  …
  <p>Thêm chữ, sticker, khung và xem trước thành phẩm.</p>
  <p>Giao diện minh họa – chức năng Custom Studio chưa triển khai trong Buổi 2.</p>
  <a class="btn btn--secondary" aria-disabled="true">Khám phá Studio</a>
  ```
- **Lý do:**
  - Nút "Bắt đầu sáng tạo"/"Khám phá Studio" dẫn tới danh sách sản phẩm khiến người dùng hiểu nhầm chức năng đã hoạt động. Điều này trái với đặc tả mục 3.1/05 ("chỉ là nút minh họa, không gắn link giả") và quyết định của VHuy (giữ dạng minh họa, thể hiện rõ giới hạn).
  - Thẻ `<a>` không có `href` là cách HTML biểu diễn liên kết giữ chỗ: không bấm được, không nhận Tab. Vẫn giữ class `btn` nên hình thức nút không đổi.
  - Đoạn ghi chú dùng thẻ `<p>` trong `.explore-card__content`, nên tự nhận style chữ phụ có sẵn; không thêm CSS mới.
- **Tác động:** hai nút không còn điều hướng; mỗi thẻ có thêm một dòng ghi chú giới hạn.
- **Kiểm tra:** parser HTML xác nhận không còn link rỗng hay link giả. Chưa xem trực quan.
- **Lưu ý ⚠️:** `.btn:hover` vẫn làm nút nhích lên và đổi màu khi rê chuột. Ghi nhận để Yến (hover/focus) quyết định; không tự thêm CSS.
- **Không đổi:** 4 thẻ "Quà tặng theo dịp" vẫn trỏ `products.html` như bản GitHub. Đây là điều hướng chung tới danh mục, không giả một chức năng riêng.

### TH-06. Tạo `css/products.css` — ✅ AI-KIỂM
- **Người viết ban đầu:** Quyên.
- **Nội dung:** dòng 1 là chú thích nguồn `/* Nguồn: Quyên – css/style.css dòng 667–902 … */`; dòng 2–237 chép nguyên văn dòng 667–902 trong CSS của Quyên.
- **Lý do:** PA-B. CSS của Quyên gồm 666 dòng nền (trùng `style.css`) và phần riêng trang danh sách.
- **Tác động:** thứ tự CSS của `products.html` (style.css → products.css) tương đương file gốc của Quyên.
- **Kiểm tra:** trình duyệt nạp được file (29 quy tắc).

### TH-07. `products.html` – thêm stylesheet trang — ✅ AI-KIỂM
- **Trước (dòng 7):** `<link rel="stylesheet" href="css/style.css">`
- **Sau (dòng 7–8):**
  ```html
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/products.css">
  ```
- **Lý do:** tách CSS theo PA-B; thiếu dòng này trang sẽ mất style lưới sản phẩm.
- **Kiểm tra:** trình duyệt báo 2 stylesheet được nạp; 8 ảnh tải được.

### TH-08. `products.html` – liên kết 7 nút "Xem chi tiết" — ✅ AI-KIỂM
- **Người viết ban đầu:** Quyên.
- **Trước (dòng 83, 92, 101, 110, 119, 128, 137 của bản gốc):** cả 8 nút đều là
  ```html
  <a class="btn product-card__btn" href="product-detail.html">Xem chi tiết</a>
  ```
- **Sau (dòng 84, 93, 102, 111, 120, 129, 138):** sản phẩm 2–8 lần lượt trỏ `product-detail-02.html` … `product-detail-08.html`. Sản phẩm 1 giữ `product-detail.html`.
- **Lý do:** mỗi sản phẩm phải mở đúng trang chi tiết của mình. Chỉ đổi giá trị `href`; không đổi cấu trúc thẻ, ảnh, tên, giá hay class. Không lấy cách bọc ảnh/tên trong `<a>` từ bản của Quang.
- **Kiểm tra:** script đối chiếu tên/giá của 8 thẻ với trang đích → 8/8 khớp.

### TH-09. `product-detail.html` và `product-detail-02…08.html` — ✅ AI-KIỂM
- **Người viết ban đầu:** Quang.
- **Thay đổi:** sao chép `product-detail-01.html` thành `product-detail.html`; chép nguyên `-02` đến `-08`.
- **Lý do:** đề bài và đặc tả dùng tên `product-detail.html`. `HUONG-DAN.txt` của Quang cũng ghi `product-detail.html` là trang Photostrip 1×3, và 35 liên kết trong bộ của Quang đã trỏ tới tên này, nhưng file bàn giao lại tên là `-01`.
- **Tác động:** hết link 404 tới sản phẩm 1.
- **Kiểm tra:** parser xác nhận mọi `href`/`src` của 11 trang đều trỏ tới file có thật.

### TH-10. Tạo `css/product-detail.css` — ✅ AI-KIỂM
- **Người viết ban đầu:** Quang.
- **Nội dung:**
  - 2 dòng chú thích nguồn.
  - Dòng 554–575 của CSS Quang: khối "TRANG CHI TIẾT".
  - Dòng 820–821: khối gallery, `.fixed-option`, `.option-grid`, `.product-info h1`.
- **Không lấy:**
  - Dòng 1–553: phần nền, trùng `style.css`.
  - Dòng 577–582: style cho `index`/`about` riêng của Quang (`.catalog-*`, `.home-hero-image`, `.about-copy`, `.hero__grid`, `.explore-card__image`). Đã kiểm tra: không trang chi tiết nào dùng các class này.
  - Dòng 584–818: bản Quang chép và sửa từ CSS của Quyên.
  - Dòng 822–824: chỉ có `.product-grid--list`, thuộc trang danh sách.
- **Lý do:** giữ đúng CSS riêng trang chi tiết; tránh CSS của Quang ghi đè trang chủ và trang danh sách (ví dụ `.hero__grid`, `.product-card__image{object-fit:contain}`).
- **Kiểm tra:** trình duyệt nạp được file (81 quy tắc); 8 trang chi tiết tải đủ 9 ảnh mỗi trang.

### TH-11. `css/product-detail.css` – giới hạn quy tắc reset form — ✅ AI-KIỂM (mã); giao diện ⏳ CHƯA KIỂM
- **Trước (dòng 555 CSS Quang):**
  ```css
  button,input,select,textarea{font:inherit} button{color:inherit}
  ```
- **Sau (dòng 4):**
  ```css
  .detail-page button,.detail-page input,.detail-page select,.detail-page textarea{font:inherit} .detail-page button{color:inherit}
  ```
- **Lý do:** quy tắc gốc áp lên cả nút tìm kiếm/giỏ hàng của header chung, làm biểu tượng trên trang chi tiết có cỡ chữ khác các trang còn lại (16px thay vì cỡ mặc định của nút). Phạm vi được giới hạn vào `<main class="detail-page">`, nơi chứa toàn bộ nút, select và textarea của Quang.
- **Tác động:** nút và ô chọn trong nội dung trang chi tiết giữ nguyên style; header giống các trang khác.
- **Kiểm tra:** grep xác nhận mọi `button/select/textarea` của Quang nằm trong `main.detail-page`. Chưa so trực quan.

### TH-12. `css/product-detail.css` – bỏ phần ghi đè header chung — ✅ AI-KIỂM
- **Trước (dòng 573–574 CSS Quang):**
  ```css
  @media(max-width:1023px){.site-header__inner{flex-wrap:wrap;padding:12px 0;gap:12px}.site-nav{order:3;width:100%;justify-content:center}.header-actions{margin-left:auto}.product-detail{…}…}
  @media(max-width:767px){.site-nav{display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:flex-start}.nav-link{font-size:12px;min-height:32px;display:flex;align-items:center}.detail-page{…}…}
  ```
- **Sau (dòng 22–23):**
  ```css
  @media(max-width:1023px){.product-detail{…}…}
  @media(max-width:767px){.detail-page{…}…}
  ```
  Chỉ bỏ 5 quy tắc của header (`.site-header__inner`, `.site-nav`, `.header-actions`, `.site-nav`, `.nav-link`). Mọi quy tắc khác trong hai media query giữ nguyên.
- **Lý do:** header chuẩn là bản trên GitHub. Nếu giữ, ở ≤1023px header trang chi tiết xuống dòng, còn ở ≤767px menu hiện ra, trong khi 3 trang kia ẩn menu. Như vậy header không thống nhất.
- **Tác động:** header trang chi tiết giống 3 trang còn lại. Hệ quả: trên điện thoại trang chi tiết cũng ẩn menu (xem mục 3, vấn đề V1).
- **Kiểm tra:** đo bằng trình duyệt: chiều cao header 77/69/61px ở 1366/768/390 trên **cả 11 trang**; `.site-nav` = `flex/flex/none` ở mọi trang.

### TH-13. 8 trang chi tiết – thêm stylesheet — ✅ AI-KIỂM
- **Trước:** `…<title>…</title><link rel="stylesheet" href="css/style.css"></head>…`
- **Sau:**
  ```html
  …<link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/product-detail.css"></head>…
  ```
- **Lý do:** PA-B. HTML dạng nén của Quang giữ nguyên, chỉ chèn 1 dòng.
- **Kiểm tra:** trình duyệt nạp đủ 2 stylesheet trên 8 trang.

### TH-14. Tạo `css/about.css` — ✅ AI-KIỂM
- **Người viết ban đầu:** Vanh.
- **Nội dung:** 1 dòng chú thích nguồn và nguyên văn dòng 667–1150 của CSS Vanh, gồm cả các khối "FIX LỖI HERO" và "FIX SECTION 2".
- **Lý do:** PA-B. Các khối FIX của Vanh dùng selector `.hero`, `.hero__image`, `.image-placeholder`, `h1`. Nếu gộp chung một file, chúng sẽ đổi hero trang chủ. Đặt trong `about.css` thì chỉ tác động trang giới thiệu.
- **Kiểm tra:** `diff` với bản gốc → giống hệt; trình duyệt nạp 50 quy tắc. `about.css` chỉ được nạp trong `about.html`.

### TH-15. `about.html` – thêm stylesheet trang — ✅ AI-KIỂM
- **Trước (dòng 9):** `    <link rel="stylesheet" href="css/style.css">`
- **Sau (dòng 9–10):** thêm `    <link rel="stylesheet" href="css/about.css">`.

### TH-16. `about.html` – đồng bộ header — ✅ AI-KIỂM
- **Người viết ban đầu:** Vanh (header riêng), Kim Anh (header chung).
- **Trước (dòng 14–33):**
  ```html
  <!-- HEADER -->
  <header class="site-header">
      <div class="container site-header__inner">
          <a href="index.html" class="brand">Memoria Lab</a>
  <nav class="site-nav">
      <a href="index.html" class="nav-link">Trang chủ</a>
      …
      <a href="about.html" class="nav-link nav-link--active" aria-current="page">Về chúng tôi</a>
  </nav>
          <div class="header-actions">
              <button class="icon-button" type="button" aria-label="Tìm kiếm">&#9906;</button>
              <button class="icon-button" type="button" aria-label="Giỏ hàng">&#128722;</button>
  …
  ```
- **Sau (dòng 14–33):** header chung của GitHub, với mục "Về chúng tôi" đang chọn. Giữ `aria-current="page"` như bản của Vanh.
  ```html
  <!-- HEADER DÙNG CHUNG CHO 4 TRANG -->
  <header class="site-header">
    <div class="container site-header__inner">
      <a class="brand" href="index.html" aria-label="Memoria Lab - Trang chủ">
        <span class="brand__name">Memoria Lab</span>
      </a>
      <nav class="site-nav" aria-label="Điều hướng chính">
        … <a class="nav-link nav-link--active" aria-current="page" href="about.html">Về chúng tôi</a>
      </nav>
      <div class="header-actions" aria-label="Tiện ích">
        <button class="icon-button" type="button" aria-label="Tìm kiếm">⌕</button>
        <button class="icon-button" type="button" aria-label="Giỏ hàng">🛒</button>
  …
  ```
- **Lý do:** đồng bộ thành phần chung theo quyết định của VHuy. Bản cũ khác ở biểu tượng tìm kiếm (⚲ thay vì ⌕) và thiếu `aria-label` ở logo/menu.
- **Tác động:** thứ tự menu và đích liên kết không đổi; chỉ biểu tượng tìm kiếm đổi thành ⌕.

### TH-17. `about.html` – đồng bộ footer — ✅ AI-KIỂM
- **Người viết ban đầu:** Vanh (footer riêng), Yến (footer chung).
- **Trước (dòng 301–370), các khác biệt chính so với footer chung:**
  - Cột "Khám phá" chỉ có 3 link, thiếu "Chi tiết sản phẩm".
  - Cột "Về Memoria Lab": "Nền tảng quà tặng kỷ niệm cá nhân hóa, kết hợp Photobooth, thiết kế trực quan, kỷ niệm số và dịch vụ in ấn."
  - Mô tả thương hiệu: "Lưu giữ khoảnh khắc, tự tay thiết kế kỷ niệm và biến chúng thành món quà có thể chạm tới."
  - Bản quyền: "© 2026 Memoria Lab. All rights reserved."
  - Liên kết cuối: "Khám phá sản phẩm", "Trang chủ".
- **Sau (dòng 302–356):** footer chung của Yến (giống trang chủ, danh sách, chi tiết). Trong cột "Liên kết nhanh", mục đang chọn là "Về chúng tôi" (`footer-link--active` và `aria-current="page"`).
- **Lý do:** đồng bộ footer cả 4 trang. Footer chung có cột "Thông tin liên hệ" với nội dung giữ chỗ đã được nhóm thống nhất; không tự tạo email hay số điện thoại.
- **Tác động:** trang about có đủ 4 link trang và cột liên hệ giống các trang khác. Nội dung footer riêng của Vanh không còn trong bản tích hợp; bản gốc vẫn nằm ở `02_SOURCE_GOC_THANH_VIEN/06_VANH_GIOI_THIEU/about.html`.
- **Không đổi:** toàn bộ `<main>` của Vanh (dòng 35–298 bản gốc).

### TH-18. `images/` – thêm 7 ảnh trang giới thiệu — ✅ AI-KIỂM
- **Danh sách:** `5.png`, `vn-11134207-7qukw-lkerkt1kqnxk69.jpg`, `chup_photobooth_tren_laptop_thumb_4225642aa1.webp`, `1788948688330-2c33e2ba-3e52-4bed-b381-44b4cc8541bb-mmmmmm.png`, `21572.png`, `bd7de513cc42206d8eb39cbd60e7bbb6.jpg`, `1600w-0PoFaV36UgU.webp`.
- Giữ nguyên tên vì `about.html` tham chiếu đúng tên này.
- **Kiểm tra:** trình duyệt tải được 7/7 ảnh.

### TH-19. `README.md` – thêm mục "Buổi 2" — ⏳ CHƯA KIỂM (VHuy cần đọc duyệt)
- **Trước:** README Chương 1 (mục 1–7), không có nội dung Buổi 2.
- **Sau:** chèn mục "Buổi 2 – Giao diện website HTML5/CSS3" (B2.1–B2.7) ngay sau đoạn mở đầu. Toàn bộ mục 1–7 của Chương 1 giữ nguyên, kèm một dòng nhắc rằng các chức năng ở đó chưa triển khai trong Buổi 2.

### TH-20. `css/style.css` – hiện menu điều hướng trên mobile (xử lý V1) — ✅ AI-KIỂM; 🧑 VHUY-ĐÃ-KIỂM: ĐÃ KHẮC PHỤC (VHuy kiểm thử lại trên Chrome, 03/11/2026; xem mục 4B)
- **Người viết ban đầu:** Kim Anh (CSS nền header, media query mobile).
- **Quyết định:** VHuy chọn Cách 1, chỉ sửa CSS, không thêm HTML, JavaScript hay menu burger (03/11/2026).
- **Phạm vi:** chỉ trong `@media (max-width: 767px)` của `css/style.css` (dòng 550–…). Không đổi quy tắc ở 1366px và 768px. Không đổi file nào khác.
- **Trước (dòng 555–565):**
  ```css
    .site-header__inner {
      min-height: 60px;
    }

    .brand {
      font-size: 24px;
    }

    .site-nav {
      display: none;
    }
  ```
- **Sau (dòng 555–585):**
  ```css
    .site-header__inner {
      min-height: 60px;
      flex-wrap: wrap;
      gap: 0 12px;
      padding-top: 8px;
    }

    .brand {
      font-size: 24px;
    }

    /* TH-20 (VHuy): hiện menu thành một hàng riêng dưới logo thay vì ẩn */
    .site-nav {
      order: 3;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 0 8px;
    }

    .nav-link {
      display: flex;
      align-items: center;
      min-height: 44px;
      font-size: 13px;
    }

    /* TH-20 (VHuy): header mobile cao hơn, chừa chỗ khi mở liên kết index.html#how-it-works */
    #how-it-works {
      scroll-margin-top: 100px;
    }
  ```
- **Lý do:**
  - VHuy xác nhận V1 CHƯA ĐẠT: ở 390px menu bị ẩn bằng `display: none` và không có menu thay thế.
  - Bỏ `display: none` để menu dùng lại `display: flex` của CSS nền. `flex-wrap` trên `.site-header__inner` cùng `order: 3; width: 100%` đưa menu xuống một hàng riêng; logo và 2 nút tiện ích vẫn ở hàng trên.
  - `min-height: 44px` cho vùng bấm đủ lớn trên điện thoại (đặc tả mục 4). `font-size: 13px` nằm trong khoảng 13–14px của đặc tả cho nút/menu trên mobile.
  - Cách làm dựa trên chính quy tắc Quang từng viết cho header mobile (CSS gốc Quang dòng 573–574), nay đặt ở CSS chung để cả 11 trang giống nhau.
- **Lỗi mới phát sinh và cách xử lý:** header mobile cao lên từ 61px thành 91px. Khi đo bằng công cụ, mở liên kết `index.html#how-it-works` (nút "Xem cách hoạt động" ở `products.html`) khiến header che tiêu đề h2 "Từ khoảnh khắc đến món quà": đầu section nằm ở 0px, h2 ở 65px, đáy header ở 91px. Thêm `#how-it-works { scroll-margin-top: 100px; }`, chỉ trong media mobile. Sau khi thêm: section ở 100px, eyebrow ở 136px, h2 ở 165px, không bị che.
- **Tác động:** trên điện thoại cả 11 trang hiện 4 link menu; header cao hơn (91px ở viewport 390px). Máy tính và máy tính bảng không đổi.
- **Kiểm tra bằng công cụ (Claude, trình duyệt tích hợp Chromium, server `127.0.0.1:8765`, iframe cao 900px):**

  | Độ rộng iframe (viewport thực) | Kết quả trên 11 trang (index, products, product-detail, 02–08, about) |
  |---|---|
  | 1366 (1351) | Không tràn ngang; header 77px; menu 1 hàng; 4 link hiện; cỡ chữ 14px; không chồng lấn. **Giống trước TH-20** |
  | 768 (753) | Không tràn ngang; header 69px; menu 1 hàng; 4 link hiện; cỡ chữ 14px; không chồng lấn. **Giống trước TH-20** |
  | 405 (**390**) | Không tràn ngang; header 91px; menu 1 hàng; 4 link hiện; mỗi link cao 44px; cỡ chữ 13px; không chồng lấn; logo và nút tiện ích cùng hàng |
  | 390 (375) | Không tràn ngang; header 135px; menu **xuống 2 hàng** (link "Về chúng tôi" sang hàng 2); 4 link hiện; cao 44px; không chồng lấn |

  | Liên kết neo (cuộn bằng `scrollIntoView`) | Viewport 390 sau TH-20 |
  |---|---|
  | `index.html#how-it-works` | h2 không bị che (sau khi thêm `scroll-margin-top: 100px`) |
  | `index.html#featured-products` (scroll-margin 88px của THuy) | eyebrow 129px, h2 157px, không bị che (3px phần đệm trên cùng nằm dưới header) |
  | `about.html#our-story` (scroll-margin 76px của Vanh) | eyebrow 100px, h2 129px, không bị che (15px phần đệm nằm dưới header) |

- **Giới hạn:** chưa kiểm tra bằng mắt và chưa bấm thử trên thiết bị thật. Ở viewport hẹp hơn 390px (như 375px) menu xuống 2 hàng, header cao 135px. **V1 giữ trạng thái CHƯA XÁC NHẬN KHẮC PHỤC cho tới khi VHuy tự kiểm tra lại.**
- **Cập nhật sau kiểm thử thủ công:** VHuy đã kiểm tra lại trên Chrome ở 390/768/1366px và xác nhận menu đạt (chi tiết mục 4B). V1 chuyển sang **ĐÃ KHẮC PHỤC – VHUY ĐÃ KIỂM THỬ LẠI**. Giới hạn dưới 390px vẫn ghi ở V12.

### TH-21. `README.md` – cập nhật mô tả menu mobile theo TH-20 — ⏳ CHƯA KIỂM (VHuy cần đọc duyệt)
- **Người viết ban đầu:** VHuy (mục B2.7 do TH-19 thêm).
- **Trước (dòng 77, mục B2.7 "Hạn chế hiện tại"):**
  > - Trên màn hình điện thoại (≤ 767 px), menu chính được ẩn và chưa có menu thay thế; điều hướng dùng nút trong trang và footer.
- **Sau (dòng 77):**
  > - Trên màn hình điện thoại (≤ 767 px), menu chính đã được điều chỉnh bằng CSS để hiển thị thành một hàng dưới logo (không dùng JavaScript hay menu burger); thay đổi này chưa được kiểm thử lại thủ công trên trình duyệt sau khi sửa. Ở màn hình hẹp hơn 390 px, menu có thể xuống 2 hàng.
- **Lý do:** sau TH-20, câu cũ không còn đúng với mã. Câu mới ghi đúng trạng thái: đã sửa CSS nhưng VHuy chưa xác nhận kiểm thử lại (V1). Câu mới cũng nêu giới hạn V12.
- **Tác động:** chỉ tài liệu; không đổi giao diện.
- **Kiểm tra:** so khác biệt với bản trước: chỉ dòng 77 thay đổi. V1 vẫn giữ trạng thái CHƯA XÁC NHẬN KHẮC PHỤC.

### TH-22. `README.md` – bỏ ghi chú "chưa kiểm thử lại" sau khi VHuy xác nhận — ⏳ CHƯA KIỂM (VHuy cần đọc duyệt)
- **Trước (dòng 77):**
  > - Trên màn hình điện thoại (≤ 767 px), menu chính đã được điều chỉnh bằng CSS để hiển thị thành một hàng dưới logo (không dùng JavaScript hay menu burger); thay đổi này chưa được kiểm thử lại thủ công trên trình duyệt sau khi sửa. Ở màn hình hẹp hơn 390 px, menu có thể xuống 2 hàng.
- **Sau (dòng 77):**
  > - Trên màn hình điện thoại (≤ 767 px), menu chính đã được điều chỉnh bằng CSS để hiển thị thành một hàng dưới logo (không dùng JavaScript hay menu burger). Ở màn hình hẹp hơn 390 px, menu có thể xuống 2 hàng.
- **Lý do:** VHuy đã kiểm thử lại menu trên Chrome ở 390/768/1366px và xác nhận đạt (V1 đã khắc phục). Phần mô tả menu và giới hạn dưới 390px (V12) giữ nguyên.
- **Tác động:** chỉ tài liệu.

---

## 3. Vấn đề còn tồn tại

| # | Vấn đề | Loại | Thuộc phần |
|---|---|---|---|
| V1 | Ở ≤767px menu chính bị ẩn (`.site-nav{display:none}` trong CSS nền của Kim Anh) và không có menu thay thế; người dùng điện thoại chỉ điều hướng bằng nút trong trang và footer. **VHuy đã tái hiện và xác nhận CHƯA ĐẠT** trên `index.html` ở 390 px (Chrome DevTools, 03/11/2026; xem mục 4B). Trạng thái: **ĐÃ KHẮC PHỤC – VHUY ĐÃ KIỂM THỬ LẠI** (sửa CSS ở TH-20; VHuy kiểm tra lại trên Chrome 03/11/2026: 390px menu đủ 4 mục, điều hướng đúng, không chồng lấn, không tràn ngang; 768px và 1366px bình thường; xem mục 4B) | ✅ Đã khắc phục | Cường (responsive), CSS gốc Kim Anh; VHuy sửa ở TH-20 |
| V2 | Banner trang chủ và 2 thẻ Photobooth/Studio vẫn là khung chữ giữ chỗ, chưa có ảnh (đề yêu cầu banner có hình ảnh) | 👥 | Kim Anh / leader |
| V3 | Trang about chưa có khu vực liên hệ riêng; chỉ có nội dung giữ chỗ ở footer chung | 👥 | Vanh / leader |
| V4 | Ảnh trang about chưa ghi nguồn (đặc tả 7.3); `5.png` 4,2 MB và `1788…png` 1,7 MB có thể tải chậm | 👥 | Vanh |
| V5 | Nút minh họa Photobooth/Studio vẫn có hiệu ứng hover của `.btn` | 👥 | Yến (hover/focus) |
| V6 | `product-detail.css` còn quy tắc toàn trang `:focus-visible{outline-offset:4px}` và `*{transition:none!important}` khi bật giảm chuyển động. Chỉ có tác dụng trên trang chi tiết; viền focus ở đó cách 4px thay vì 3px | 👥 | Yến kiểm tra tính nhất quán focus |
| V7 | Ở trang `product-detail-02…08`, mục menu "Chi tiết sản phẩm" trỏ tới chính trang sản phẩm đang xem (thiết kế của Quang); ở 3 trang khác, mục này trỏ `product-detail.html` | ⚠️ (chấp nhận được) | Quang / VHuy quyết định |
| V8 | README Chương 1 có link repo `memoria-craft`, còn sheet ghi `Memoria-Lab`; `docs/ui-design.md` trên GitHub đang rỗng | ⚠️ | Leader |
| V9 | `about.html` dùng CRLF (giữ theo bản Vanh), các file khác dùng LF; không ảnh hưởng hiển thị | ⚠️ nhẹ | – |
| V10 | `css/style.css` còn quy tắc `#product-01…#product-04{scroll-margin-top}` của THuy, hiện không dùng vì đã bỏ neo (TH-04); giữ nguyên văn, vô hại | ⚠️ nhẹ | – |
| V11 | Ở 1366px và 768px (đã có từ trước, không do TH-20), mở `index.html#how-it-works` thì header dính (77/69px) che dòng eyebrow "HOW IT WORKS"; tiêu đề h2 vẫn thấy. Không sửa vì yêu cầu không đổi giao diện máy tính/máy tính bảng | ⚠️ nhẹ | Cường / VHuy quyết định |
| V12 | Viewport hẹp hơn 390px (ví dụ 375px): menu mobile xuống 2 hàng, header cao 135px; không tràn, không chồng lấn (phát sinh sau TH-20) | ⚠️ nhẹ | Cường (responsive) |

---

## 4A. Kết quả kiểm thử do Claude thực hiện (công cụ tự động, không phải kiểm tra thủ công của VHuy)

| Hạng mục | Phương pháp | Kết quả |
|---|---|---|
| Cấu trúc HTML, link, ảnh | Script Python dùng `html.parser`: kiểm tra thẻ mở/đóng, id trùng, ảnh thiếu `alt`, mọi `href/src` cục bộ tồn tại, neo nội trang tồn tại, không có `href="#"` | 11/11 trang: không lỗi |
| Tải trang thật | Server `python -m http.server` tại `127.0.0.1:8765`, mở trong trình duyệt tích hợp (Chromium) của Claude Code | Trang hiển thị; stylesheet và ảnh nạp được |
| Tràn ngang 1366/768/390 | Nạp mỗi trang trong iframe rộng 1366/768/390px (cao 900px), so `scrollWidth` với `clientWidth`. Viewport thực bằng độ rộng iframe trừ 15px thanh cuộn | 11 trang × 3 độ rộng: **không tràn ngang** |
| Ảnh | `naturalWidth > 0` cho mọi `<img>` | index 4/4, products 8/8, mỗi trang chi tiết 9/9, about 7/7 |
| Header thống nhất | Đo chiều cao `.site-header` và `display` của `.site-nav` | Trước TH-20: 11 trang giống nhau 77/69/61px; `flex/flex/none`. Sau TH-20: 77/69/91px (viewport 390), menu hiện ở cả 3 độ rộng; chi tiết ở TH-20 |
| Dữ liệu 8 sản phẩm | Đọc DOM, đối chiếu tên/giá ở nguồn liên kết với `#product-title`/`.product-price` trang đích | products 8/8, index 4/4, sản phẩm liên quan 24/24 khớp |
| Breadcrumb, quay lại | Đọc `href` | 8 trang chi tiết: breadcrumb → `index.html`, `products.html`; "Quay lại" → `products.html` |
| Footer chung | Kiểm tra có `.site-footer__contact` | 11/11 trang |

**Claude không kiểm tra được:**
- Đánh giá giao diện bằng mắt (ảnh chụp trong khung trình duyệt quá nhỏ để làm minh chứng).
- Hover bằng chuột; thứ tự và viền focus khi nhấn Tab.
- Gallery và tab bằng radio trên trang chi tiết.
- Mở trực tiếp bằng `file://`; Firefox/Safari; thiết bị thật.

## 4B. Kiểm thử thủ công do VHuy thực hiện

- **Người kiểm tra:** VHuy (Vũ Trọng Huy).
- **Ngày:** 03/11/2026.
- **Trình duyệt:** Chrome/Edge (VHuy chưa ghi phiên bản).
- **Nguồn ghi nhận:** VHuy xác nhận đã thực hiện các nhóm kiểm tra dưới đây. Chưa cung cấp kết quả Đạt/Không đạt cho từng tiêu chí và chưa đính kèm ảnh chụp minh chứng.

| Nhóm kiểm tra (checklist mục 5) | VHuy đã thực hiện | Kết quả | Minh chứng |
|---|---|---|---|
| A. Mở và kiểm tra 4 trang HTML; điều hướng header/footer/nút | Có | ❔ Chưa xác nhận | Chưa có |
| B. Liên kết và dữ liệu 8 sản phẩm | Có | ❔ Chưa xác nhận | Chưa có |
| C. Hình ảnh và nội dung thống nhất | Chưa nêu riêng (có thể nằm trong A/B) | ❔ Chưa xác nhận | Chưa có |
| D. Responsive 1366 / 768 / 390 px | Có | Header/menu: ✅ Đạt (dòng "Kiểm tra lại menu sau TH-20"). Các tiêu chí responsive khác (số cột, ảnh, nút, các phần khác của trang): ❔ Chưa xác nhận | Chưa có ảnh chụp 3 độ rộng |
| E1. Hover bằng chuột | Có | ❔ Chưa xác nhận | Chưa có |
| E2. Focus bằng phím Tab | Có | Liên kết menu: ✅ có viền focus khi Tab (sau TH-20). Các thành phần khác (nút, thẻ sản phẩm, footer, thứ tự Tab): ❔ Chưa xác nhận | Chưa có |
| Menu mobile 390 px (V1) | Có (nằm trong nhóm D) | ❌ **CHƯA ĐẠT** tiêu chí điều hướng trên mobile (VHuy xác nhận 03/11/2026). Trang `index.html`, Chrome DevTools chế độ Responsive 390 px: header chỉ hiển thị logo Memoria Lab, nút tìm kiếm và giỏ hàng; toàn bộ menu điều hướng bị ẩn, không có menu mobile thay thế. **Chưa sửa.** | Ảnh chụp màn hình Chrome DevTools Responsive 390 px do VHuy chụp (chưa đính kèm tên file vào nhật ký). Sau đó đã sửa ở TH-20; kết quả kiểm tra lại ở dòng dưới |
| Kiểm tra lại menu sau TH-20 (V1) | Có – VHuy, Chrome, 03/11/2026 | ✅ **Đạt.** 390px: menu hiển thị đủ 4 mục, điều hướng hoạt động đúng, không chồng lấn, không tràn ngang. 768px: header/menu hiển thị bình thường. 1366px: header/menu hiển thị bình thường. Focus: các liên kết menu có viền focus khi dùng phím Tab. (VHuy không nêu cụ thể đã kiểm những trang nào.) | VHuy chưa cung cấp tên file ảnh |

Khi có kết quả cụ thể, ghi Đạt/Không đạt, mô tả lỗi (nếu có) và tên file ảnh minh chứng vào bảng này. Các vấn đề V1–V10 ở mục 3 giữ nguyên cho tới khi có bằng chứng xử lý.

---

## 5. Checklist để VHuy kiểm tra trên trình duyệt

Mở bằng Live Server hoặc mở trực tiếp `index.html`, rồi `F12` → `Ctrl+Shift+M`.

> Trạng thái 03/11/2026: VHuy đã thực hiện các nhóm A, B, D, E (nhóm C chưa nêu riêng). Các ô dưới đây để trống có chủ đích vì chưa có kết quả từng mục: **Chưa xác nhận**. Tổng hợp ở mục 4B.

**A. Bốn trang và điều hướng**
- [ ] Mở được `index.html`, `products.html`, `product-detail.html`, `about.html`.
- [ ] Trên mỗi trang, bấm logo và 4 mục menu; mục hiện tại có màu hồng đậm.
- [ ] Bấm đủ link trong footer (Liên kết nhanh, "Tìm hiểu câu chuyện…", 2 link dưới cùng).
- [ ] Trang chủ: "Khám phá sản phẩm", "Về Memoria Lab", "Khám phá tất cả sản phẩm", 4 nút "Xem chi tiết", 4 thẻ quà theo dịp.
- [ ] Trang chủ: 2 nút Photobooth/Studio **không** chuyển trang; dòng ghi chú "Giao diện minh họa…" hiện rõ.
- [ ] Trang danh sách: nút "Xem cách hoạt động" cuộn tới khu "Từ khoảnh khắc đến món quà" trên trang chủ.
- [ ] Trang about: nút "Câu chuyện của chúng tôi" cuộn tới khu Our Story; "Khám phá sản phẩm/bộ sưu tập" mở trang danh sách.

**B. 8 sản phẩm**
- [ ] `products.html` có 8 thẻ, mỗi thẻ có ảnh, tên, giá, nút.
- [ ] Bấm từng nút, đối chiếu tên và giá ở trang đích:

| # | Sản phẩm | Giá | Trang đích |
|---|---|---|---|
| 1 | Photostrip 1×3 – Hàn Quốc | 89.000 đ | product-detail.html |
| 2 | Photostrip 1×4 – Vintage | 99.000 đ | product-detail-02.html |
| 3 | Postcard 2×2 – Y2K | 129.000 đ | product-detail-03.html |
| 4 | Khung tranh Desktop Custom | 159.000 đ | product-detail-04.html |
| 5 | Thiệp kỷ niệm cá nhân hóa | 69.000 đ | product-detail-05.html |
| 6 | Scrapbook để bàn | 149.000 đ | product-detail-06.html |
| 7 | Dải ảnh + QR Digital Keepsake | 119.000 đ | product-detail-07.html |
| 8 | Set quà combo Photostrip + Frame | 249.000 đ | product-detail-08.html |

- [ ] Trên mỗi trang chi tiết: breadcrumb, "← Quay lại danh sách sản phẩm", 3 thẻ "Có thể bạn cũng thích".
- [ ] Bấm 3 ảnh nhỏ (đổi ảnh lớn) và 3 tab Mô tả/Thông tin/Đánh giá.

**C. Hình ảnh và nội dung**
- [ ] Không ảnh nào bị vỡ (tab Network trong DevTools, lọc Img, không có dòng màu đỏ 404).
- [ ] Ảnh không bị kéo méo.
- [ ] Tên, giá giống nhau giữa trang chủ, danh sách và chi tiết.

**D. Responsive (lặp ở 1366, 768, 390 px cho từng trang)**
- [ ] Không có thanh cuộn ngang (Console: `document.documentElement.scrollWidth > document.documentElement.clientWidth` → `false`).
- [ ] Danh sách: 4 / 3 / 2 cột. Sản phẩm nổi bật: 4 / 2 / 1 cột.
- [ ] Trang chi tiết: 2 cột ảnh–thông tin ở 1366, 1 cột ở 390.
- [x] Menu không chồng lấn ở 768. Ở 390 menu bị ẩn (V1), ghi lại để chuyển Cường.
  - Kết quả VHuy 03/11/2026 (`index.html`, 390 px): ❌ **CHƯA ĐẠT** – menu ẩn, không có menu thay thế; có ảnh chụp DevTools. Mục 768 px: Chưa xác nhận.
  - Đã sửa CSS ở TH-20. Kiểm tra lại sau sửa (VHuy, Chrome, 03/11/2026): ✅ **Đạt** – 390px: đủ 4 mục menu, điều hướng đúng, không chồng lấn, không tràn ngang; 768px và 1366px: header/menu bình thường. Minh chứng ảnh: VHuy chưa cung cấp tên file.
- [ ] Nút không bị che, dễ bấm ở 390.

**E. Hover và focus**
- [ ] Rê chuột: menu, footer, nút, thẻ sản phẩm có hiệu ứng; thẻ không che thẻ bên cạnh.
- [ ] Nhấn Tab từ đầu trang: thứ tự hợp lý, luôn thấy viền focus. 2 nút Photobooth/Studio không nhận focus (đúng thiết kế giữ chỗ).
  - Kết quả VHuy 03/11/2026 (sau TH-20): liên kết menu có viền focus khi Tab: ✅ Đạt. Thứ tự Tab và các thành phần khác: ❔ Chưa xác nhận (ô vẫn để trống).
- [ ] Ghi lại lỗi (nếu có) để chuyển Yến.

Ghi kết quả vào cột "Kết quả thực tế" cho từng mục khi VHuy kiểm tra; không ghi trước khi kiểm.
