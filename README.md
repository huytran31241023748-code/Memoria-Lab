# Memoria Lab

Nền tảng thương mại điện tử quà tặng kỷ niệm cá nhân hóa, kết hợp Web Photobooth, Custom Studio, QR kỷ niệm và đặt in sản phẩm.

## Buổi 2 – Giao diện website HTML5/CSS3

> Phần này mô tả phiên bản giao diện tĩnh của Buổi 2. Các mục 1–7 phía sau là nội dung Chương 1, mô tả định hướng của toàn đồ án; các chức năng ở đó (tài khoản, giỏ hàng, thanh toán, Photobooth, Studio, QR…) **chưa được triển khai** trong Buổi 2.

### B2.1. Giới thiệu

Website giới thiệu cửa hàng quà tặng kỷ niệm cá nhân hóa Memoria Lab, xây dựng bằng HTML5 và CSS3 theo đặc tả giao diện trong [docs/sketching.md](docs/sketching.md). Bốn trang dùng chung header, footer, bảng màu (Dusty Rose, Deep Rose, Lavender, Warm Cream), font Playfair Display/Poppins và kiểu thẻ sản phẩm. Danh mục gồm 8 sản phẩm minh họa; giá chỉ mang tính minh họa.

### B2.2. Cấu trúc thư mục

```text
├── index.html                 Trang chủ
├── products.html              Danh sách 8 sản phẩm
├── product-detail.html        Chi tiết Photostrip 1×3 – Hàn Quốc (trang chi tiết chính)
├── product-detail-02.html … product-detail-08.html   Chi tiết 7 sản phẩm còn lại
├── about.html                 Giới thiệu cửa hàng
├── css/
│   ├── style.css              CSS nền dùng chung: biến màu, header, footer, nút, trang chủ, sản phẩm nổi bật
│   ├── products.css           CSS riêng trang danh sách
│   ├── product-detail.css     CSS riêng các trang chi tiết
│   └── about.css              CSS riêng trang giới thiệu
├── images/
│   ├── products/              product-01.jpg … product-08.jpg (mockup sản phẩm)
│   └── …                      Ảnh minh họa trang giới thiệu
├── docs/                      Tài liệu Chương 1, đặc tả giao diện và wireframe
└── README.md
```

Mỗi trang nạp `css/style.css` trước, sau đó nạp file CSS riêng của trang (nếu có).

### B2.3. Danh sách trang

| Trang | Nội dung chính | Thực hiện |
|---|---|---|
| `index.html` | Header, menu, banner, quy trình 4 bước, 4 sản phẩm nổi bật, khu vực Photobooth/Studio (minh họa), quà tặng theo dịp, footer | Kim Anh (header, trang chủ), Yến (footer), Trần Lâm Huy (sản phẩm nổi bật) |
| `products.html` | Tiêu đề, thanh danh mục dạng giao diện, lưới 8 sản phẩm có ảnh, tên, giá và nút xem chi tiết | Quyên |
| `product-detail.html`, `product-detail-02…08.html` | Ảnh, tên, giá, mô tả, thuộc tính, tùy chọn dạng giao diện, nút mua minh họa, liên kết quay lại danh sách, sản phẩm liên quan | Quang |
| `about.html` | Giới thiệu thương hiệu, câu chuyện, giá trị, quy trình, khách hàng mục tiêu, lời kêu gọi | Vương Thị Anh |

Tích hợp bốn trang, header/footer và CSS: Vũ Trọng Huy. Nhật ký tích hợp được ghi trong `INTEGRATION_LOG.md` của bản tích hợp.

### B2.4. Công nghệ sử dụng

