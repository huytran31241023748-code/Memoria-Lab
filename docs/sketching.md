MEMORIA LAB

ĐẶC TẢ GIAO DIỆN WEBSITE – 4 TRANG

Link:  ảnh

1. Mục tiêu và nguyên tắc thiết kế

Tài liệu này chuyển ý tưởng Memoria Lab thành đặc tả giao diện có thể bàn giao cho các thành viên triển khai HTML5 và CSS3. Bốn trang cần có nội dung riêng nhưng dùng chung header, footer, màu sắc, kiểu chữ, khoảng cách và thẻ sản phẩm.

## 1.1. Định vị thương hiệu

Memoria Lab là nền tảng thương mại điện tử quà tặng kỷ niệm cá nhân hóa, kết hợp Web Photobooth, Custom Studio, trang kỷ niệm truy cập bằng QR và dịch vụ đặt in. Luồng giá trị cốt lõi: Chụp ảnh → Thiết kế → Gắn kỷ niệm số → Đặt in.

## 1.2. Khách hàng mục tiêu

- Học sinh, sinh viên, các cặp đôi và nhóm bạn trẻ, trọng tâm 16–26 tuổi.

- Muốn lưu giữ kỷ niệm hoặc tạo quà tặng có dấu ấn riêng nhưng không quen phần mềm đồ họa chuyên sâu.

- Ưu tiên thao tác dễ hiểu, xem trước được thành phẩm và biết rõ quy cách/giá trước khi đặt.

## 1.3. Nguyên tắc trải nghiệm

- Cảm xúc nhưng không rối: hình ảnh sản phẩm là trọng tâm, nền sáng và khoảng trắng đủ rộng.

- Cá nhân hóa phải dễ nhận biết: các CTA như “Bắt đầu thiết kế” và “Khám phá sản phẩm” nổi bật.

- Thông tin mua hàng rõ ràng: tên, giá minh họa, kích thước, chất liệu và tùy chọn nằm gần ảnh sản phẩm.

- Thống nhất xuyên suốt: cùng một header, footer, button, product card và hệ thống tiêu đề.

- Không giả lập tính năng chưa triển khai: trong bài tập Buổi 2, nút Photobooth/Studio/mua hàng chỉ là giao diện hoặc liên kết trang có sẵn; không viết JS/backend.

2. Hệ thống nhận diện và quy chuẩn giao diện

## 2.1. Bảng màu đề xuất

| Vai trò | Mã màu | Cách sử dụng |
| --- | --- | --- |
| Primary – Dusty Rose | #E07A9B | màu nền cho nút chính, CTA và các khối điểm nhấn. |
| Price & Accent – Deep Rose | #A84868 | giá sản phẩm và các điểm nhấn dạng chữ |
| Secondary – Lavender | #C6A5E8 | Tag, icon phụ, vùng nhấn nhẹ |
| Background – Warm Cream | #F7EEE8 | Nền toàn trang, vùng nội dung |
| Surface – White | #FFFFFF | Card, form, vùng nội dung |
| Text – Charcoal | #392F32 | Tiêu đề và nội dung chính |
| Muted – Taupe | #6E5E5B | Mô tả phụ, breadcrumb, chú thích |
| Border – Blush | #EAD7D5 | Viền card, divider |

## 2.2. Font chữ và cỡ chữ

| Thành phần | Font đề xuất | Cỡ chữ  (desktop/PC) | Cỡ chữ (mobile) | Độ đậm |
| --- | --- | --- | --- | --- |
| Logo / tiêu đề lớn | Playfair Display | 32–40 px | 24–28 px | 600-700 |
| Heading cấp 1 | Playfair Display | 36 px | 24–26 px | 600 |
| Heading cấp 2 | Playfair Display | 28 px | 20 px | 600 |
| Heading cấp 3 | Poppins | 20 px | 16 px | 600 |
| Nội dung | Poppins | 16 px | 14 px | 400 |
| Nút / menu | Poppins | 14–16 px | 13-14 px | 600 |
| Chú thích / metadata | Poppins | 14 px | 12 px | 400 |

Fallback: Georgia, serif cho Playfair Display; Arial, sans-serif cho Poppins.

