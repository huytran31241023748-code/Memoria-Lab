# Requirements

Memoria Lab là website thương mại điện tử quà tặng kỷ niệm cá nhân hóa, kết hợp Web Photobooth, Custom Studio, trang kỷ niệm truy cập qua mã QR và đặt in sản phẩm vật lý. Tài liệu là căn cứ phân tích, thiết kế, phát triển và kiểm thử hệ thống trong học phần Phát triển ứng dụng thương mại điện tử.

Phạm vi chức năng được viết theo brainstorm của dự án. Phương thức thanh toán đã được xác nhận: **VNPay Sandbox và COD, trong đó COD áp dụng được cho cả hàng bán sẵn và hàng cá nhân hóa**. Các chính sách hoặc thông số chưa được xác nhận được dẫn tới bảng quyết định tại mục 6.3; không coi những mục này là cam kết đã được thông qua.

## 1. Mục tiêu dự án

### 1.1. Vấn đề kinh doanh

Khách hàng muốn tạo quà tặng từ ảnh và kỷ niệm cá nhân thường phải sử dụng nhiều công cụ: chụp ảnh ở một nơi, chỉnh sửa ở nơi khác, gửi yêu cầu cho cửa hàng qua tin nhắn rồi chờ xác nhận. Quá trình này khiến thông tin thiết kế dễ bị phân tán, khách khó hình dung thành phẩm và cửa hàng khó xác định đúng phiên bản cần sản xuất.

Quà tặng vật lý cũng thường tách rời ảnh, lời nhắn và nội dung kỷ niệm số. Memoria Lab hướng tới kết nối các bước này trên cùng website. Đây là nhận định định hướng của nhóm; mức độ nhu cầu thị trường cần được kiểm chứng bằng nghiên cứu hoặc khảo sát, không được trình bày như kết quả khảo sát đã thực hiện.

### 1.2. Mục tiêu kinh doanh và giá trị khách hàng

- Phục vụ học sinh, sinh viên, các cặp đôi và nhóm bạn trẻ, chủ yếu trong độ tuổi 16–26, có nhu cầu lưu giữ kỷ niệm và tạo quà tặng cá nhân hóa.
- Cho phép khách chụp Photobooth bằng webcam hoặc tải ảnh, tùy chỉnh thiết kế, xem trước và đặt mua trên cùng website.
- Hỗ trợ cá nhân hóa bằng ảnh, văn bản, sticker và khung mẫu; khách có thể điều chỉnh bố cục trong vùng thiết kế được phép.
- Kết nối sản phẩm vật lý với trang kỷ niệm có ảnh, lời nhắn và nhạc nền thông qua mã QR.
- Giúp đơn vị bán tiếp nhận cấu hình thiết kế có cấu trúc, kiểm tra phiên bản trước in và quản lý đơn hàng, thanh toán, vận chuyển tập trung.

### 1.3. Mục tiêu hệ thống và điểm khác biệt

Điểm khác biệt của Memoria Lab là chuỗi trải nghiệm **chụp ảnh → thiết kế → gắn kỷ niệm số → đặt in**, kết hợp dữ liệu thiết kế với từng sản phẩm trong giỏ và đơn hàng. Hệ thống không đặt mục tiêu thay thế một phần mềm thiết kế đa mục đích.

Đồ án phải đáp ứng chức năng TMĐT nền tảng; VNPay Sandbox; tính phí và theo dõi vận chuyển; voucher/khuyến mãi; quản trị và Dashboard; tối thiểu năm thuộc tính lọc phù hợp; responsive trên ít nhất hai kích thước; tối thiểu ba tương tác có mục đích UX; bảo mật, kiểm thử và triển khai truy cập được.

Web Photobooth, Custom Studio và QR/trang kỷ niệm thuộc phạm vi theo brainstorm, không còn được xếp toàn bộ vào phần ngoài phạm vi như bản yêu cầu trước. Việc chọn chức năng nào làm minh chứng cho hạng mục mở rộng bắt buộc của học phần cần được nhóm trình giảng viên xác nhận; không mặc định mọi tính năng khác biệt đều được công nhận điểm cộng.

## 2. Phạm vi

### 2.1. Trong phạm vi

**Sản phẩm và quy cách**

- Sản phẩm chính: dải ảnh Photostrip, khung tranh Digital Scrapbook để bàn và thiệp kỷ niệm cá nhân hóa.
- Phụ kiện đi kèm: khung, hộp quà, bao thư hoặc phụ kiện được khai báo trong danh mục bán hàng.
- Chỉ cá nhân hóa ấn phẩm phẳng một mặt; các khổ thiết kế theo brainstorm gồm 5 × 15 cm, 10 × 15 cm và A5. Không mặc định mọi sản phẩm đều hỗ trợ cả ba khổ; quy cách phải gắn với từng biến thể và template.
- Chất liệu và giá được quản lý theo cấu hình sản phẩm. Danh sách chất liệu thực tế, số sản phẩm và số template demo cần xác nhận tại Q03.

**Web Photobooth**

Sử dụng webcam khi được cho phép; chọn khung ảnh, bộ lọc và chế độ đếm ngược; chụp liên tiếp theo số ô; xem lại, chụp lại; tải ảnh từ máy thay thế khi không dùng webcam. Khung tham khảo gồm dải 1 × 3, 1 × 4 và bố cục 2 × 2, phải phù hợp khổ sản phẩm được chọn.

**Custom Studio**

Nhận ảnh từ Photobooth hoặc ảnh tải lên; sử dụng template; thêm ảnh, sticker và văn bản; kéo thả, đổi kích thước, xoay/lật đối tượng phù hợp; thay đổi màu nền và thứ tự lớp; khóa khung và vùng giới hạn in; xem trước 2D; lưu cấu hình để mở lại; xuất ảnh phục vụ in. Không giới hạn toàn bộ Studio vào ô ảnh/ô chữ cố định như bản trước.

**QR và kỷ niệm số**

Tạo QR liên kết trang kỷ niệm tối ưu cho điện thoại, hỗ trợ ảnh, lời nhắn và nhạc nền. QR là một thành phần có thể đặt trên thiết kế để in lên quà. QR kỷ niệm khác QR thanh toán.

Phương án bổ sung được đề xuất ở mục 4.4: tách link tải ảnh/video tạm khỏi trang kỷ niệm gắn với sản phẩm; video ghi lại trải nghiệm chụp là tùy chọn cần xác nhận. Chưa chốt thời hạn lưu, phạm vi video và cơ chế kích hoạt trang; xem Q05–Q07. Các đề xuất này chưa thay thế quyết định của nhóm.

**TMĐT và quản trị**

Website khách hàng và khu vực Admin, có danh mục, sản phẩm, tìm kiếm/lọc/sắp xếp, tài khoản, giỏ hàng, đặt hàng, VNPay Sandbox, COD, vận chuyển, voucher, review/rating, gợi ý sản phẩm, quản lý template/sticker/khung, duyệt thiết kế, tải file in và thống kê.

### 2.2. Ngoài phạm vi

- Mô hình sản phẩm 3D xoay tương tác, NFC và chức năng thiết kế bằng AI.
- Ứng dụng di động native; chỉnh sửa đồng thời nhiều người; thiết kế album nhiều trang phức tạp.
- Tự động kết nối hoặc điều khiển máy in, dây chuyền sản xuất; hệ thống quản lý nguyên vật liệu và kế toán chuyên sâu.
- Nền tảng nhiều người bán hoặc sàn giao dịch; phiên bản đầu sử dụng một đơn vị vận hành với vai trò Admin.
- Thu tiền thật bằng cấu hình VNPay production. Tích hợp được xác nhận cho đồ án là VNPay Sandbox; chế độ giao dịch thực và vận hành COD ngoài đời chưa được xác nhận.
- Lưu bản nháp dài hạn độc lập với giỏ/đơn và không giới hạn thời gian. Việc giữ thiết kế để sửa từ giỏ và lưu phiên bản đơn vẫn nằm trong phạm vi.

### 2.3. Nguyên tắc phạm vi

Không tự ý loại bỏ yêu cầu bắt buộc của học phần để bổ sung tính năng brainstorm. Nếu nguồn lực không đáp ứng, nhóm phải ghi nhận thay đổi, đánh giá tác động và thông qua điều chỉnh; không âm thầm chuyển chức năng sang ngoài phạm vi. Tài liệu mô tả chức năng dự kiến, không tuyên bố đã lập trình, kiểm thử hoặc có giao dịch thực tế.