- HTML5 với các thẻ ngữ nghĩa `header`, `nav`, `main`, `section`, `article`, `footer`.
- CSS3: biến CSS (`:root`), CSS Grid cho các lưới sản phẩm/khối nội dung, Flexbox cho header, footer và nội dung thẻ.
- Responsive bằng media query tại `max-width: 1023px` (máy tính bảng) và `max-width: 767px` (điện thoại).
- Trạng thái `:hover`, `:focus-visible`, `transition`.
- Google Fonts (Playfair Display, Poppins); khi không có Internet, trình duyệt dùng font dự phòng Georgia/Arial.
- Không dùng JavaScript, framework CSS, backend hay cơ sở dữ liệu.

### B2.5. Cách mở và chạy website

1. Tải hoặc clone repository về máy.
2. Mở trực tiếp file `index.html` bằng Chrome/Edge, hoặc mở thư mục bằng VS Code và chạy extension Live Server.
3. Dùng menu, footer và các nút "Xem chi tiết" để di chuyển giữa các trang.

Không cần cài đặt thư viện. Giữ nguyên cấu trúc thư mục vì CSS và ảnh dùng đường dẫn tương đối.

### B2.6. Cách kiểm tra giao diện responsive

1. Mở trang bằng Chrome/Edge, nhấn `F12`, bật Toggle device toolbar (`Ctrl + Shift + M`).
2. Chọn Responsive và nhập lần lượt độ rộng **1366 px**, **768 px**, **390 px**.
3. Với từng trang, kiểm tra: không có thanh cuộn ngang; ảnh không méo; số cột sản phẩm thay đổi (danh sách: 4 → 3 → 2 cột; nổi bật: 4 → 2 → 1 cột); menu không chồng lấn; nút đủ lớn để bấm.
4. Kiểm tra tràn ngang nhanh: mở tab Console và gõ `document.documentElement.scrollWidth > document.documentElement.clientWidth` – kết quả `false` là không tràn.
5. Kiểm tra hover bằng chuột và focus bằng phím `Tab` trên menu, nút và thẻ sản phẩm.

### B2.7. Hạn chế hiện tại

- Website là giao diện tĩnh: chưa có tìm kiếm, lọc danh mục, giỏ hàng, đăng nhập, thanh toán hoặc backend. Nút tìm kiếm, giỏ hàng, "Thêm vào giỏ", "Tùy chỉnh thiết kế" và các tùy chọn trên trang chi tiết chỉ là giao diện minh họa.
- Photobooth và Custom Studio chưa được triển khai; các nút ở trang chủ chỉ là minh họa.
- Ảnh sản phẩm là mockup minh họa; giá là giá minh họa. Ảnh lớn của banner trang chủ và ảnh khu vực Photobooth/Studio đang là khung giữ chỗ.
- Thông tin liên hệ (email, số điện thoại, mạng xã hội) chưa được nhóm xác nhận nên chưa hiển thị.
- Trên màn hình điện thoại (≤ 767 px), menu chính đã được điều chỉnh bằng CSS để hiển thị thành một hàng dưới logo (không dùng JavaScript hay menu burger). Ở màn hình hẹp hơn 390 px, menu có thể xuống 2 hàng.
- Một số ảnh minh họa trang giới thiệu chưa ghi nguồn và có dung lượng lớn.

## 1. Giới thiệu

### 1.1. Tổng quan dự án

**Memoria Lab** cung cấp trải nghiệm tạo và đặt mua quà tặng từ ảnh, lời nhắn và kỷ niệm cá nhân trên cùng một website. Sản phẩm chính gồm dải ảnh Photostrip, khung tranh Digital Scrapbook để bàn và thiệp cá nhân hóa; hộp quà, khung và bao thư là phụ kiện có thể bán kèm.

Khách hàng có thể chụp ảnh bằng webcam hoặc tải ảnh từ thiết bị, chỉnh sửa trong Custom Studio, xem trước thiết kế 2D và đặt in. Mã QR trên sản phẩm kết nối quà tặng vật lý với trang kỷ niệm có ảnh, lời nhắn và nhạc nền.

Dự án thuộc **nhóm A — Website bán hàng chuyên biệt**, kết hợp chức năng hỗ trợ cá nhân hóa và giao dịch của nhóm C trong bài tập Chương 1.