Nếu không tải font ngoài ⇒ dùng Georgia + Arial để tránh lỗi hiển thị.

## 2.3. Khoảng cách, chiều rộng và bo góc

| Thông số | Quy chuẩn dùng chung | Cách áp dụng |
| --- | --- | --- |
| Đơn vị spacing | Theo bội số 4 px: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px | Áp dụng đồng bộ cho margin, padding và khoảng cách các thành phần. |
| Khoảng cách section | Desktop 56–72 px; tablet 40–48 px; mobile 28–36 px | Khoảng cách dọc giữa các khối nội dung lớn trên trang. |
| Padding card | 16–20 px; mobile 12–16 px | Khoảng cách đệm bên trong các thẻ sản phẩm hoặc khối nội dung. |
| Container tối đa | 1200 px; căn giữa bằng margin auto | Chiều rộng khung chứa nội dung chính trên màn hình lớn. |
| Padding ngang trang | Desktop 32 px; tablet 24 px; mobile 16 px | Khoảng lề hai bên mép màn hình theo từng thiết bị. |
| Bo góc | Card 16 px; ảnh 12 px; button 999 px hoặc 10 px | 999 px: dùng cho nút CTA chính dạng viên thuốc  /  / 10 px: dùng cho nút phụ, khung nhập liệu hoặc tag nhỏ. |
| Ảnh sản phẩm | Tỉ lệ ưu tiên 4:5 hoặc 1:1; object-fit: cover; không kéo méo | Tỉ lệ 4:5 Dùng ưu tiên cho khung card sản phẩm chính (dáng dọc). /  / Tỉ lệ 1:1: Dùng cho ảnh vuông (thumbnail) hoặc các khung ảnh phụ cân đối. |

## 2.4. Thành phần dùng chung

- Header: logo Memoria Lab bên trái; menu Trang chủ / Sản phẩm / Về chúng tôi; icon tìm kiếm và giỏ hàng dạng giao diện.

- Footer: logo, tagline, liên kết nhanh, thông tin liên hệ (chỉ điền email/số điện thoại sau khi nhóm xác nhận), mạng xã hội nếu có.

- Button primary: nền Dusty Rose, chữ trắng; hover đậm hơn nhẹ; focus-visible có viền rõ.

- Breadcrumb: Trang chủ / Sản phẩm / Tên sản phẩm trên trang chi tiết.

- Product card: ảnh, nhãn danh mục hoặc tag, tên 1–2 dòng, giá, nút “Xem chi tiết”.

- Icon: sử dụng một bộ icon thống nhất; không trộn nhiều phong cách nét.

## 2.5. Thẻ sản phẩm dùng chung

Cấu trúc bắt buộc: (1) vùng ảnh tỉ lệ 4:5, (2) tên sản phẩm tối đa 2 dòng, (3) giá, (4) nút hoặc liên kết xem chi tiết. Có thể thêm nhãn “Bán chạy”, “Cá nhân hóa” hoặc “Mới” nếu đúng nội dung.

- Card nền trắng, viền blush mảnh, bo góc 16 px, khoảng cách nội dung 8–12 px.

- Hover: card nâng nhẹ 2–3 px hoặc ảnh zoom rất nhẹ; transition 0.2s; không làm xô lệch card bên cạnh.

- Ảnh luôn có kích thước khung thống nhất; dùng object-fit: cover hoặc contain tùy ảnh mockup.

- Nút xem chi tiết phải có liên kết thật đến product-detail.html; không để href rỗng.

3. Phác thảo chi tiết 4 trang

Thứ tự khu vực dưới đây là thứ tự từ trên xuống khi cuộn trang. Các thành phần điều hướng và CTA phải trỏ tới đúng file HTML trong repository.

## 3.1. Trang chủ – index.html

Mục tiêu: giới thiệu nhanh Memoria Lab, làm rõ điểm khác biệt và đưa người dùng đến danh mục hoặc bắt đầu trải nghiệm sáng tạo.