## 3. Người dùng

### 3.1. Vai trò và nhiệm vụ

| Vai trò | Nhiệm vụ chính | Quyền hạn |
|---|---|---|
| Guest | Tìm hiểu sản phẩm, thử Photobooth và Custom Studio | Xem thông tin công khai; sử dụng webcam sau khi cho phép; thử thiết kế trong phiên. Phải đăng nhập để lưu vào giỏ và đặt hàng. |
| Customer | Mua hàng, quản lý thiết kế và theo dõi đơn | Quản lý hồ sơ, giỏ, thiết kế, đơn và kỷ niệm của mình; thanh toán; gửi bản sửa khi được yêu cầu; đánh giá sản phẩm khi đủ điều kiện. |
| Admin | Quản lý cửa hàng và xử lý đơn | Quản lý sản phẩm, biến thể, khung, sticker, template, tài khoản, khuyến mãi, đơn; duyệt/yêu cầu sửa; tải file phục vụ in; cập nhật trạng thái và xem Dashboard. |
| Người nhận hoặc người xem kỷ niệm | Xem nội dung được chủ sở hữu chia sẻ qua QR | Đây là ngữ cảnh truy cập trang kỷ niệm, không nhất thiết là một tài khoản mới. Cách cấp quyền/xác nhận chia sẻ còn chờ Q06; không được truy cập ảnh gốc riêng tư, thiết kế chỉnh sửa hay dữ liệu đơn. |

VNPay và dịch vụ vận chuyển là hệ thống bên ngoài, không phải vai trò có tài khoản sử dụng website. Chưa tách nhân viên xử lý đơn thành vai trò riêng.

### 3.2. Ma trận quyền

| Thao tác | Guest | Customer | Admin | Người xem QR |
|---|---|---|---|---|
| Xem/tìm/lọc sản phẩm | Có | Có | Có | Như khách truy cập |
| Thử Photobooth/Studio | Có | Có | Có thể xem như giao diện công khai | Không được mở thiết kế nguồn qua QR |
| Lưu thiết kế vào giỏ, đặt hàng | Không | Của mình | Không thuộc nghiệp vụ Admin | Không |
| Sửa thiết kế trong giỏ | Không | Của mình | Không sửa thay khách | Không |
| Sửa thiết kế đơn khi được yêu cầu | Không | Của mình, đúng trạng thái | Yêu cầu sửa/duyệt | Không |
| Xem đơn và ảnh riêng tư của đơn | Không | Của mình | Phục vụ vận hành được phân quyền | Không |
| Xem trang kỷ niệm | Theo quyền chia sẻ Q06 | Của mình hoặc được chia sẻ | Theo quyền vận hành | Theo quyền chia sẻ Q06 |
| Đánh giá sản phẩm | Không | Đã mua và đơn hoàn thành | Không đăng đánh giá thay khách | Không |
| Quản lý dữ liệu cửa hàng và trạng thái | Không | Không | Có | Không |
| Tải file in | Không | Chưa bổ sung quyền tải file in cho khách | Có | Không |

Backend phải kiểm tra xác thực, vai trò, quyền sở hữu và trạng thái tài nguyên. Không dùng việc ẩn nút trên giao diện thay cho kiểm tra quyền. Quyền chia sẻ QR là ngoại lệ có kiểm soát dành cho nội dung đã được phép chia sẻ, không áp dụng cho toàn bộ ảnh hoặc dữ liệu cá nhân của tài khoản.

## 4. Yêu cầu chức năng

### 4.1. Quy ước

- **Must:** bắt buộc trong phạm vi được mô tả của phiên bản đầu; phải có kết quả kiểm thử trước khi nghiệm thu.
- **Should:** thực hiện sau các mục Must nếu đủ nguồn lực; giữ ưu tiên từ bản gốc, trừ chức năng đã được brainstorm xác định rõ như nền Studio.
- **Đề xuất chờ xác nhận:** chưa phải yêu cầu cam kết. Không tính là mục đã duyệt dù hướng triển khai có vẻ hợp lý.
- **Qxx:** quyết định hoặc thông số chưa chốt tại mục 6.3. Must có phụ thuộc Qxx chỉ đủ điều kiện nghiệm thu sau khi Qxx liên quan được xác nhận.
- Mỗi yêu cầu có mã, tên, mô tả, người sử dụng, mức ưu tiên và tiêu chí nghiệm thu. Mã cũ được giữ khi còn tương ứng; một số mô tả Studio được thay đổi theo brainstorm, không chỉ thay tên. Các khoảng trống trong mã không biểu thị thiếu chức năng.
- Trong các bảng, “Khách” là Guest và Customer. Backend vẫn phải kiểm tra lại dữ liệu đã được kiểm tra ở trình duyệt.

### 4.2. Tài khoản và khu vực khách hàng

| Mã | Tên chức năng | Mô tả | Người sử dụng | Mức độ ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| FR-AUTH-01 | Đăng ký, đăng nhập và đăng xuất | Đăng ký bằng email; xác thực thông tin đăng nhập; kết thúc phiên khi đăng xuất. | Guest, Customer, Admin đăng nhập | Must | Từ chối email đăng ký trùng và dữ liệu không hợp lệ; thông tin đúng đăng nhập được với đúng vai trò; đăng xuất làm mất quyền sử dụng phiên cũ. |
| FR-AUTH-03 | Hồ sơ và địa chỉ | Xem, sửa thông tin cá nhân và địa chỉ nhận hàng của chính mình. | Customer, Admin với hồ sơ của mình | Must | Lưu và đọc lại đúng thông tin; từ chối sửa hồ sơ người khác; địa chỉ của đơn đã đặt không bị thay đổi chỉ vì cập nhật hồ sơ. |
| FR-AUTH-04 | Đổi và khôi phục mật khẩu | Đổi mật khẩu có kiểm tra quyền; khôi phục qua email. | Customer, Admin | Should | Đổi mật khẩu yêu cầu xác minh thích hợp; liên kết khôi phục chỉ có hiệu lực theo cấu hình được chốt và không dùng lại sau khi đã sử dụng; không trả mật khẩu cũ. |
| FR-CUS-02 | Lịch sử xem, mua và đơn | Xem sản phẩm đã xem, đã mua và đơn hàng của mình. | Customer | Must | Danh sách mua/đơn đúng tài khoản; mở được chi tiết và trạng thái; lịch sử xem không hiển thị dữ liệu riêng của tài khoản khác. |
| FR-CUS-04 | Sản phẩm yêu thích | Thêm hoặc bỏ sản phẩm khỏi danh sách yêu thích. | Customer | Should | Danh sách lưu theo tài khoản; thao tác không tạo mục trùng; tài khoản khác không sửa được. |

### 4.3. Trang chủ, danh mục và sản phẩm