### 1.2. Vấn đề kinh doanh

Memoria Lab tập trung giải quyết các vấn đề sau:

- **Khó hình dung thành phẩm:** khách khó kiểm tra bố cục, ảnh và lời nhắn trước khi đặt mua quà tặng cá nhân hóa.
- **Thông tin thiết kế phân tán:** việc chụp ảnh, chỉnh sửa và gửi yêu cầu qua nhiều công cụ hoặc tin nhắn khiến khách và cửa hàng khó thống nhất đúng phiên bản.
- **Hạn chế khả năng tự thiết kế:** khách muốn điều chỉnh ảnh, chữ và trang trí nhưng không quen phần mềm đồ họa chuyên sâu.
- **Quà tặng vật lý tách rời kỷ niệm số:** ảnh, lời nhắn và nhạc thường không được kết nối thuận tiện với thành phẩm.

### 1.3. Giải pháp và điểm khác biệt

Luồng trải nghiệm chính:

**Chọn sản phẩm → Chụp Photobooth hoặc tải ảnh → Thiết kế trong Studio → Chuẩn bị kỷ niệm và QR nếu sử dụng → Xem trước → Thêm giỏ → Đặt hàng → VNPay Sandbox hoặc COD → Admin duyệt thiết kế → Chuẩn bị in và giao hàng.**

Điểm khác biệt là kết nối công cụ chụp, thiết kế, nội dung kỷ niệm và đặt in với từng sản phẩm trong đơn hàng. Customer mở lại thiết kế từ giỏ; đơn đã đặt giữ bản lưu độc lập để tránh thay đổi ngoài ý muốn. Admin kiểm tra, yêu cầu sửa hoặc duyệt trước khi dùng đúng phiên bản phục vụ in.

Đối với khách hàng, website hỗ trợ chủ động sáng tạo và kiểm tra thành phẩm. Đối với đơn vị bán, hệ thống tập trung dữ liệu thiết kế, đơn hàng, thanh toán và trạng thái xử lý.

## 2. Khách hàng mục tiêu

Memoria Lab hướng đến khách hàng trẻ, chủ yếu **16–26 tuổi**, có nhu cầu tạo quà tặng và lưu giữ kỷ niệm nhưng không nhất thiết có kỹ năng thiết kế chuyên nghiệp.

| Nhóm khách hàng | Nhu cầu chính |
|---|---|
| Học sinh, sinh viên | Dải ảnh, thiệp và khung tranh cho tốt nghiệp, kỷ yếu, sinh nhật hoặc hoạt động tập thể. |
| Các cặp đôi | Quà cá nhân hóa kết hợp ảnh, lời nhắn và nhạc cho dịp kỷ niệm. |
| Nhóm bạn thân | Ghi lại chuyến đi, hoạt động chung và những cột mốc bằng ảnh/quà tặng có nội dung riêng. |
| Người yêu thích quà tặng sáng tạo | Tự chọn khung, sắp xếp ảnh/chữ/sticker và xem trước trước khi mua. |

Nhu cầu chung gồm giao diện dễ dùng, tùy chỉnh trực quan, giá và phí rõ ràng, bảo vệ ảnh cá nhân, theo dõi đơn thuận tiện và chia sẻ kỷ niệm theo quyền được cho phép.

## 3. Chức năng chính

### 3.1. Cửa hàng và tài khoản

- Trang chủ có banner/sự kiện/khuyến mãi, sản phẩm nổi bật và bán chạy.
- Danh mục, chi tiết, ảnh, chất liệu, kích thước, phụ kiện và giá theo biến thể; hiển thị giá gốc, giá giảm và phần trăm giảm khi có khuyến mãi.
- Tìm kiếm và sắp xếp; lọc kết hợp tối thiểu năm thuộc tính: loại sản phẩm, kích thước, chất liệu, khoảng giá và chủ đề.
- Sản phẩm liên quan, gợi ý mua kèm, review/rating; chỉ Customer đã mua và có đơn hoàn thành được đánh giá.
- Đăng ký, đăng nhập, đăng xuất; quản lý hồ sơ, địa chỉ, sản phẩm đã xem/đã mua và lịch sử đơn của mình.
- Guest được thử Photobooth/Studio; cần đăng nhập để lưu thiết kế vào giỏ và đặt hàng.