| STT | Khu vực | Vị trí và nội dung / hành động |
| --- | --- | --- |
| 01 | Header | Logo trái; menu giữa; icon tìm kiếm/giỏ hàng phải. Logo và menu là liên kết dùng chung. |
| 02 | Hero banner | Ảnh lớn bên phải hoặc nền toàn khối: photostrip, scrapbook, thiệp và vật dụng chụp ảnh. Bên trái có headline “Capture Moments. Design Memories. Print Your Story.”, mô tả ngắn và 2 CTA. |
| 03 | How it works | 4 bước dạng icon/mini card: Chụp ảnh – Thiết kế – Quét QR lưu kỷ niệm – Đặt in. |
| 04 | Sản phẩm nổi bật | Hiển thị 4 product card: Photostrip, Postcard, Scrapbook, Combo. Nút “Xem tất cả sản phẩm” → products.html. |
| 05 | Khám phá Photobooth / Custom Studio | Hai khối hình ảnh song song: chụp bằng webcam/tải ảnh; thêm chữ, sticker, khung và xem trước. CTA “Bắt đầu sáng tạo” (nếu chưa có trang chức năng thì chỉ là nút minh họa, không gắn link giả). |
| 06 | Quà tặng theo dịp | Các chip/card: Sinh nhật, Kỷ niệm, Tốt nghiệp, Tặng bạn bè. Chỉ dùng như điều hướng giao diện nếu chưa có lọc thật. |
| 07 | Footer | Giới thiệu ngắn, liên kết Sản phẩm/Về chúng tôi, thông tin liên hệ đã xác nhận. |

## 3.2. Danh sách sản phẩm – products.html

Mục tiêu: giúp người dùng xem và so sánh ít nhất 8 sản phẩm bằng cấu trúc card nhất quán.

| STT | Khu vực | Vị trí và nội dung / hành động |
| --- | --- | --- |
| 01 | Header | Giống trang chủ. |
| 02 | Breadcrumb + tiêu đề | Trang chủ / Sản phẩm; heading “Tạo nên món quà mang dấu ấn của bạn” và mô tả ngắn. |
| 03 | Danh mục / bộ lọc giao diện | Nhóm theo Photostrip, Scrapbook, Thiệp, Combo; có thể có lựa chọn dịp tặng. Trong bài tập HTML/CSS, bộ lọc chỉ là giao diện, chưa cần hoạt động. |
| 04 | Lưới sản phẩm | Tối thiểu 8 card theo bảng sản phẩm tại mục 5. Desktop 4 cột; tablet 2–3 cột; mobile 2 cột hoặc 1 cột nếu ảnh/text chật. |
| 05 | CTA phụ | Khối “Chưa có mẫu phù hợp? Tự tạo thiết kế của bạn” và nút quay về trang chủ hoặc dẫn đến trang Studio nếu có. |
| 06 | Footer | Giống trang chủ. |

## 3.3. Chi tiết sản phẩm – product-detail.html

Sản phẩm được chọn làm mẫu chi tiết: Photostrip 1×3 – Hàn Quốc.

| STT | Khu vực | Vị trí và nội dung / hành động |
| --- | --- | --- |
| 01 | Header + breadcrumb | Trang chủ / Sản phẩm / Photostrip 1×3 – Hàn Quốc. |
| 02 | Khối thông tin chính 2 cột | Trái: ảnh lớn sản phẩm, bên dưới 3 ảnh thumbnail (các góc/biến thể mockup). Phải: tên, giá minh họa, mô tả ngắn, tag “Cá nhân hóa”, lựa chọn quy cách và nút. |
| 03 | Tùy chọn sản phẩm | Khổ ảnh; chất liệu giấy; số lượng; tùy chọn QR kỷ niệm; ghi chú cá nhân hóa. Trình bày dạng select/radio tĩnh hoặc nhãn mô phỏng, không cần tính giá động. |
| 04 | CTA mua hàng | Nút “Thêm vào giỏ” dạng giao diện. Trong phạm vi Buổi 2, chưa xử lý giỏ hàng thật; có thể trỏ về products.html hoặc để button không thực hiện giao dịch. |
| 05 | Thông tin chi tiết | Tab/section: Mô tả – Thông tin sản phẩm – Đánh giá (nội dung mẫu, không giả nhận xét khách hàng thật). |
| 06 | Sản phẩm liên quan | 3 card: Photostrip 1×4, Postcard 2×2, Dải ảnh + QR. |
| 07 | Footer | Giống các trang còn lại. |