| Mã | Tên chức năng | Mô tả | Người sử dụng | Mức độ ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| FR-HOME-01 | Trang chủ cửa hàng | Hiển thị banner/sự kiện/khuyến mãi, sản phẩm nổi bật và bán chạy. | Khách | Must | Hiển thị đúng dữ liệu được phép công khai; banner dẫn đúng trang; không hiển thị sản phẩm bị ẩn như sản phẩm đang bán. |
| FR-HOME-03 | Giá và giảm giá | Thẻ và chi tiết sản phẩm hiển thị giá; có giá gốc, giá giảm và phần trăm giảm khi khuyến mãi có hiệu lực. | Khách | Must | Bộ dữ liệu trước/trong/sau khuyến mãi trả đúng giá; không hiện giảm giá đã hết hạn; phần trăm giảm theo quy tắc làm tròn Q09 và thống nhất với giá thực. |
| FR-PRD-01 | Danh mục và chi tiết | Xem loại quà, ảnh, mô tả, quy cách, chất liệu, phụ kiện và khả năng cá nhân hóa. | Khách | Must | Mở đúng sản phẩm; chỉ chọn biến thể tồn tại; sản phẩm có template chỉ hiển thị template tương thích; khổ và đơn vị đo rõ ràng. |
| FR-PRD-02 | Tìm kiếm và sắp xếp | Tìm theo từ khóa, duyệt danh mục, sắp xếp giá/mới nhất/bán chạy. | Khách | Must | Trả kết quả đúng bộ dữ liệu kiểm thử; đổi thứ tự cho kết quả tương ứng; có thông báo khi không có kết quả; cách tính bán chạy được xác nhận tại Q12. |
| FR-PRD-04 | Lọc kết hợp | Tối thiểu năm thuộc tính: loại sản phẩm, kích thước, chất liệu, khoảng giá và chủ đề. | Khách | Must | Kết hợp nhiều điều kiện cho kết quả thỏa đồng thời; xóa bộ lọc khôi phục danh sách phù hợp; kiểm tra cả trường hợp không có kết quả và khoảng giá sai. |
| FR-PRD-06 | Giá theo lựa chọn | Cập nhật giá dự kiến theo biến thể, số lượng và phụ kiện. | Khách | Must | Đổi từng lựa chọn làm giá thay đổi đúng cấu hình; số lượng không hợp lệ bị từ chối; tổng cuối cùng luôn được server tính lại theo FR-ORD-02. |
| FR-PRD-07 | Sản phẩm liên quan | Gợi ý sản phẩm hoặc phụ kiện phù hợp với sản phẩm đang xem. | Khách | Must | Gợi ý có quan hệ xác định trong dữ liệu; mở đúng chi tiết; không gợi ý sản phẩm bị ẩn; không tuyên bố dùng AI khi chỉ dùng quy tắc. |
| FR-PRD-09 | Review và rating | Hiển thị đánh giá và điểm trung bình; chỉ khách đã mua sản phẩm trong đơn hoàn thành được đánh giá. | Khách xem, Customer gửi | Must | Người chưa đủ điều kiện bị từ chối ở API; điểm ngoài thang đã chốt Q14 bị từ chối; điểm trung bình tính đúng các đánh giá hợp lệ. Số lượt/sửa đánh giá theo Q14. |

### 4.4. Web Photobooth và QR kỷ niệm

| Mã | Tên chức năng | Mô tả | Người sử dụng | Mức độ ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| FR-PHO-01 | Mở webcam | Đề nghị quyền camera và hiển thị hình xem trước trên thiết bị hỗ trợ; có tùy chọn hiển thị lật gương. | Khách | Must | Camera chỉ mở sau khi được cho phép; từ chối quyền/không có camera có thông báo và đường tải ảnh; dừng sử dụng camera khi kết thúc phiên chụp hoặc rời chức năng. |
| FR-PHO-02 | Chọn khung và khổ | Chọn khổ tương thích sản phẩm và khung 1×3, 1×4 hoặc 2×2 theo tài nguyên đã có. | Khách | Must | Số ô và tỉ lệ khớp khung; lựa chọn không tương thích bị chặn; chuyển khung không âm thầm làm mất ảnh mà không thông báo. |
| FR-PHO-03 | Bộ lọc màu | Chọn bộ lọc cho preview và ảnh chụp, theo các mẫu màu đã chuẩn bị. | Khách | Must | Bộ lọc lựa chọn xuất hiện trong ảnh kết quả; không chỉ áp hiệu ứng lên video xem trước; danh sách bộ lọc nghiệm thu thuộc Q03. |
| FR-PHO-04 | Đếm ngược và chụp liên tiếp | Hiển thị đếm ngược trong khoảng lựa chọn 3–5 giây của brainstorm và chụp đủ ảnh theo khung; có hiệu ứng báo chụp. | Khách | Must | Chụp đúng số ô, không chụp trùng do bấm nhiều lần; đếm ngược và trạng thái rõ; lỗi camera giữa chừng không sinh kết quả giả hoàn tất. |
| FR-PHO-05 | Xem lại, chụp lại và tải ảnh | Xem ảnh từng ô; chụp lại ô chưa phù hợp hoặc thay bằng ảnh từ máy. | Khách | Must | Thay ảnh đúng ô, không thay nhầm ảnh đã giữ; ảnh tải lên tuân thủ FR-STU-02; người không cấp camera vẫn tiếp tục thiết kế được. |
| FR-PHO-06 | Chuyển sang Studio | Chuyển các ảnh và khung đã chọn vào Custom Studio để chỉnh sửa tiếp. | Khách | Must | Ảnh giữ đúng thứ tự ô và khổ; không buộc chụp lại; ảnh có thể tiếp tục dùng trong thiết kế và giỏ của đúng khách. |
| FR-MEM-01 | Nội dung trang kỷ niệm | Tạo nội dung ảnh, lời chúc và nhạc nền gắn với sản phẩm cá nhân hóa. | Customer; Guest chỉ thử trong phiên | Must, phụ thuộc Q05–Q07 | Lưu/đọc lại đúng nội dung của từng sản phẩm; hỗ trợ tiếng Việt; nhạc chỉ phát theo thao tác người xem; nội dung không hợp lệ bị từ chối theo cấu hình đã chốt. |
| FR-MEM-02 | Tạo và chèn QR | Sinh QR trỏ tới trang kỷ niệm riêng; thêm QR vào thiết kế, gắn đúng dòng giỏ/đơn. | Customer; hệ thống tạo | Must, phụ thuộc Q06 | Quét QR mở đúng trang tương ứng; mã không dùng ID tuần tự để lộ dữ liệu đơn; bố cục/xuất ảnh giữ QR đọc được; thiết kế của hai sản phẩm không trỏ nhầm nội dung. |
| FR-MEM-03 | Xem kỷ niệm trên điện thoại | Hiển thị ảnh, lời nhắn, nhạc của trang được phép chia sẻ, theo cơ chế quyền và kích hoạt được chốt. | Người xem QR, Customer | Must, phụ thuộc Q06–Q07 | Trang sử dụng được trên mobile; link không hợp lệ/hết hạn/đã tắt có thông báo; không lộ địa chỉ giao hàng, thanh toán, cấu hình thiết kế hay ảnh gốc không được chia sẻ. |
| FR-MEM-04 | Gắn nội dung với đơn | Liên kết trang kỷ niệm và QR với đúng sản phẩm; không tự thay đổi nội dung đơn đã xác nhận bằng việc sửa giỏ. | Customer, Admin theo quyền | Must, phụ thuộc Q06 | Mỗi dòng đơn truy vết được QR và nội dung liên quan; kiểm tra hai đơn/tài khoản khác nhau không truy cập nhầm; chính sách cập nhật trang sau đặt hàng phải được chốt trước test. |
| FR-MEM-05 | Tải ảnh và video tạm | Đề xuất tách đường tải kết quả chụp tạm khỏi trang kỷ niệm; hết hạn tải tạm không tự xóa trang quà tặng. | Khách sở hữu phiên, Customer | Đề xuất chờ xác nhận Q05–Q07 | Sau khi được duyệt: hai loại link có vòng đời độc lập; hết hạn tải hiển thị đúng thông báo; không cấp quyền xem toàn bộ dữ liệu tài khoản qua link tải. |
| FR-PHO-07 | Video quá trình chụp | Đề xuất ghi một đoạn video ngắn không âm thanh từ phiên camera để làm kỷ niệm; khách được chọn bật/tắt, không yêu cầu microphone. Chưa bổ sung tải video tùy ý. | Khách | Đề xuất chờ xác nhận Q05 | Sau khi được duyệt: chỉ ghi khi khách chủ động bật; tắt không tạo video; dừng ghi khi chụp xong/rời phiên; lỗi ghi không chặn chụp ảnh; thời lượng/định dạng/lưu trữ theo cấu hình đã duyệt. |

**Phương án QR đề xuất:** dùng QR trên sản phẩm cho trang kỷ niệm thay vì đường tải tạm 1–3 ngày. Trang kỷ niệm cần được duy trì phù hợp ý nghĩa quà tặng và thời gian chấm đồ án. Đường tải ảnh/video tạm có thể dùng thời hạn ngắn riêng. Quyền xem nên giới hạn ở nội dung chủ sở hữu đồng ý chia sẻ; phương án link khó đoán không thay thế bảo vệ ảnh nguồn riêng tư. Chưa chốt số ngày, video, cơ chế chia sẻ hoặc khả năng sửa trang sau đặt hàng. Những nội dung này cần quyết định Q05–Q07, không tự áp dụng như chính sách đã duyệt.