### 3.2. Web Photobooth

- Sử dụng webcam sau khi khách cấp quyền; có tùy chọn lật gương khi xem trước.
- Chọn khung 1×3, 1×4 hoặc 2×2 phù hợp khổ sản phẩm, bộ lọc và đếm ngược chụp.
- Chụp liên tiếp, xem lại và chụp lại từng ảnh.
- Tải ảnh từ thiết bị khi không dùng được camera hoặc muốn dùng ảnh có sẵn.
- Chuyển ảnh và khung sang Custom Studio để tiếp tục chỉnh sửa.

### 3.3. Custom Studio và file in

- Chọn template tương thích sản phẩm và khổ thiết kế.
- Thêm ảnh, văn bản, sticker; kéo thả, đổi kích thước, xoay/lật các đối tượng được phép; chỉnh font, màu, nền và thứ tự lớp.
- Khóa khung chuẩn và bảo vệ vùng thiết kế; xem trước 2D theo tỉ lệ sản phẩm.
- Lưu cấu hình và preview theo từng dòng giỏ; mở lại để sửa, giữ nội dung khi chuyển đăng nhập.
- Tạo bản lưu thiết kế độc lập khi đặt hàng; lưu phiên bản sửa để Admin duyệt lại.
- Xuất PNG phục vụ in theo quy cách được chốt; Admin kiểm tra và tải đúng phiên bản đã duyệt.

Phạm vi cá nhân hóa là **ấn phẩm phẳng một mặt**, với các khổ 5×15 cm, 10×15 cm và A5 theo sản phẩm/template tương thích. Không xây dựng trình thiết kế album nhiều trang hoặc phần mềm đồ họa đa mục đích.

### 3.4. Trang kỷ niệm và QR

- Tạo nội dung ảnh, lời nhắn và nhạc nền gắn với sản phẩm cá nhân hóa.
- Sinh QR liên kết đúng trang kỷ niệm, chèn vào thiết kế và giữ liên kết với đúng dòng giỏ/đơn.
- Hiển thị trang kỷ niệm phù hợp điện thoại; chỉ cung cấp nội dung được phép chia sẻ, không lộ ảnh nguồn riêng tư hoặc dữ liệu đơn hàng.
- Quyền xem, lúc kích hoạt, quyền sửa/tắt trang và thời hạn lưu còn cần nhóm xác nhận trong REQUIREMENTS.

Video quá trình chụp và link tải ảnh/video tạm là **đề xuất chưa chốt**, tách khỏi phạm vi QR/trang kỷ niệm đã nêu.

### 3.5. Giỏ hàng, đặt hàng và thanh toán

- Giỏ có preview, biến thể, phụ kiện và số lượng; mỗi thiết kế khác nhau là một dòng riêng.
- Checkout kiểm tra địa chỉ, voucher, phí giao hàng và tổng tiền; backend tính lại giá trước khi tạo đơn.
- **VNPay Sandbox:** tích hợp tạo giao dịch thử, nhận và xác thực kết quả thành công/thất bại/hủy; không ghi nhận trùng khi callback lặp.
- **COD:** áp dụng cho cả hàng bán sẵn và hàng cá nhân hóa. Đơn COD hợp lệ được duyệt/sản xuất dù chưa thu tiền; chỉ ghi đã thu khi có căn cứ xác nhận.
- Theo dõi trạng thái xử lý và thanh toán riêng; hiển thị yêu cầu sửa thiết kế; gửi email xác nhận đơn.
- Yêu cầu hủy/hoàn và các ngoại lệ được xử lý theo chính sách nhóm chốt, không tự áp dụng một mốc hủy chưa được thống nhất.