## 3.4. Giới thiệu cửa hàng – about.html

Mục tiêu: kể câu chuyện thương hiệu, giải thích cách Memoria Lab kết nối quà tặng vật lý với kỷ niệm số và cung cấp thông tin liên hệ đã xác nhận.

| STT | Khu vực | Vị trí và nội dung / hành động |
| --- | --- | --- |
| 01 | Header | Giống trang chủ. |
| 02 | Hero giới thiệu | Ảnh lifestyle: bạn bè/cặp đôi cùng xem photostrip hoặc scrapbook; heading “Every little moment deserves to be remembered.” |
| 03 | Câu chuyện Memoria Lab | Nội dung: Memoria Lab ra đời từ mong muốn giúp người trẻ biến ảnh và lời nhắn thành món quà có thể cầm nắm, lưu giữ và chia sẻ. |
| 04 | Giá trị khác biệt | 3–4 khối: Tự chụp ảnh; tự thiết kế dễ dàng; xem trước trước khi in; QR kết nối kỷ niệm số. |
| 05 | Quy trình trải nghiệm | Chụp → Thiết kế → Gắn QR → Đặt in, có ảnh minh họa từng bước. |
| 06 | Đối tượng và dịp sử dụng | Học sinh/sinh viên, cặp đôi, nhóm bạn; sinh nhật, kỷ niệm, tốt nghiệp. |
| 07 | Liên hệ | Email, mạng xã hội, địa chỉ/chính sách chỉ điền khi nhóm đã xác nhận. Không tự tạo thông tin liên hệ. |
| 08 | Footer | Giống các trang còn lại. |

## 3.5. Sơ đồ điều hướng giữa 4 trang

| Vị trí liên kết | Đích đến | Ghi chú |
| --- | --- | --- |
| Logo | index.html | Từ mọi trang quay về trang chủ |
| Menu Sản phẩm | products.html | Danh sách 8 sản phẩm |
| Menu Về chúng tôi | about.html | Trang giới thiệu |
| Card sản phẩm / Xem chi tiết | product-detail.html | Bản chi tiết mẫu Photostrip 1×3 |
| CTA Xem tất cả sản phẩm | products.html | Đặt ở trang chủ |
| Breadcrumb Trang chủ | index.html | Điều hướng ngược |
| Link quay lại danh sách | products.html | Đặt ở trang chi tiết |

4. Responsive – cách bố cục thay đổi theo thiết bị

| Thành phần | Desktop ≥1024 px | Tablet 768–1023 px | Mobile ≤767 px |
| --- | --- | --- | --- |
| Container | Max-width 1200 px, căn giữa bằng margin: auto (ở dải tự động co giãn full padding) | Padding 24 px; gần full width | Full width; padding 16 px |
| Header | Logo + menu ngang + icon | Logo + menu gọn; giảm khoảng cách | Logo và icon; menu rút gọn / nút burger |
| Hero | 2 cột: text 45%, ảnh 55% | 2 cột hẹp hoặc ảnh dưới text | 1 cột; text trước, ảnh sau; CTA full-width |
| Product grid | 4 cột | 2–3 cột | 2 cột; chuyển 1 cột nếu tên/giá quá chật |
| Product detail | 2 cột: Ảnh 55%, thông tin 45% | Ảnh và thông tin 50/50 hoặc xếp dọc | 1 cột; ảnh trước, thông tin sau |
| About sections | 2–3 cột | 2 cột | 1 cột |
| Footer | 3–4 cột | 2 cột | 1 cột, các nhóm xếp dọc |
| Buttons | Chiều rộng tự động theo nội dung | Dễ bấm, khoảng cách vừa phải | Chiều cao tối thiểu khoảng 44 px (đảm bảo thao tác cảm ứng) |

## 4.1. Quy tắc kiểm thử

·   	Không xuất hiện thanh cuộn ngang ở cả 3 kích thước.

·   	Ảnh không méo; đặt width: 100%, height phù hợp và object-fit đúng mục đích.