### 4.5. Custom Studio và file in

| Mã | Tên chức năng | Mô tả | Người sử dụng | Mức độ ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| FR-STU-01 | Chọn mẫu và vùng thiết kế | Chọn template theo sản phẩm/khổ; nhận ảnh từ Photobooth hoặc tải từ máy; Guest được thử. | Khách | Must | Template đúng sản phẩm/khổ; thể hiện rõ vùng thiết kế; không cho dùng mẫu không tương thích. |
| FR-STU-02 | Kiểm tra ảnh | Nhận JPEG/PNG/WebP; kiểm tra loại file thực tế, dung lượng và kích thước, không chỉ phần mở rộng. | Khách | Must, phụ thuộc Q04 | Ảnh đúng được nhận; file giả ảnh, sai loại/vượt giới hạn bị từ chối; thông báo nêu lỗi; server kiểm tra lại khi lưu file. |
| FR-STU-03 | Biến đổi ảnh và đối tượng | Kéo thả, đổi kích thước, xoay, lật và xóa đối tượng ảnh trong vùng cho phép; giữ các thành phần khóa. | Khách | Must | Đối tượng được chọn thay đổi đúng thao tác; đối tượng khóa không bị di chuyển/xóa; thiết kế lưu/mở lại giữ đúng hình dạng và bố cục. Quy tắc ảnh tràn vùng cần chốt Q04. |
| FR-STU-04 | Văn bản cá nhân hóa | Thêm/sửa lời nhắn; chọn font, cỡ, màu, căn lề và vị trí trong vùng thiết kế. | Khách | Must, phụ thuộc Q04 | Văn bản tiếng Việt hiển thị đúng trong preview và file xuất; giới hạn được kiểm tra; chuỗi HTML/script không thực thi; font chưa tải không bị âm thầm xuất sai. |
| FR-STU-05 | Nền và khung | Thay màu nền/họa tiết theo tài nguyên được phép; không làm lệch khung chuẩn của sản phẩm. | Khách | Must theo brainstorm | Thay lựa chọn cập nhật preview và file xuất; khung chuẩn giữ đúng tỉ lệ/kích thước; mở lại khôi phục đúng nền đã chọn. |
| FR-STU-06 | Preview 2D | Hiển thị thiết kế theo đúng tỉ lệ in; có thể ghép mockup phẳng để hình dung sản phẩm. | Khách | Must | Preview thể hiện đúng nội dung, thứ tự lớp và tỉ lệ; không dùng mockup làm file in; hiển thị phân biệt phần thiết kế với hình phối cảnh. |
| FR-STU-07 | Sticker và thứ tự lớp | Chọn sticker theo chủ đề; thêm, kéo thả, đổi kích thước, xoay/lật/xóa; đưa đối tượng lên/xuống lớp phù hợp. | Khách | Must theo brainstorm | Chỉ sử dụng tài nguyên được phép; thao tác đúng đối tượng; thứ tự lớp giữ nguyên sau lưu/mở và xuất; khung khóa không bị phá vỡ. |
| FR-STU-08 | Lưu và đóng băng thiết kế đơn | Lưu cấu hình đối tượng, tài nguyên và preview cho mỗi dòng giỏ; tạo bản lưu độc lập khi đặt hàng. | Customer | Must | Lưu/mở lại giữ ảnh, chữ, sticker, nền, lớp và QR; sửa giỏ không đổi đơn đã đặt; lưu tham chiếu phiên bản tài nguyên để mẫu cũ không bị thay bằng bản mới. |
| FR-STU-09 | Mở lại và gửi sửa | Sửa thiết kế trong giỏ; với đơn Cần chỉnh sửa chỉ sửa nội dung theo yêu cầu, không đổi biến thể/số lượng/giá. | Customer | Must | Khách chỉ sửa thiết kế của mình đúng trạng thái; gửi sửa tạo phiên bản mới và chuyển chờ duyệt lại; Admin tải đúng bản được duyệt. |
| FR-STU-10 | Xuất ảnh phục vụ in | Kết xuất ảnh PNG từ thiết kế đúng khổ, gồm ảnh, chữ, sticker và QR; tách ảnh in khỏi preview giao diện. | Hệ thống, Admin sử dụng kết quả | Must, phụ thuộc Q08 | File có kích thước pixel và chất lượng theo Q08; không thiếu font/ảnh/lớp; đúng bản duyệt; QR đọc được sau xuất và thử ở khổ dự kiến; lỗi xuất không báo thành công. |
| FR-STU-11 | Giữ thiết kế khi đăng nhập | Guest chuyển đăng nhập để lưu giỏ mà không mất nội dung đang làm trong phiên hợp lệ. | Guest chuyển thành Customer | Must | Đăng nhập xong giữ đúng thiết kế; đăng nhập lỗi không tạo dòng giỏ; thiết kế tạm không bị chuyển cho người khác hoặc giữ trái chính sách Q07. |

Ảnh in không được coi là đạt chỉ vì nhân kích thước canvas 2–3 lần. Nghiệm thu phải dựa trên khổ vật lý, kích thước pixel, chất lượng ảnh đầu vào, font và kết quả xuất thực tế theo Q08. Tài liệu không cam kết ảnh đầu vào mờ sẽ được tự động cải thiện thành ảnh in tốt.

### 4.6. Giỏ hàng và đặt hàng

| Mã | Tên chức năng | Mô tả | Người sử dụng | Mức độ ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| FR-CART-01 | Giỏ hàng cá nhân hóa | Thêm hàng và thiết kế; các thiết kế khác nhau có dòng riêng, kèm preview. | Customer | Must | Hai sản phẩm cùng biến thể nhưng thiết kế khác không bị gộp; mỗi dòng giữ đúng cấu hình, ảnh và QR; Guest được yêu cầu đăng nhập. |
| FR-CART-03 | Quản lý giỏ | Đổi số lượng, xóa, xem tùy chọn/tạm tính và giữ giỏ khi tải lại. | Customer | Must | Thay đổi đúng dòng và số tiền; từ chối số lượng không hợp lệ; tải lại giữ giỏ đúng tài khoản; xóa giỏ không xóa dữ liệu đơn đã tạo. |
| FR-CART-05 | Gợi ý mua kèm | Gợi ý phụ kiện/sản phẩm bổ sung trong giỏ. | Customer | Must | Gợi ý phù hợp và đang được bán; khách phải chủ động thêm, không tự tăng tiền đơn bằng phụ kiện chưa chọn. |
| FR-ORD-01 | Checkout và tạo đơn | Nhập thông tin nhận hàng, kiểm tra thiết kế/giá/phí/voucher, chọn phương thức và xác nhận. | Customer | Must | Thiếu trường bắt buộc hoặc thiết kế chưa hợp lệ không tạo đơn; đơn có mã, chi tiết, địa chỉ, giá chụp tại thời điểm đặt và phương thức; tạo lỗi thì hoàn tác dữ liệu DB liên quan. |
| FR-ORD-02 | Tính tiền tại server | Server tính lại giá, phụ kiện, giảm giá và phí giao hàng từ dữ liệu hợp lệ. | Customer; hệ thống xử lý | Must, phụ thuộc Q09–Q10 | Sửa giá ở trình duyệt không thay được tổng server; chênh giá so với khách đã xem phải được hiển thị để xác nhận; tiền không âm và tuân thủ quy tắc đã duyệt. |
| FR-ORD-05 | Theo dõi xử lý và thanh toán | Hiển thị trạng thái đơn, thanh toán, kết quả duyệt và lý do cần sửa riêng biệt. | Customer, Admin | Must | Hiển thị đúng dữ liệu đã lưu; khách chỉ xem đơn mình; COD chưa thu tiền không bị hiển thị đã trả chỉ vì được sản xuất; lỗi payment không làm đơn tự hoàn thành. |
| FR-ORD-06 | Hủy và theo dõi hoàn tiền | Tiếp nhận yêu cầu hủy, kiểm tra trạng thái và xử lý nghĩa vụ hoàn tiền nếu có theo chính sách được duyệt. | Customer, Admin | Must, phụ thuộc Q11 | Sau khi chốt Q11: chỉ cho hủy đúng điều kiện; lưu lý do/lịch sử; yêu cầu hoàn và hoàn tất hoàn được phân biệt; không ghi chuyển tiền thật từ kết quả thử nghiệm. |
| FR-ORD-07 | Email xác nhận đơn | Gửi email xác nhận đơn kèm thông tin và preview được phép theo brainstorm; nội dung đơn cũng có trên tài khoản. | Customer; hệ thống gửi | Must theo brainstorm | Email xác nhận đúng mã đơn, thông tin và preview được phép; người nhận không nhận dữ liệu đơn khác; lỗi gửi có ghi nhận và gửi lại không tạo đơn mới. |
| FR-ORD-08 | Email sự kiện xử lý | Gửi email yêu cầu sửa và các sự kiện khác trong danh sách được duyệt; thông báo trên tài khoản vẫn phải có theo FR-ORD-05. | Customer; hệ thống gửi | Should, phụ thuộc Q13 | Khi triển khai: đúng người nhận, mã đơn, sự kiện và lý do; link kiểm tra quyền; lỗi gửi được ghi nhận; gửi lại không tạo thêm yêu cầu sửa hoặc đổi trạng thái đơn lần nữa. |