### 3.6. Vận chuyển, voucher và Admin

- Lưu địa chỉ, tính/lưu phí và cập nhật thông tin/trạng thái giao; phương án API hay quy tắc phí được chốt trong giai đoạn thiết kế.
- Voucher/khuyến mãi có kiểm tra mã, hiệu lực, điều kiện đơn, mức giảm, lượt dùng và đối tượng nếu áp dụng; tính lại tổng tiền tại server.
- Admin quản lý danh mục, nhóm sản phẩm, sản phẩm, biến thể, phụ kiện, giá, template, khung/sticker, tài khoản, đơn, voucher và khuyến mãi.
- Duyệt thiết kế hoặc yêu cầu sửa kèm lý do; bản sửa phải được duyệt lại trước khi đưa vào in.
- Dashboard có doanh thu theo định nghĩa được chốt, số đơn/trạng thái, số lượng sản phẩm chờ giao, số khách và sản phẩm bán chạy; phân biệt số liệu thử nghiệm và tiền thực thu.

### 3.7. Chất lượng hệ thống và giới hạn

- Responsive, kiểm tra ít nhất tại **390 px và 1366 px**; tối thiểu ba tương tác có mục đích UX: cập nhật giá, preview và phản hồi thêm giỏ.
- Kiểm tra đầu vào, loại file thực, quyền vai trò và quyền sở hữu; bảo vệ secret, tài khoản, ảnh và dữ liệu đơn.
- Kiểm thử luồng chính, dữ liệu biên, lỗi, quyền truy cập, thanh toán lặp và tính nhất quán phiên bản.
- Tổ chức mã nguồn theo module, có hướng dẫn chạy, lịch sử commit và đóng góp kiểm chứng được.
- Ưu tiên các yêu cầu Must; Should được cân nhắc theo nguồn lực. Chưa đưa 3D, NFC, AI thiết kế, cộng tác thời gian thực hoặc tự động kết nối máy in vào phiên bản đầu.

Mã chức năng, tiêu chí nghiệm thu và các chính sách/thông số chờ xác nhận được quản lý trong [REQUIREMENTS.md](REQUIREMENTS.md).

## 4. Thành viên

Nhóm gồm 8 thành viên. Phân công chi tiết, nhiệm vụ và tiến độ nằm trong [PROJECT_PLAN.md](PROJECT_PLAN.md).

| STT | Thành viên | Vai trò và trách nhiệm Chương 1 | Vai trò và trách nhiệm phát triển |
|---|---|---|---|
| 1 | Trần Lâm Huy | Điều phối, thống nhất đề tài, tạo repository, viết README, kiểm tra và nộp bài. | Phụ trách chính QR/trang kỷ niệm; tích hợp, quản lý repository, triển khai và tài liệu kỹ thuật. |
| 2 | Phạm Đình Quang | Phân tích khách hàng, phạm vi, vai trò, chức năng/NFR và REQUIREMENTS. | Tài khoản, quyền và khu vực khách hàng; điều phối kiểm thử/QA. |
| 3 | Nguyễn Ngọc Thúy Quyên | Phụ trách chính khảo sát và tổng hợp phân tích ba website. | Giỏ hàng, checkout, đơn/trạng thái và sửa thiết kế; UI/UX chung. |
| 4 | Nguyễn Hoàng Kim Anh | Khảo sát website, phối hợp bảng so sánh và đề xuất. | Giao diện cửa hàng, danh mục/tìm/lọc/chi tiết, giá, liên quan và review. |
| 5 | Vương Thị Anh | AI thứ nhất phân tích; tổng hợp sử dụng AI và quyết định của nhóm. | Web Photobooth, Custom Studio, lưu/mở thiết kế và file in; hỗ trợ chèn QR. |
| 6 | Vũ Hà Phi Yến | AI khác phản biện; xây dựng AGENTS. | Backend/CSDL nền tảng, API contract, lưu file và bảo mật; hỗ trợ dữ liệu/quyền QR. |
| 7 | Vũ Trọng Huy | Mô tả và cập nhật workflow. | VNPay Sandbox, COD, phí/thông tin giao hàng và đối soát trạng thái. |
| 8 | Lâm Phú Cường | Lập kế hoạch và quản lý GitHub Issues. | Voucher, Admin, duyệt/tài nguyên/Dashboard và hướng dẫn sử dụng. |