·   	Tên sản phẩm dài không làm card lệch chiều cao quá nhiều; giới hạn 2 dòng hoặc dùng vùng tên có chiều cao nhất quán.

·   	Menu không chồng lấn; banner không che mất headline/CTA.

·   	Nút và liên kết đủ lớn để thao tác bằng ngón tay trên mobile.

·   	Kiểm tra cả hover bằng chuột và focus-visible bằng bàn phím.

5. Danh mục sản phẩm dự kiến – tối thiểu 8 sản phẩm

Bảng dưới đây là danh mục mẫu để dựng giao diện. Giá chỉ nhằm minh họa cách hiển thị; cần nhóm xác nhận giá, chất liệu, kích thước và cấu hình biến thể trước khi dùng như dữ liệu chính thức.

| Ảnh minh họa | Tên sản phẩm | Giá minh họa | Mô tả ngắn |
| --- | --- | --- | --- |
|  | Photostrip 1×3 – Hàn Quốc | 89.000 đ | Dải ảnh cá nhân hóa 3 khung, phong cách Hàn Quốc; phù hợp lưu giữ khoảnh khắc cùng bạn bè hoặc người thương. /  Thuộc tính: 5 × 15 cm; 3 ô ảnh; giấy ảnh bóng hoặc mỹ thuật nhám; tùy chỉnh ảnh, chữ, sticker; QR kỷ niệm tùy chọn. |
|  | Photostrip 1×4 – Vintage | 99.000 đ | Dải ảnh 4 khung với phong cách hoài cổ, phù hợp sinh nhật, hẹn hò và những dịp đáng nhớ. /  Thuộc tính: Khổ dải ảnh theo template; 4 ô ảnh; tông màu vintage; giấy in lựa chọn theo cấu hình; có thể thêm lời nhắn. |
|  | Postcard 2×2 – Y2K | 129.000 đ | Bưu thiếp ảnh bố cục 2×2, kết hợp ảnh và lời nhắn ngắn theo phong cách Y2K. /  Thuộc tính: 10 × 15 cm ; 4 ô ảnh; một mặt; giấy ảnh; tùy chỉnh nền, chữ và sticker. |
|  | Khung tranh Desktop Custom | 159.000 đ | Khung tranh để bàn lưu giữ một bộ ảnh hoặc scrapbook ngắn, phù hợp làm quà tặng cá nhân hóa. /  Thuộc tính: Khổ thiết kế đề xuất 10 × 15 cm; khung để bàn; màu khung cần xác nhận; thiết kế một mặt. |
|  | Thiệp kỷ niệm cá nhân hóa | 69.000 đ | Thiệp dành cho sinh nhật, kỷ niệm hoặc lời cảm ơn; khách có thể thêm ảnh và thông điệp riêng. /  Thuộc tính: Khổ A5 gấp hoặc phẳng (chốt theo mẫu); một mặt/thiết kế; nội dung lời chúc; phong bì tùy chọn. |
|  | Scrapbook để bàn | 149.000 đ | Ấn phẩm scrapbook nhỏ gọn kết hợp nhiều ảnh, ghi chú và sticker theo một chủ đề kỷ niệm. /  Thuộc tính: Khổ A5; ấn phẩm phẳng một mặt theo phạm vi; template; ảnh, văn bản và sticker tùy chỉnh. |
|  | Dải ảnh + QR Digital Keepsake | 119.000 đ | Dải ảnh in kèm mã QR dẫn đến trang kỷ niệm số có ảnh, lời nhắn và nhạc nền. /  Thuộc tính: Dải ảnh 5 × 15 cm; QR liên kết trang kỷ niệm; nội dung số theo cấu hình được duyệt. |
|  | Set quà combo Photostrip + Frame | 249.000 đ | Bộ quà kết hợp dải ảnh và khung để bàn, phù hợp tặng người thân, bạn bè hoặc người thương. /  Thuộc tính: 01 photostrip + 01 khung; lựa chọn phong cách đồng bộ; hộp quà là tùy chọn cần xác nhận. |