### 4.7. Thanh toán và vận chuyển

| Mã | Tên chức năng | Mô tả | Người sử dụng | Mức độ ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| FR-PAY-01 | COD | Cho chọn COD cho cả hàng bán sẵn và hàng cá nhân hóa, kể cả đơn gồm hai loại; ghi nhận chưa thu tiền đến khi có xác nhận thu. | Customer, Admin | Must, đã xác nhận phương thức | Đơn cá nhân hóa chọn được COD; không gửi sang VNPay khi chọn COD; đơn có thể đi tới duyệt/sản xuất nếu các điều kiện khác đạt dù chưa thu tiền; không tự ghi đã thu khi mới xác nhận đơn. Cách xác nhận thu và giao thất bại thuộc Q10–Q11. |
| FR-PAY-02 | VNPay Sandbox | Tạo yêu cầu thanh toán thử, chuyển tới VNPay, nhận kết quả thành công/thất bại/hủy; cho thanh toán lại khi hợp lệ. | Customer | Must, đã xác nhận cổng | Tích hợp sandbox có request/response thực; thành công cập nhật đúng đơn; thất bại/hủy không ghi đã trả; thông tin thử nghiệm được phân biệt với tiền thật; trả về từ trình duyệt không tự là bằng chứng thanh toán hợp lệ. |
| FR-PAY-03 | Xác thực và chống ghi nhận trùng | Backend xác minh phản hồi theo tích hợp VNPay, mã đơn, số tiền và trạng thái; xử lý thông báo lặp. | Hệ thống, Admin tra cứu | Must | Chữ ký/dữ liệu/số tiền sai không ghi thành công; thông báo lặp không cộng tiền hay tạo đơn lần nữa; lưu lần giao dịch và kết quả; trường hợp callback đến sau hủy được đối soát theo Q11. |
| FR-SHP-01 | Phí và thông tin vận chuyển | Nhập địa chỉ; tính và lưu phí; Admin cập nhật thông tin, mã vận đơn nếu có và trạng thái. | Customer, Admin | Must, phụ thuộc Q10 | Phí trong tổng tiền và đơn lưu khớp; thay địa chỉ trước đặt tính lại đúng; khách thấy thông tin giao; không tự coi giao thành công là đã thu COD khi chưa có xác nhận thu. |
| FR-SHP-02 | Kết nối dịch vụ giao hàng | Đối chiếu hướng dùng API GHN được nêu trong brainstorm với khả năng đăng ký/tích hợp thực tế. Chưa tự khẳng định có sandbox hoặc chọn API/quy tắc thay nhóm. | Hệ thống, Admin | Đề xuất chờ xác nhận Q10 | Sau khi chốt API: có tài liệu nguồn, dữ liệu gửi/nhận, lỗi và cách lưu kết quả; sau khi chốt quy tắc: có bảng phí và test tương ứng. Không tuyên bố đã có tích hợp khi chỉ nhập tay. |

Với VNPay, “đã thanh toán” trong môi trường demo là kết quả giao dịch sandbox đã xác thực. Với COD, đây là tình trạng đã thu tiền được ghi nhận theo quy trình vận hành được duyệt. Hai nguồn ghi nhận phải được phân biệt, không cộng thành doanh thu thực thu ngoài đời.

### 4.8. Voucher và khuyến mãi

| Mã | Tên chức năng | Mô tả | Người sử dụng | Mức độ ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| FR-VCH-01 | Kiểm tra và áp mã | Kiểm tra mã tồn tại, thời gian, điều kiện đơn, mức giảm, lượt dùng và đối tượng nếu áp dụng. | Customer | Must, phụ thuộc Q09 | Mã không tồn tại/hết hạn/sai điều kiện bị từ chối với lý do; mã hợp lệ giảm đúng tiền; đặt đồng thời không vượt số lượt; tổng được server tính lại. |
| FR-VCH-04 | Quản lý chương trình | Admin tạo, sửa, vô hiệu hóa voucher/khuyến mãi, thời hạn và điều kiện theo quy tắc đã chốt. | Admin | Must, phụ thuộc Q09 | Không nhận cấu hình giảm không hợp lệ; hiệu lực đúng thời gian; vô hiệu hóa ngăn dùng mới nhưng không sửa giá đã lưu ở đơn cũ; xử lý lượt sau hủy theo Q09/Q11. |

### 4.9. Quản trị và giao diện

| Mã | Tên chức năng | Mô tả | Người sử dụng | Mức độ ưu tiên | Tiêu chí nghiệm thu |
|---|---|---|---|---|---|
| FR-ADM-01 | Quản lý dữ liệu sản phẩm | Quản lý danh mục, nhóm, sản phẩm, biến thể, phụ kiện và giá; ẩn/ngừng bán khi cần. | Admin | Must | Thêm/sửa/ẩn đúng dữ liệu; tài khoản khác không có quyền; thao tác xóa/ẩn không làm mất lịch sử đơn đã tham chiếu. |
| FR-ADM-04 | Quản lý tài khoản | Xem, khóa/mở tài khoản theo phân quyền. | Admin | Must | Trạng thái lưu đúng; tài khoản bị khóa không tiếp tục truy cập nghiệp vụ cần xác thực; không hiển thị mật khẩu gốc hoặc secret. |
| FR-ADM-05 | Duyệt thiết kế | Xem đơn và từng thiết kế; duyệt hoặc yêu cầu sửa kèm lý do, không tự sửa thay khách. | Admin | Must | Chỉ duyệt bản hợp lệ được gắn đúng dòng đơn; thiếu lý do không gửi yêu cầu sửa; bản sửa mới phải được duyệt lại; đơn COD cũng qua kiểm tra thiết kế. |
| FR-ADM-06 | Cập nhật xử lý đơn | Chuyển trạng thái theo điều kiện đơn, thiết kế và phương thức thanh toán. | Admin, hệ thống | Must, phụ thuộc Q11 cho hủy/ngoại lệ | Không sản xuất thiết kế chưa duyệt; VNPay chưa thanh toán hợp lệ không tiếp tục sản xuất; COD không bị chặn chỉ vì chưa thu tiền; trạng thái sai thứ tự bị từ chối, có lịch sử. |
| FR-ADM-07 | Dashboard | Có tổng doanh thu theo định nghĩa được chốt, số đơn/trạng thái, đơn chờ giao, số lượng sản phẩm chờ giao, số khách và sản phẩm bán chạy; có lọc thời gian. | Admin | Must, phụ thuộc Q12 | Đối chiếu khớp bộ đơn mẫu và công thức; một đơn nhiều sản phẩm cho số lượng đúng; phân biệt kết quả thử VNPay, COD và hoàn tiền; không gọi số liệu sandbox là doanh thu thật. |
| FR-ADM-08 | Biểu đồ | Trực quan hóa dữ liệu Dashboard. | Admin | Should | Biểu đồ và số tổng khớp cùng bộ lọc; dữ liệu rỗng hiển thị rõ; không tạo số liệu minh họa như dữ liệu thực. |
| FR-ADM-09 | Tải file phục vụ in | Tải ảnh nguồn cần thiết, cấu hình và PNG của phiên bản thiết kế đã duyệt; Admin kiểm tra trước in. | Admin | Must, phụ thuộc Q08 | Đúng đơn/dòng/phiên bản; không lấy nhầm preview hoặc bản chưa duyệt; file đạt quy cách; đường tải kiểm tra quyền và không công khai dữ liệu riêng. |
| FR-ADM-10 | Quản lý template | Thêm/sửa/ẩn template theo sản phẩm/khổ và tài nguyên; lưu phiên bản để giữ thiết kế cũ. | Admin | Must | Mẫu được khai báo vùng khóa và khổ; ẩn mẫu không làm mất thiết kế đã đặt; thay template không đổi bản in của đơn cũ. |
| FR-ADM-11 | Quản lý sticker và khung | Quản lý tài nguyên theo chủ đề, thông tin nguồn/quyền sử dụng; ẩn tài nguyên không còn dùng. | Admin | Must theo brainstorm | Studio chỉ liệt kê tài nguyên đang cho phép; file/tài nguyên sai bị từ chối; tài nguyên gắn thiết kế cũ còn được truy vết và kết xuất đúng. |
| FR-UX-01 | Tương tác có mục đích | Bố cục nhất quán; ít nhất ba tương tác phục vụ UX: cập nhật giá, preview thiết kế, phản hồi thêm giỏ. | Khách | Must | Ba tương tác hoạt động với dữ liệu đúng; có phản hồi thành công/lỗi; không chỉ là hiệu ứng trang trí và không gây thêm giỏ nhiều lần ngoài ý muốn. |