Mỗi công việc có một người phụ trách chính và kết quả bàn giao. Các thành viên phối hợp review, tích hợp, kiểm thử và giải thích phần mình thực hiện.

## 5. Công nghệ dự kiến

| Thành phần | Công nghệ hoặc phương án | Mục đích | Trạng thái |
|---|---|---|---|
| Frontend | React, HTML, CSS, JavaScript | Giao diện cửa hàng, tài khoản, Studio và Admin. | Dự kiến; xác nhận cùng stack tại Q02. |
| Canvas/Studio | HTML5 Canvas; Fabric.js hoặc Konva.js | Đối tượng thiết kế, kéo thả, lớp, lưu cấu hình và xuất ảnh. | Chưa chốt thư viện; thử kỹ thuật trong GĐ2. |
| Photobooth | API camera của trình duyệt; cân nhắc react-webcam | Webcam, khung ảnh và chụp; có đường tải ảnh dự phòng. | Chưa chốt thư viện triển khai. |
| Backend | Node.js; Express.js hoặc NestJS | API, xử lý nghiệp vụ, xác thực, file, đơn và tích hợp. | Chưa chốt framework tại Q02. |
| Cơ sở dữ liệu | MySQL là phương án hiện có | Tài khoản, sản phẩm, thiết kế/phiên bản, kỷ niệm, đơn và giao dịch. | Cần xác nhận CSDL và ORM tại Q02. |
| QR | Thư viện sinh QR phù hợp, dự kiến qrcode hoặc qrcode.react | Tạo mã liên kết trang kỷ niệm và chèn vào thiết kế. | Chưa chốt thư viện. |
| Thanh toán | VNPay Sandbox; COD | Giao dịch thử có xác thực và ghi nhận thu COD riêng. | Đã thống nhất phương thức; COD áp dụng cả hàng cá nhân hóa. |
| Vận chuyển | Quy tắc tính phí hoặc dịch vụ/API phù hợp | Phí, thông tin và trạng thái giao. | Chờ Q10; chưa xác nhận dịch vụ cụ thể. |
| Lưu trữ file | Dịch vụ hỗ trợ ảnh, file in và quyền truy cập phù hợp | Lưu ảnh/tài nguyên/PNG; bảo vệ file riêng và nội dung QR. | Chờ Q02/Q07; chưa chốt nhà cung cấp/gói lưu trữ. |
| Email | SMTP hoặc dịch vụ email phù hợp | Xác nhận đơn và thông báo được duyệt. | Chờ Q02/Q13. |
| Triển khai | Hosting/backend/CSDL và domain phù hợp | Website, callback và QR truy cập được. | Chờ Q02. |
| Quản lý mã nguồn | Git, GitHub và GitHub Issues | Lưu lịch sử, phân công, review và tích hợp. | Sử dụng trong dự án. |

Lựa chọn kỹ thuật còn mở được chốt trong GĐ2 và cập nhật đồng bộ với REQUIREMENTS, PROJECT_PLAN.

## 6. Kế hoạch thực hiện

**Thời gian dự kiến:** 19/10/2026–10/12/2026. Mốc kết thúc điều chỉnh theo lịch học phần và quyết định của nhóm.