*Note: Ảnh trong bảng là mockup minh họa được dựng thống nhất để sau đó mình có thể thay bằng ảnh sản phẩm thực tế sau này. Khi thay ảnh, giữ nguyên tỉ lệ và quy tắc đặt tên file.

## 5.1. Quy ước file ảnh sản phẩm

| Sản phẩm | Tên file đề xuất |
| --- | --- |
| 1. Photostrip 1×3 – Hàn Quốc | product-01.jpg |
| 2. Photostrip 1×4 – Vintage | product-02.jpg |
| 3. Postcard 2×2 – Y2K | product-03.jpg |
| 4. Khung tranh Desktop Custom | product-04.jpg |
| 5. Thiệp kỷ niệm cá nhân hóa | product-05.jpg |
| 6. Scrapbook để bàn | product-06.jpg |
| 7. Dải ảnh + QR Digital Keepsake | product-07.jpg |
| 8. Set quà combo Photostrip + Frame | product-08.jpg |

Đường dẫn dự kiến: images/products/product-01.jpg … product-08.jpg. Không đổi tên file sau khi đã gắn vào HTML nếu chưa cập nhật toàn bộ đường dẫn.

6. Sản phẩm mẫu cho trang chi tiết

## Photostrip 1×3 – Hàn Quốc

Giá minh họa: 89.000 VNĐ. Đây là sản phẩm được chọn để làm trang product-detail.html vì thể hiện rõ đặc trưng cá nhân hóa của Memoria Lab, có ảnh trực quan, kích thước cụ thể và nhiều thuộc tính có thể trình bày.

### 6.1. Nội dung mô tả sản phẩm

Lưu giữ những khoảnh khắc đáng nhớ trong một dải ảnh nhỏ xinh mang phong cách Hàn Quốc. Photostrip 1×3 cho phép bạn chọn ba bức ảnh yêu thích, thêm lời nhắn, sticker và khung trang trí để tạo nên món quà mang dấu ấn riêng. Bạn có thể xem trước thiết kế trước khi đặt in và tùy chọn gắn mã QR để kết nối với trang kỷ niệm số.

### 6.2. Bảng thuộc tính

| Thuộc tính | Nội dung hiển thị đề xuất |
| --- | --- |
| Tên | Photostrip 1×3 – Hàn Quốc |
| Giá | 89.000 VNĐ (minh họa) |
| Loại | Dải ảnh Photobooth cá nhân hóa |
| Kích thước | 5 × 15 cm – khổ nhỏ theo phạm vi dự án |
| Bố cục | 1 cột × 3 ô ảnh |
| Chất liệu | Giấy ảnh bóng / giấy mỹ thuật nhám (cần xác nhận cấu hình bán) |
| Cá nhân hóa | Tải ảnh, chọn template, thêm chữ và sticker |
| Kỷ niệm số | Có thể chọn QR dẫn đến trang kỷ niệm; nội dung QR theo cấu hình được xác nhận |
| Số lượng | 1 / 2 / 5 / 10 (chỉ là lựa chọn giao diện mẫu) |
| Thời gian xử lý | Chưa công bố; chỉ hiển thị sau khi nhóm xác nhận |
| Phụ kiện | Khung hoặc hộp quà là tùy chọn nếu được khai báo trong danh mục |

### 6.3. Nội dung CTA và trạng thái

- Nút chính: “Tùy chỉnh thiết kế” – dùng khi đã có trang Studio; nếu chưa có thì chỉ minh họa, không tạo liên kết hỏng.

- Nút phụ: “Thêm vào giỏ” – trong bài tập Buổi 2 chỉ là giao diện, chưa xử lý giỏ hàng.

- Link phụ: “Quay lại danh sách sản phẩm” → products.html.

- Không tự tạo số lượng đánh giá, sao xếp hạng hoặc nhận xét khách hàng thật. Nếu cần demo, ghi rõ “Nội dung minh họa”.

7. Nội dung và hình ảnh dự kiến cho Memoria Lab

## 7.1. Thông điệp thương hiệu