### 4.10. Quy trình nghiệp vụ chính

**BW-01 — Tạo và đặt mua quà tặng cá nhân hóa**

Điều kiện bắt đầu: website có sản phẩm, biến thể, template và tài nguyên hợp lệ. Khách có thể dùng Photobooth hoặc bắt đầu từ ảnh tải lên, không bắt buộc đi qua webcam cho mọi đơn.

| Bước | Thao tác | Phản hồi và dữ liệu lưu | Yêu cầu liên quan |
|---|---|---|---|
| 1 | Chọn sản phẩm, quy cách và template. | Hiển thị giá dự kiến, khổ và tài nguyên tương thích. | FR-PRD-01/06, FR-STU-01 |
| 2 | Chụp Photobooth hoặc tải ảnh. | Kiểm tra quyền camera/file; chụp, chọn lại ảnh theo khung. | FR-PHO-01–06, FR-STU-02 |
| 3 | Thiết kế trong Studio. | Cập nhật ảnh, chữ, sticker, nền và lớp; giữ ranh giới/khung khóa; hiển thị 2D. | FR-STU-03–07 |
| 4 | Chuẩn bị kỷ niệm số và QR nếu áp dụng cho sản phẩm. | Liên kết nội dung được phép và mã QR với thiết kế; cơ chế kích hoạt theo Q06. | FR-MEM-01–04 |
| 5 | Đăng nhập để thêm giỏ. | Giữ thiết kế đang làm; lưu cấu hình và preview vào đúng dòng giỏ. | FR-AUTH-01, FR-STU-08/11, FR-CART-01 |
| 6 | Kiểm tra giỏ, sửa thiết kế, số lượng và chọn phụ kiện. | Cập nhật giỏ; thiết kế khác nhau giữ dòng riêng. | FR-CART-03/05, FR-STU-09 |
| 7 | Nhập địa chỉ, voucher, chọn VNPay Sandbox hoặc COD. | Server kiểm tra và tính lại tổng theo Q09/Q10; khách xác nhận nếu có chênh lệch. | FR-ORD-02, FR-VCH-01, FR-SHP-01 |
| 8 | Xác nhận đặt hàng. | Tạo đơn, chi tiết và bản thiết kế độc lập trong giao dịch DB; lưu phương thức. | FR-ORD-01, FR-STU-08, NFR-REL-01 |
| 9 | Thanh toán VNPay Sandbox hoặc ghi nhận COD. | VNPay xác thực kết quả; COD giữ chưa thu tiền và không yêu cầu giả lập thanh toán trước. | FR-PAY-01–03 |
| 10 | Admin xác nhận và kiểm tra thiết kế. | Duyệt từng thiết kế hoặc yêu cầu sửa với lý do; lưu phiên bản/lịch sử. | FR-ADM-05, FR-STU-09 |
| 11 | Khách gửi sửa nếu cần, Admin duyệt lại. | Chỉ thay nội dung; không đổi giá/biến thể/số lượng của đơn đã đặt. | FR-STU-09, FR-ADM-05 |
| 12 | Đơn đủ điều kiện được chuẩn bị in. | Có bản được duyệt; VNPay đã xác thực thành công hoặc COD hợp lệ; tải đúng file và cập nhật xử lý. | FR-ADM-06/09, FR-STU-10 |
| 13 | Cập nhật giao hàng, hoàn thành và kết quả thu tiền. | Khách xem trạng thái; thu COD chỉ được ghi nhận theo quy trình Q10/Q11, không suy ra từ việc đã in. | FR-SHP-01, FR-ORD-05 |

**Các trạng thái và điều kiện đã xác định**

Trạng thái xử lý đơn và trạng thái thanh toán là hai nhóm dữ liệu khác nhau. Cần biểu diễn được các mốc Chờ xác nhận, Chờ kiểm tra thiết kế, Cần chỉnh sửa, Đã duyệt, Đang sản xuất/in, Đang giao, Hoàn thành và các nhánh hủy/ngoại lệ sau khi Q11 được chốt.

- VNPay chưa thành công: không đủ điều kiện sản xuất; thất bại/hủy một lần giao dịch không tự đồng nghĩa hủy đơn.
- COD: đơn có thể được xác nhận, duyệt và sản xuất khi hợp lệ dù thanh toán vẫn Chưa thu tiền.
- Thiết kế bị yêu cầu sửa: Cần chỉnh sửa → khách gửi phiên bản mới → Chờ kiểm tra thiết kế → Admin duyệt lại.
- Đơn bán sẵn không cần duyệt thiết kế. Đơn gồm hàng bán sẵn và cá nhân hóa vẫn chọn được COD; quy tắc giao chung/tách đợt và chuyển trạng thái từng dòng cần chốt Q11.
- Không đổi một đơn đã hủy thành đang sản xuất chỉ vì nhận callback tới muộn. Lưu và đối soát kết quả giao dịch theo chính sách Q11.
- Hoàn tiền là luồng riêng khi chính sách có áp dụng; chưa chốt mốc hủy, điều kiện và cơ chế hoàn. Không tự đặt quy định “chỉ hủy trước khi duyệt” khi người dùng chưa thông qua.

**Ngoại lệ phải được kiểm tra**

| Mã | Tình huống | Xử lý tối thiểu |
|---|---|---|
| E01 | Không cấp camera, không có camera hoặc camera lỗi. | Thông báo, cho tải ảnh; không báo đã chụp khi chưa có ảnh. |
| E02 | Ảnh giả định dạng, quá giới hạn; chữ không hợp lệ; tài nguyên chưa tải. | Báo lỗi cụ thể; không lưu/xuất như một thiết kế hợp lệ. |
| E03 | Guest chuyển đăng nhập hoặc hết phiên giữa lúc lưu. | Giữ dữ liệu tạm theo Q07, kiểm tra lại quyền; không tạo giỏ cho sai tài khoản. |
| E04 | Giá/địa chỉ/voucher thay đổi hoặc bị sửa từ client. | Server tính và kiểm tra lại; yêu cầu xác nhận phần thay đổi; không dùng giá giả. |
| E05 | Lỗi tạo đơn sau khi đã tải file. | Rollback DB liên quan; không xác nhận đơn dở; file tạm được đánh dấu và dọn theo Q07, không coi rollback DB tự xóa được file cloud. |
| E06 | VNPay thất bại/hủy/sai chữ ký/sai tiền/callback lặp. | Không ghi thành công sai hoặc trùng; hiển thị trạng thái và cho thử lại khi đơn hợp lệ. |
| E07 | Admin yêu cầu sửa, khách sửa nhầm trạng thái/đơn người khác. | Chặn ở backend; đúng chủ sở hữu và đúng trạng thái mới tạo phiên bản sửa. |
| E08 | Truy cập trực tiếp ảnh, thiết kế hoặc đơn không có quyền. | Từ chối; trang QR chỉ cấp nội dung được chia sẻ, không dẫn tới dữ liệu riêng. |
| E09 | QR chưa kích hoạt, bị tắt, hết hạn hoặc sai liên kết. | Hiển thị thông báo phù hợp; không lộ thông tin đơn và không tự chuyển sang nội dung khác. |
| E10 | File in lỗi, thiếu tài nguyên hoặc QR không đọc được. | Chặn xác nhận file đạt; ghi nhận lỗi và xử lý lại trước khi đưa vào in. |
| E11 | Hủy, giao thất bại, khách không phản hồi hoặc callback sau hủy. | Xử lý theo chính sách Q11 sau khi chốt; không tự ghi hoàn tiền hoặc thu COD thành công. |