| Giai đoạn | Thời gian dự kiến | Nội dung chính | Kết quả |
|---|---|---|---|
| 1. Khảo sát và xác định yêu cầu | 19–25/10 | Chọn đề tài, khảo sát ba website, phân tích/phản biện, phạm vi, workflow, phân công và repository. | Bộ tài liệu Chương 1 và GitHub Issues. |
| 2. Thiết kế giao diện | 26–30/10 | Sitemap/wireframe, Photobooth/Studio/QR, ERD/API, thử kỹ thuật và chốt các quyết định cần thiết. | Thiết kế, dữ liệu và giao tiếp module được duyệt. |
| 3. Phát triển frontend | 2–15/11 | Trang khách/Admin, Photobooth, Studio và trang kỷ niệm; nối API đã có. | Giao diện có tương tác, chạy được luồng chính. |
| 4. Backend và CSDL | 9–29/11 | API, phiên bản thiết kế/QR, giỏ/đơn, payment/COD, shipping, voucher và quản trị. | Nghiệp vụ và dữ liệu liên kết. |
| 5. Tích hợp và kiểm thử | 23/11–4/12 | Test chức năng, biên/lỗi/quyền/payment, QR và PNG; sửa lỗi và hồi quy. | Kết quả kiểm thử, minh chứng và bản khóa bổ sung chức năng. |
| 6. Triển khai và hoàn thiện | 5–10/12 | Cấu hình triển khai, kiểm tra lại, hướng dẫn, báo cáo và tập demo. | Website, mã nguồn, tài liệu và báo cáo bàn giao. |

Các giai đoạn có phần thời gian chồng nhau; module được tích hợp từng phần khi có đầu ra, không chờ tới cuối mới kết nối.

### Mốc Chương 1

- **19/10/2026:** lựa chọn đề tài, phân công và khởi tạo repository.
- **20/10/2026:** khảo sát, phân tích/phản biện và hoàn thiện tài liệu theo phân công.
- **Trước 12:00 ngày 21/10/2026:** mốc kiểm tra nội bộ tài liệu, Issues và quyền truy cập.
- **Trước 21:00 ngày 21/10/2026:** mục tiêu nộp sớm của nhóm.
- **23:00 ngày 21/10/2026:** hạn nộp Chương 1.

Task, người phụ trách, trạng thái và rủi ro được theo dõi trong [PROJECT_PLAN.md](PROJECT_PLAN.md) và [GitHub Issues](https://github.com/huytran31241023748-code/memoria-craft/issues).

## 7. Liên kết

### 7.1. Tài liệu dự án

| Tài liệu | Nội dung |
|---|---|
| [REQUIREMENTS.md](REQUIREMENTS.md) | Mục tiêu, phạm vi, vai trò/quyền, FR/NFR, nghiệm thu và quyết định cần chốt. |
| [PROJECT_PLAN.md](PROJECT_PLAN.md) | Thành viên, sáu giai đoạn, công việc, tiến độ và rủi ro. |
| [docs/competitor-analysis.md](docs/competitor-analysis.md) | Phân tích ít nhất ba website, bảng so sánh và đề xuất áp dụng. |
| [docs/business-workflow.md](docs/business-workflow.md) | Quy trình chính BW-01, sơ đồ, dữ liệu, ngoại lệ và truy vết yêu cầu. |
| [AGENTS.md](AGENTS.md) | Nguyên tắc AI hỗ trợ trong phạm vi, quy trình, bảo mật và giao tiếp. |
| [AI_USAGE_LOG.md](AI_USAGE_LOG.md) | Ghi nhận công cụ, mục đích, prompt, phản biện và quyết định của nhóm. |

### 7.2. Repository và sản phẩm

- [GitHub Repository](https://github.com/huytran31241023748-code/memoria-craft)
- [GitHub Issues](https://github.com/huytran31241023748-code/memoria-craft/issues)
- **Website demo và hướng dẫn cài đặt/sử dụng:** cập nhật trong giai đoạn triển khai và hoàn thiện.