| Hạng mục | Nội dung đề xuất |
| --- | --- |
| Tên thương hiệu | Memoria Lab |
| Tagline | Capture Moments · Design Memories · Print Your Story |
| Thông điệp tiếng Việt | Lưu giữ khoảnh khắc, tự tay thiết kế kỷ niệm và biến chúng thành món quà có thể chạm tới. |
| Giọng điệu | Trẻ trung, gần gũi, tinh tế, giàu cảm xúc; tránh quá trẻ con hoặc quá quảng cáo. |
| Từ khóa hình ảnh | Photostrip, scrapbook, giấy ảnh, sticker, khung ảnh, thiệp, hộp quà, QR, khoảnh khắc bạn bè/cặp đôi |

## 7.2. Danh sách ảnh cần chuẩn bị

| Vị trí | Ảnh dự kiến | Tỉ lệ / gợi ý bố cục | Tên file |
| --- | --- | --- | --- |
| Trang chủ – Hero | Ảnh lifestyle gồm photostrip, scrapbook, thiệp và máy ảnh | 16:9; sản phẩm ở nửa phải, chừa khoảng trống đặt chữ bên trái | hero-memoria.jpg |
| Trang chủ – quy trình | 4 ảnh/icon: chụp, thiết kế, QR, in | 1:1; nền sáng, cùng phong cách | step-photo.jpg … step-print.jpg |
| Trang chủ – sản phẩm nổi bật | Ảnh mockup từng sản phẩm | 4:5 hoặc 1:1; nền trung tính | product-01.jpg … |
| Trang chi tiết | Ảnh chính Photostrip 1×3 và 3 ảnh phụ | 4:5; ảnh chính rõ chi tiết, ảnh phụ cận cảnh | photostrip-main.jpg; photostrip-01.jpg … |
| Trang giới thiệu | Ảnh người trẻ cùng xem ảnh/quà tặng; ảnh góc làm việc sáng tạo | 16:9 hoặc 4:3; ánh sáng tự nhiên | about-story.jpg; about-workspace.jpg |
| Ảnh minh họa QR | Mockup sản phẩm có QR và màn hình điện thoại trang kỷ niệm | 4:5; QR chỉ là hình minh họa, không dùng mã truy cập thật | qr-keepsake.jpg |

## 7.3. Yêu cầu chất lượng và nguồn ảnh

- Ưu tiên ảnh sản phẩm do nhóm tự thiết kế/chụp hoặc mockup tự tạo để bảo đảm đồng nhất.

- Nếu dùng ảnh từ website khác hoặc nguồn bên ngoài, ghi nguồn ngay dưới ảnh hoặc trong danh mục tài liệu hình ảnh: tên tác giả/đơn vị, tên ảnh, URL nguồn và ngày truy cập.

- Không lấy ảnh đối thủ rồi trình bày như sản phẩm thật của Memoria Lab.

- Không dùng QR chứa dữ liệu cá nhân hoặc đường dẫn riêng tư trong ảnh demo.

- Ảnh cần được nén hợp lý, đặt tên không dấu, viết thường, dùng dấu gạch ngang; kiểm tra đường dẫn tương đối.

8. Quy ước bàn giao và sử dụng thống nhất

## 8.1. Quy ước cấu trúc file

| File / thư mục | Vai trò |
| --- | --- |
| index.html | Trang chủ |
| products.html | Danh sách sản phẩm |
| product-detail.html | Chi tiết Photostrip 1×3 – Hàn Quốc |
| about.html | Giới thiệu cửa hàng |
| css/style.css | CSS dùng chung cho cả 4 trang |
| images/ | Ảnh banner, ảnh sản phẩm, ảnh giới thiệu |
| docs/ | Wireframe, quy chuẩn giao diện, bảng sản phẩm |

## 8.2. Quy ước đặt tên class

| Nhóm thành phần | Class đề xuất |
| --- | --- |
| Khung trang | site-header, site-nav, site-footer, container |
| Banner | hero, hero__content, hero__image, hero__actions |
| Lưới sản phẩm | product-grid, product-card, product-card__image, product-card__title, product-card__price |
| Nút | btn, btn--primary, btn--secondary |
| Trang chi tiết | product-detail, product-gallery, product-info, product-options |
| Giới thiệu | about-hero, about-story, value-grid |
| Điều hướng | breadcrumb, nav-link |