### 4.11. Điều kiện nghiệm thu chung

Toàn bộ Must phải được kiểm thử theo tiêu chí từng dòng và Qxx liên quan phải có quyết định. Mỗi kết quả ghi mã yêu cầu, dữ liệu đầu vào, kỳ vọng, kết quả thực tế và bằng chứng; không dùng mô tả dự kiến làm minh chứng chạy thành công.

Các luồng cần trình diễn gồm: chụp và tải ảnh dự phòng; chỉnh sửa và lưu/mở lại; hai thiết kế khác nhau trong cùng giỏ; đặt đơn VNPay thành công/thất bại/hủy; đặt đơn cá nhân hóa COD; Admin yêu cầu sửa/duyệt/tải đúng file; cập nhật giao và ghi nhận thu COD theo quy trình; áp voucher; truy cập QR theo chính sách được duyệt; chặn truy cập dữ liệu người khác. Các đề xuất chưa duyệt không được đánh dấu là đã đáp ứng.

## 5. Yêu cầu phi chức năng

| Mã | Yêu cầu | Ưu tiên | Tiêu chí kiểm tra |
|---|---|---|---|
| NFR-SEC-01 | Băm mật khẩu; xác thực, phân vai và kiểm tra quyền sở hữu tài nguyên phía server. | Must | Customer không gọi được API Admin hoặc đọc/sửa đơn/thiết kế/ảnh người khác; không lưu mật khẩu dạng rõ; kiểm tra cả URL trực tiếp. |
| NFR-SEC-02 | Kiểm tra dữ liệu; phòng SQLi, XSS, CSRF phù hợp cơ chế phiên. | Must | Có test chuỗi độc hại và yêu cầu giả mạo phù hợp kiến trúc; không thực thi script trong lời nhắn/trang kỷ niệm; lỗi không lộ dữ liệu. |
| NFR-SEC-07 | Kiểm tra loại file thực và giới hạn tài nguyên khi upload/xử lý. | Must, phụ thuộc Q04/Q05 | File không được hỗ trợ bị từ chối; kiểm tra số lượng/dung lượng/kích thước theo cấu hình; file khách tải không được xử lý như mã thực thi. |
| NFR-SEC-08 | Bảo vệ secret và thông tin cấu hình. | Must | Không có mật khẩu DB, token, khóa VNPay hoặc secret trong mã nguồn công khai/giao diện/log hiển thị; cấu hình mẫu không chứa khóa thật. |
| NFR-SEC-10 | Bảo vệ ảnh riêng tư và chia sẻ kỷ niệm đúng quyền. | Must, phụ thuộc Q06/Q07 | Chỉ chủ sở hữu/Admin có quyền với ảnh nguồn; QR chỉ hiển thị nội dung được phép; UUID/tên khó đoán không thay kiểm tra quyền; xóa/hết hạn theo chính sách đã duyệt. |
| NFR-SEC-11 | Quyền sử dụng camera và nội dung cá nhân. | Must | Hiển thị trạng thái camera đang dùng; dừng camera khi xong; không ghi video hoặc thu âm ngầm; nội dung chia sẻ phải theo lựa chọn đã được xác nhận. |
| NFR-RES-01 | Trang chính và Studio dùng được trên desktop/mobile, kiểm tra 390 px và 1366 px. | Must | Không tràn ngang/che nút; thao tác chọn, chỉnh đối tượng và đặt hàng sử dụng được; thiết bị không có camera vẫn có đường tải ảnh. |
| NFR-REL-01 | Giao dịch DB giữ nhất quán đơn, dòng đơn, bản lưu thiết kế và lượt voucher. | Must | Gây lỗi giữa quá trình không để đơn dở; đặt đồng thời không vượt lượt voucher; file ngoài DB được quản lý riêng. |
| NFR-REL-02 | Tính tiền tại server và xử lý payment lặp an toàn. | Must | Can thiệp giá client không đổi tiền; callback lặp không ghi nhận trùng; trạng thái và số liệu Dashboard đối soát được. |
| NFR-DATA-01 | Dữ liệu thiết kế đơn độc lập, có phiên bản và tài nguyên truy vết được. | Must | Sửa giỏ/template/sticker không đổi bản duyệt của đơn cũ; lưu và mở lại giữ bố cục; không tải nhầm phiên bản in. |
| NFR-DATA-02 | Vòng đời dữ liệu và file được quản lý. | Must, phụ thuộc Q07 | Có cơ chế nhận diện file tạm/mồ côi, thời hạn lưu/xóa và dữ liệu cần giữ phục vụ chấm; không xóa nguồn khi đơn còn cần sản xuất. |
| NFR-COMP-01 | Luồng chính chạy trên Chrome và Edge, ghi phiên bản kiểm thử. | Must | Có kết quả cho xem hàng, Photobooth/tải dự phòng, Studio, checkout, payment và QR trên các phiên bản đã ghi. |
| NFR-COMP-02 | Mở rộng kiểm tra Firefox và Safari. | Should | Ghi nhận chức năng hỗ trợ và hạn chế thực tế; không tuyên bố hỗ trợ nếu chưa kiểm tra. |
| NFR-UX-02 | Thông báo trạng thái/lỗi bằng tiếng Việt, nêu hướng xử lý. | Must | Lỗi camera/file/voucher/payment/QR có thông báo phù hợp, không hiện stack trace; có trạng thái đang xử lý cho thao tác lâu. |
| NFR-PERF-01 | Mục tiêu tải danh mục/chi tiết dưới 3 giây ở ít nhất 9/10 lần đo. | Should, giữ từ bản gốc | Ghi cấu hình môi trường, bộ dữ liệu và cách đo; kết quả có bằng chứng, không tự suy ra từ cảm nhận. |
| NFR-PERF-02 | Mục tiêu preview chữ/màu cập nhật trong 500 ms ở ít nhất 9/10 lần thử, không tính tải ảnh ban đầu. | Should, giữ từ bản gốc | Đo trên thiết bị/mẫu có số đối tượng được ghi; thời gian export và camera không bị mô tả là độ trễ bằng 0. |
| NFR-UX-01 | Mục tiêu 4/5 người thử chưa biết thiết kế hoàn thành một mẫu và thêm giỏ trong 5 phút. | Should, giữ từ bản gốc | Nêu rõ điểm bắt đầu và việc có tính bước chụp/đăng nhập hay không; dùng cùng kịch bản; ghi kết quả thực tế. |
| NFR-MNT-01 | Tổ chức module, cấu hình theo môi trường, có hướng dẫn cài đặt/chạy. | Must | Thành viên khác chạy được từ hướng dẫn; không phụ thuộc secret trong source; giải thích được các luồng Product, Cart, Checkout và thiết kế. |
| NFR-DEP-01 | Triển khai để truy cập và giữ minh chứng kiểm thử. | Must theo yêu cầu học phần | Website và các dịch vụ cần thiết truy cập được trong thời gian đánh giá; có tài khoản/dữ liệu demo phù hợp; link QR không chỉ trỏ tới localhost; mô tả môi trường và hạn chế thật. |

## 6. Giới hạn và giả định

### 6.1. Nguồn lực và kỹ thuật

- Nhóm có tám thành viên; tiến độ cụ thể theo PROJECT_PLAN được duyệt và lịch học phần, không tự ghi thời hạn chưa có nguồn.
- Định hướng brainstorm: React, Node.js và cơ sở dữ liệu quan hệ; công cụ canvas có Fabric.js/Konva.js là các lựa chọn được nêu. Framework backend, công cụ canvas, CSDL/ORM và dịch vụ lưu trữ cần thống nhất tại Q02, không trộn các phương án thành một stack đã chốt.
- Chỉ sản phẩm phẳng một mặt, preview 2D, Admin kiểm tra trước in. Phát triển đủ chức năng TMĐT bắt buộc đồng thời quản lý phạm vi Photobooth/Studio/QR.
- Giới hạn gói miễn phí, giá hosting, giấy phép và khả năng tích hợp bên ngoài phải kiểm tra theo nguồn thực tế trước khi chốt; không coi con số dự toán brainstorm là bảo đảm dịch vụ.
- Không dùng hình/nhạc/sticker không có quyền sử dụng. Dữ liệu demo phải có nguồn hoặc cách tạo; không dùng tài khoản, ảnh hoặc thông tin cá nhân thật khi chưa được phép.
- Không yêu cầu website hoàn chỉnh ngay ở Chương 1. Tài liệu này mô tả phạm vi xuyên học phần; các kết quả chạy, ảnh, test và demo được bổ sung đúng giai đoạn.

### 6.2. Nội dung đã có căn cứ và cách thay đổi

| Nội dung | Căn cứ |
|---|---|
| Tên Memoria Lab | Người dùng xác nhận tên thống nhất. |
| Photobooth, Studio kéo thả/sticker/layer, QR, in PNG, Admin kiểm tra | Brainstorm được người dùng chỉ định làm căn cứ viết lại. |
| Khổ 5×15 cm, 10×15 cm, A5; sản phẩm phẳng một mặt, 2D | Brainstorm. |
| VNPay Sandbox; COD cho cả hàng cá nhân hóa | Người dùng xác nhận trực tiếp trong lần sửa này. |
| Các mức ảnh/chữ/video, in, ship, voucher, hủy/hoàn, lưu dữ liệu và số mẫu | Chưa chốt; người dùng yêu cầu giữ là các mục cần xác nhận. |
| Tách tải tạm và trang kỷ niệm; video không âm thanh tùy chọn | Phương án bổ sung được đề xuất theo yêu cầu người dùng, chưa coi là đã duyệt. |

Giữ mã yêu cầu để các tài liệu khác cập nhật theo. Khi nhóm phê duyệt thay đổi, ghi ngày, người thông qua, yêu cầu bị ảnh hưởng và tác động tới workflow/kế hoạch/test. Không lấy phản biện AI làm quyết định tự động của nhóm.

### 6.3. Các quyết định cần xác nhận

| Mã | Nội dung cần xác nhận | Ảnh hưởng | Trạng thái |
|---|---|---|---|
| Q01 | Chức năng mở rộng trình giảng viên: Studio, Photobooth hay bộ tích hợp; cách ghi nhận Innovation nếu có. | Mục tiêu học phần, tiêu chí demo. | Cần xác nhận với giảng viên; không tự tuyên bố được chấp nhận. |
| Q02 | Framework backend, canvas, CSDL/ORM, nơi lưu file, email, hosting/domain, ngân sách và người vận hành. | Kiến trúc, tích hợp, quyền ảnh, URL QR. | Cần nhóm xác nhận; giữ lựa chọn brainstorm làm tham khảo. |
| Q03 | Số sản phẩm/biến thể/template/khung/sticker/bộ lọc, chủ đề và chất liệu cần có khi demo. | Dữ liệu và độ bao phủ kiểm thử. | Cần xác nhận; không tự đặt 2–3 template. |
| Q04 | MB/ảnh, pixel tối thiểu/tối đa, số ảnh/đối tượng, số chữ/dòng, font/cỡ chữ, quy tắc crop và tràn vùng in. | Upload, Studio, chống quá tải và chất lượng. | Cần xác nhận; không tự đặt 5 MB hoặc giới hạn ký tự. |
| Q05 | Có làm video quá trình chụp không; tự ghi hay tải lên; thời lượng/định dạng; có link tải tạm không. | FR-PHO-07, FR-MEM-05 và lưu trữ. | Đề xuất: video ngắn không âm thanh, khách bật tùy chọn, không thu microphone. Chưa duyệt. |
| Q06 | Quyền xem QR; bật trang khi nào; có mã bảo vệ không; ai sửa/tắt trang, sửa đến khi nào; QR giữ cùng URL khi cập nhật ra sao. | FR-MEM-01–04 và quyền riêng tư. | Cần xác nhận. Đề xuất trang quà tặng khác link tải tạm. |
| Q07 | Thời hạn ảnh tạm, giỏ, đơn, trang QR, video; dọn file mồ côi; điều kiện xóa; duy trì link đến khi chấm xong. | Lưu trữ, riêng tư và trải nghiệm quà tặng. | Cần xác nhận; không áp mốc 1–3 ngày cho mọi loại dữ liệu. |
| Q08 | Pixel/DPI mục tiêu cho từng khổ, độ phân giải ảnh đầu vào, vùng an toàn/bleed, quy tắc QR và tiêu chuẩn thử in. | FR-STU-10, FR-ADM-09. | PNG/khổ vật lý có trong brainstorm; thông số chất lượng cần xác nhận. |
| Q09 | Loại voucher, mức/trần giảm, đơn tối thiểu, cộng dồn sale, cách tính với ship, làm tròn, giới hạn/giữ/hoàn lượt. | Giá, checkout, voucher và đồng thời. | Cần xác nhận; không tự đặt mức tiền hoặc phần trăm. |
| Q10 | API GHN hay quy tắc phí được duyệt; vùng/phí, địa chỉ, mã vận đơn; xác nhận thu COD, giao thất bại; vận hành demo hay giao thực. | FR-SHP-01/02, COD, trạng thái. | Cần xác nhận; không tự coi sandbox GHN là đã có. |
| Q11 | Mốc hủy; hoàn/đổi; không phản hồi bản sửa; đơn hỗn hợp; giao thất bại; thanh toán lại/đến muộn, đổi phương thức; bảng trạng thái đầy đủ. | Đơn, payment, sản xuất, hoàn tiền và workflow. | Cần xác nhận. Không tự hạn chế COD hàng cá nhân hóa hoặc tự quyết cutoff hủy. |
| Q12 | Công thức doanh thu/bán chạy/sản phẩm chờ giao, khoảng thời gian, cách phân biệt giao dịch thử và COD/hoàn. | FR-PRD-02, FR-ADM-07/08. | Cần xác nhận; không trình bày tiền sandbox là tiền thật. |
| Q13 | Email ngoài xác nhận đơn, nhà cung cấp, nội dung chứa link ảnh/QR và điều kiện gửi lại. | Thông báo và riêng tư. | Email xác nhận đơn có trong brainstorm; phần bổ sung cần xác nhận. |
| Q14 | Thang rating, số lượt/sửa review, kiểm duyệt; thời hạn token khôi phục và lựa chọn cấu hình liên quan tài khoản. | Review/tài khoản và kiểm thử. | Cần xác nhận; không tự đặt các con số. |

Các mục Qxx không phải phần trống được phép bỏ qua khi nghiệm thu. Nhóm phải cập nhật kết quả xác nhận và điều chỉnh FR/NFR liên quan trước khi triển khai chính sách tương ứng. Có thể kiểm thử kỹ thuật bằng dữ liệu cấu hình thử được đánh dấu rõ, nhưng không được coi mức thử là chính sách kinh doanh đã thông qua.

### 6.4. Liên kết hồ sơ Chương 1

REQUIREMENTS đáp ứng phần mục tiêu/phạm vi/người dùng/chức năng/nghiệm thu/phi chức năng/giới hạn theo mẫu đề. Bối cảnh và phạm vi liên quan nhiệm vụ 1; người dùng và FR liên quan nhiệm vụ 5; BW-01 là cơ sở cập nhật nhiệm vụ 6. Phân tích ba website nằm ở `docs/competitor-analysis.md`; phân công và tiến độ ở `PROJECT_PLAN.md`; workflow chi tiết ở `docs/business-workflow.md`; quy tắc hỗ trợ AI ở `AGENTS.md`. Không xem tài liệu này là thay thế toàn bộ các sản phẩm Chương 1. Việc soạn REQUIREMENTS không chứng minh đã hoàn thành khảo sát, thống nhất nhóm, tạo Issues hoặc nộp repository.


