# REQUIREMENTS – MEMORIA CRAFT

Nội dung đang được cập nhật bởi Quang (TV2).

Website thương mại điện tử quà tặng kỷ niệm cá nhân hóa.

Tài liệu xác định mục tiêu, phạm vi, quyền người dùng và các yêu cầu phục vụ phát triển, kiểm thử phiên bản đầu.

> Nội dung đã được cập nhật từ phân tích của AI thứ nhất, bảng rà soát kèm theo và phản biện của AI thứ hai. Các đề xuất chưa có quyết định rõ của nhóm được ghi **Cần xác nhận**.

## 1. Mục tiêu dự án

- Cho phép khách hàng 16–26 tuổi lựa chọn quà tặng, cá nhân hóa ảnh và lời nhắn, xem trước thành phẩm và đặt mua trên cùng website.
- Giúp đơn vị bán tiếp nhận thiết kế rõ ràng, kiểm tra trước khi sản xuất và quản lý đơn hàng, thanh toán, giao hàng tập trung.
- Hoàn thành luồng thương mại điện tử từ tìm sản phẩm đến theo dõi đơn hàng.
- Xây dựng Studio cá nhân hóa theo template làm chức năng khác biệt, phù hợp nguồn lực nhóm 8 thành viên.
- Đáp ứng các hạng mục học phần được nêu trong requirement gốc: chức năng bán hàng nền tảng, thanh toán sandbox, vận chuyển, voucher/khuyến mãi, quản trị và Dashboard, responsive, bảo mật và kiểm thử.

## 2. Phạm vi dự án

### 2.1. Trong phạm vi

- Website dành cho khách hàng và quản trị viên, sử dụng trên máy tính và điện thoại.
- Sản phẩm chính:
  - Dải ảnh Photostrip.
  - Khung tranh Digital Scrapbook để bàn.
  - Thiệp cá nhân hóa.
  - Hộp quà và phụ kiện bán kèm.
- Cá nhân hóa các ấn phẩm phẳng một mặt.
- Các chức năng bán hàng:
  - Xem, tìm kiếm, lọc và sắp xếp sản phẩm.
  - Đăng ký, đăng nhập và quản lý tài khoản.
  - Giỏ hàng, đặt hàng và thanh toán.
  - Tính phí vận chuyển, áp dụng voucher.
  - Theo dõi đơn hàng, đánh giá và gợi ý sản phẩm liên quan.
- Studio cơ bản theo mẫu:
  - Ô ảnh và ô chữ có vị trí định sẵn.
  - Thay ảnh, nhập lời nhắn và chọn các tùy chọn được phép.
  - Xem trước thiết kế 2D.
  - Lưu thiết kế gắn với giỏ hàng và đơn hàng.
- Chức năng quản trị:
  - Quản lý sản phẩm, template, người dùng và khuyến mãi.
  - Quản lý đơn hàng và thống kê.
  - Kiểm tra thiết kế, yêu cầu chỉnh sửa và tải file phục vụ in.

### 2.2. Ngoài phạm vi phiên bản đầu

Các chức năng có thể xem xét phát triển sau:

- Photobooth qua webcam.
- Trang kỷ niệm trực tuyến và mã QR.
- Thiết kế kéo thả tự do bằng Fabric.js.
- Kho sticker cho phép tự chèn.
- Lưu bản nháp thiết kế dài hạn.
- Thiết kế nhiều trang.
- Cộng tác thiết kế theo thời gian thực.

Các nội dung không triển khai trong đồ án:

- Mô hình 3D, NFC và thiết kế bằng AI.
- Ứng dụng di động native.
- Tự động kết nối máy in.
- Quản lý kho nguyên vật liệu và kế toán.
- Thanh toán thật.

## 3. Vai trò người dùng

| Vai trò | Mô tả |
| --- | --- |
| **Guest** | Khách chưa đăng nhập, tìm hiểu sản phẩm và thử cá nhân hóa theo mẫu. |
| **Customer** | Khách đã có tài khoản, thực hiện mua hàng và quản lý thông tin, thiết kế, đơn hàng của mình. |
| **Admin** | Người vận hành website; quản lý dữ liệu bán hàng, duyệt thiết kế và xử lý đơn. Không tách vai trò nhân viên trong phiên bản đầu. |

## 4. Quyền hạn

| Thao tác | Guest | Customer | Admin |
| --- | :---: | --- | --- |
| Xem, tìm kiếm và lọc sản phẩm | Có | Có | Có |
| Thử Studio theo mẫu | Có | Có | Có |
| Lưu thiết kế vào giỏ và đặt hàng | Không | Của mình | Không |
| Sửa thiết kế trong giỏ hoặc khi được yêu cầu | Không | Của mình | Yêu cầu sửa và duyệt |
| Xem đơn hàng | Không | Của mình | Tất cả |
| Đánh giá sản phẩm | Không | Đã mua và đơn đã hoàn thành | Không |
| Quản lý hồ sơ cá nhân | Không | Của mình | Của mình |
| Quản lý sản phẩm, template, voucher và tài khoản | Không | Không | Có |
| Cập nhật trạng thái đơn, tải file in và xem Dashboard | Không | Không | Có |

**Nguyên tắc phân quyền:**

- Guest được thử Studio trước khi đăng nhập.
- Khách phải đăng nhập khi cần lưu thiết kế vào giỏ hoặc đặt hàng.
- Backend kiểm tra cả vai trò và quyền sở hữu tài nguyên.
- Admin không tự sửa nội dung thiết kế thay khách.

## 5. Yêu cầu chức năng

### Quy ước

| Mức ưu tiên | Ý nghĩa |
| --- | --- |
| **Must** | Bắt buộc hoàn thành trong phiên bản đầu. |
| **Should** | Quan trọng, thực hiện khi đủ nguồn lực sau các yêu cầu Must. |
| **Could** | Có thể bổ sung nếu còn thời gian và nguồn lực. |

- **Cần xác nhận** là trạng thái quyết định của nhóm, độc lập với mức ưu tiên đề xuất.
- Mã yêu cầu được giữ theo nhóm chức năng của bản gốc.
- Khoảng trống trong số thứ tự xuất phát từ việc gộp yêu cầu trùng hoặc chuyển chức năng ra ngoài phạm vi.

### 5.1. Tài khoản và khu vực khách hàng

| Mã | Yêu cầu | Ưu tiên |
| --- | --- | :---: |
| `FR-AUTH-01` | Đăng ký bằng email, đăng nhập và đăng xuất; từ chối email đăng ký trùng. | Must |
| `FR-AUTH-03` | Xem và cập nhật hồ sơ, địa chỉ nhận hàng của chính mình. | Must |
| `FR-AUTH-04` | Đổi mật khẩu và khôi phục mật khẩu qua email. | Should |
| `FR-CUS-02` | Xem sản phẩm đã xem gần đây, sản phẩm đã mua và lịch sử đơn hàng. | Must |
| `FR-CUS-04` | Lưu danh sách sản phẩm yêu thích. | Should |

### 5.2. Trang chủ và sản phẩm

| Mã | Yêu cầu | Ưu tiên |
| --- | --- | :---: |
| `FR-HOME-01` | Trang chủ có banner, sản phẩm nổi bật và sản phẩm bán chạy. | Must |
| `FR-HOME-03` | Hiển thị giá và thông tin giảm giá đúng thời gian khuyến mãi. | Must |
| `FR-PRD-01` | Xem danh mục và chi tiết sản phẩm, gồm ảnh, mô tả, kích thước, chất liệu và phụ kiện. | Must |
| `FR-PRD-02` | Tìm kiếm theo từ khóa; sắp xếp theo giá, mới nhất và bán chạy. | Must |
| `FR-PRD-04` | Lọc kết hợp tối thiểu 5 thuộc tính: loại sản phẩm, kích thước, chất liệu, khoảng giá và chủ đề. | Must |
| `FR-PRD-06` | Cập nhật giá khi thay đổi biến thể, số lượng hoặc phụ kiện. | Must |
| `FR-PRD-07` | Hiển thị sản phẩm liên quan hoặc gợi ý mua kèm. | Must |
| `FR-PRD-09` | Hiển thị đánh giá và điểm trung bình; chỉ khách có đơn hoàn thành chứa sản phẩm mới được đánh giá. | Must |

### 5.3. Studio cá nhân hóa theo mẫu

| Mã | Yêu cầu | Ưu tiên |
| --- | --- | :---: |
| `FR-STU-01` | Chọn sản phẩm và template với ô ảnh, ô chữ định sẵn; Guest được dùng thử. | Must |
| `FR-STU-02` | Chọn ảnh JPEG/PNG/WebP; kiểm tra định dạng thật, dung lượng và kích thước ảnh theo cấu hình. Ngưỡng cụ thể **cần nhóm xác nhận**. | Must |
| `FR-STU-03` | Thay ảnh trong ô cố định và xem vùng ảnh được hiển thị; không kéo thả đối tượng tự do. | Must |
| `FR-STU-04` | Nhập tiêu đề hoặc lời nhắn, chọn font và màu chữ được phép; hỗ trợ tiếng Việt và báo khi vượt giới hạn của mẫu. | Must |
| `FR-STU-05` | Chọn màu nền từ các lựa chọn của template. | Should |
| `FR-STU-06` | Xem trước 2D đúng tỉ lệ; giữ cố định vị trí ô ảnh, ô chữ và khung mẫu. | Must |
| `FR-STU-08` | Lưu cấu hình và ảnh xem trước cho từng dòng giỏ hàng; tạo bản thiết kế độc lập khi đặt hàng. | Must |
| `FR-STU-09` | Mở lại thiết kế để sửa từ giỏ hàng. Với đơn ở trạng thái Cần chỉnh sửa, chỉ thay nội dung, không đổi biến thể, số lượng hoặc giá; lưu phiên bản mới để Admin duyệt lại. | Must |

### 5.4. Giỏ hàng và đặt hàng

| Mã | Yêu cầu | Ưu tiên |
| --- | --- | :---: |
| `FR-CART-01` | Thêm sản phẩm và thiết kế vào giỏ; mỗi thiết kế khác nhau là một dòng riêng có ảnh xem trước. | Must |
| `FR-CART-03` | Đổi số lượng, xóa mục, hiển thị tùy chọn và tổng tiền; giữ giỏ của Customer sau khi tải lại trang. | Must |
| `FR-CART-05` | Gợi ý phụ kiện hoặc sản phẩm bổ sung trong giỏ. | Must |
| `FR-ORD-01` | Nhập thông tin nhận hàng, kiểm tra nội dung đặt mua và xác nhận tạo đơn. | Must |
| `FR-ORD-02` | Server tính lại giá, giảm giá và phí vận chuyển; không chấp nhận giá do client tự sửa. | Must |
| `FR-ORD-05` | Theo dõi trạng thái xử lý đơn và thanh toán riêng; hiển thị lý do yêu cầu sửa và kết quả duyệt thiết kế. | Must |
| `FR-ORD-06` | Cho hủy trước khi đơn được duyệt; đơn đã thanh toán chuyển sang Chờ hoàn tiền, Admin xác nhận hoàn thủ công. Chính sách cụ thể **cần nhóm xác nhận**. | Must |
| `FR-ORD-07` | Gửi email xác nhận đơn và yêu cầu sửa; thông báo cũng hiển thị ở chi tiết đơn. Ghi nhận lỗi email để gửi lại. | Should |

### 5.5. Thanh toán, vận chuyển và khuyến mãi

| Mã | Yêu cầu | Ưu tiên |
| --- | --- | :---: |
| `FR-PAY-01` | Hỗ trợ COD theo điều kiện được nhóm chốt. Đề xuất: chỉ COD cho đơn bán sẵn; đơn có hàng cá nhân hóa thanh toán trước toàn bộ. **Cần xác nhận**. | Must |
| `FR-PAY-02` | Tích hợp một cổng thanh toán sandbox; xử lý thành công, thất bại, hủy và thanh toán lại khi hợp lệ. | Must |
| `FR-PAY-03` | Xác thực kết quả từ cổng ở backend; đối chiếu đơn và số tiền, không ghi nhận hai lần khi nhận thông báo lặp. | Must |
| `FR-SHP-01` | Lưu địa chỉ và phí vận chuyển; tính phí bằng quy tắc do nhóm chốt; Admin cập nhật thông tin giao hàng. | Must |
| `FR-VCH-01` | Nhập voucher; kiểm tra hiệu lực, điều kiện đơn, giới hạn lượt và đối tượng áp dụng; báo lỗi cụ thể. | Must |
| `FR-VCH-04` | Admin tạo, sửa, vô hiệu hóa voucher và chương trình giảm giá theo thời gian. Server tính đúng tổng tiền sau giảm. | Must |

### 5.6. Quản trị và giao diện

| Mã | Yêu cầu | Ưu tiên |
| --- | --- | :---: |
| `FR-ADM-01` | Quản lý danh mục, nhóm sản phẩm, sản phẩm, biến thể, phụ kiện và giá. | Must |
| `FR-ADM-04` | Xem và khóa hoặc mở tài khoản người dùng. | Must |
| `FR-ADM-05` | Xem, lọc đơn; duyệt thiết kế hoặc yêu cầu sửa với lý do bắt buộc; không cho sản xuất bản chưa duyệt. | Must |
| `FR-ADM-06` | Cập nhật trạng thái đúng thứ tự và điều kiện thanh toán; không cho bỏ qua bước duyệt thiết kế. | Must |
| `FR-ADM-07` | Dashboard có doanh thu, đơn theo trạng thái, đơn chờ giao, số khách và sản phẩm bán chạy; có bộ lọc thời gian. | Must |
| `FR-ADM-08` | Trực quan hóa thống kê bằng biểu đồ. | Should |
| `FR-ADM-09` | Tải ảnh gốc, thiết kế đã duyệt và file phục vụ in; Admin kiểm tra trước sản xuất. Quy cách file **cần nhóm xác nhận**. | Must |
| `FR-ADM-10` | Thêm, sửa, ẩn template từ layout có sẵn; giữ phiên bản mẫu đã gắn với đơn cũ. | Must |
| `FR-UX-01` | Bố cục nhất quán; có ít nhất 3 tương tác phục vụ sử dụng: cập nhật giá, xem trước thiết kế và phản hồi thêm giỏ. | Must |

**Luồng xử lý đơn cá nhân hóa đề xuất:**

1. Chờ thanh toán.
2. Chờ kiểm tra thiết kế.
3. Đã duyệt.
4. Đang sản xuất.
5. Đang giao.
6. Hoàn thành.

**Nhánh yêu cầu sửa:**

Chờ kiểm tra thiết kế → Cần chỉnh sửa → Chờ kiểm tra thiết kế.

**Quy tắc trạng thái:**

- Đơn bán sẵn không phải duyệt thiết kế.
- Trạng thái thanh toán được theo dõi riêng: Chưa thanh toán, Đã thanh toán, Chờ hoàn tiền và Đã hoàn tiền.
- Kết quả thanh toán thất bại hoặc hủy được lưu theo từng lần giao dịch.
- Nhóm cần xác nhận chính sách COD và hủy đơn trước khi chốt luồng.

## 6. Tiêu chí nghiệm thu

Phiên bản đầu đạt yêu cầu khi:

- Toàn bộ yêu cầu **Must** đã được kiểm thử.
- Luồng chọn sản phẩm → cá nhân hóa → đặt hàng → thanh toán sandbox → Admin duyệt → giao hàng hoạt động.
- Không còn lỗi chặn luồng chính.
- Các điều kiện đang **Cần xác nhận** đã được nhóm chốt trước khi nghiệm thu.

| Nhóm yêu cầu | Điều kiện đạt |
| --- | --- |
| Tài khoản và phân quyền | Từ chối đăng ký trùng, đăng nhập sai; Customer không truy cập quản trị hoặc dữ liệu của người khác; hồ sơ lưu đúng. |
| Sản phẩm | Tìm kiếm, sắp xếp và đủ 5 bộ lọc trả đúng dữ liệu mẫu; giá khớp biến thể và khuyến mãi; chỉ khách đủ điều kiện được đánh giá. |
| Studio | Guest thử được mẫu; ảnh sai bị từ chối; chữ Việt hiển thị đúng, không tràn ô; preview đúng nội dung. Lưu rồi mở lại giữ thiết kế; sửa giỏ không đổi đơn đã đặt. |
| Giỏ hàng và đơn hàng | Đổi số lượng hoặc xóa mục cập nhật đúng tiền; lỗi tạo đơn không để lại đơn dở; khách chỉ xem và sửa thiết kế thuộc quyền, đúng trạng thái. |
| Duyệt và sửa thiết kế | Yêu cầu sửa có lý do hiển thị cho khách; khách không đổi giá hoặc biến thể của đơn; bản sửa phải được duyệt lại; không sản xuất bản chưa duyệt. |
| Thanh toán | Sandbox thành công cập nhật đúng; thất bại hoặc hủy không ghi đã trả tiền; chữ ký hoặc số tiền sai bị từ chối; thông báo lặp không tạo thanh toán trùng. |
| Vận chuyển và voucher | Phí vận chuyển đúng quy tắc đã chốt; voucher không hợp lệ bị từ chối; mã hợp lệ giảm đúng tiền; lượt dùng không vượt giới hạn khi đặt đồng thời. |
| Hủy và hoàn tiền | Hủy đúng trạng thái và chính sách đã chốt; hủy đơn đã trả tiền không tự chuyển thành Đã hoàn tiền; Admin xác nhận có thông tin đối chiếu. |
| Quản trị và file in | Quản lý và ẩn template hoạt động; dữ liệu đơn cũ giữ nguyên; tải đúng phiên bản đã duyệt. Dashboard khớp bộ đơn mẫu; file in đạt quy cách nhóm đã chốt. |
| Phi chức năng | Kiểm tra quyền trên API và ảnh; giao dịch giữ dữ liệu nhất quán; giao diện sử dụng được tại 390 px và 1366 px; lỗi hiển thị dễ hiểu, không lộ thông tin hệ thống. |

**Nghiệm thu các yêu cầu Should khi được triển khai:**

- Email có đúng mã đơn và nội dung; lỗi gửi có thể thử lại.
- Wishlist, đổi hoặc khôi phục mật khẩu và chọn nền hoạt động đúng.
- Biểu đồ khớp dữ liệu thống kê.
- Các mục tiêu hiệu năng và dễ sử dụng được kiểm tra theo mục 7.

## 7. Yêu cầu phi chức năng

| Mã | Yêu cầu | Ưu tiên |
| --- | --- | :---: |
| `NFR-SEC-01` | Mật khẩu lưu dạng băm; backend kiểm tra xác thực, vai trò và quyền sở hữu đơn, thiết kế, ảnh. | Must |
| `NFR-SEC-02` | Kiểm tra dữ liệu đầu vào; phòng chống SQL injection, XSS và CSRF theo cách quản lý phiên được chọn. | Must |
| `NFR-SEC-07` | Kiểm tra loại file thực tế và giới hạn upload; từ chối file giả ảnh hoặc chứa nội dung không hỗ trợ. | Must |
| `NFR-SEC-08` | Giữ mật khẩu DB, khóa API và khóa thanh toán ngoài mã nguồn công khai; thông báo lỗi không lộ thông tin nội bộ. | Must |
| `NFR-SEC-10` | Ảnh cá nhân chỉ chủ sở hữu và Admin được phép truy cập; tên file khó đoán không thay cho kiểm tra quyền. Có quy tắc lưu và xóa ảnh do nhóm chốt. | Must |
| `NFR-RES-01` | Trang chính và Studio cơ bản sử dụng được trên desktop và mobile, không che nút hoặc tràn ngang ở 390 px và 1366 px. | Must |
| `NFR-REL-01` | Tạo đơn và dữ liệu liên quan trong một giao dịch: cùng thành công hoặc cùng hoàn tác; kiểm soát lượt voucher khi có yêu cầu đồng thời. | Must |
| `NFR-REL-02` | Tổng tiền, giảm giá và phí vận chuyển tính tại server; kết quả thanh toán lặp không gây ghi nhận trùng. | Must |
| `NFR-DATA-01` | Thiết kế của đơn là bản lưu độc lập; sửa giỏ không đổi đơn; phiên bản sửa phải phân biệt với bản đã duyệt. | Must |
| `NFR-COMP-01` | Luồng chính hoạt động trên Chrome và Edge tại thời điểm kiểm thử; ghi rõ phiên bản trình duyệt. | Must |
| `NFR-COMP-02` | Mở rộng kiểm tra tương thích trên Firefox và Safari. | Should |
| `NFR-UX-02` | Thông báo lỗi và trạng thái bằng tiếng Việt, dễ hiểu; nêu cách khắc phục khi dữ liệu không hợp lệ. | Must |
| `NFR-PERF-01` | Mục tiêu tải danh mục hoặc chi tiết sản phẩm dưới 3 giây trong ít nhất 9/10 lần đo trên môi trường demo đã ghi cấu hình. | Should |
| `NFR-PERF-02` | Mục tiêu preview cập nhật trong 500 ms sau đổi chữ hoặc màu ở ít nhất 9/10 lần thử; không tính thời gian tải ảnh ban đầu. | Should |
| `NFR-UX-01` | Mục tiêu ít nhất 4/5 người thử chưa biết thiết kế hoàn thành một mẫu và thêm giỏ trong 5 phút. | Should |
| `NFR-MNT-01` | Mã nguồn phân chia module rõ, cấu hình theo môi trường, có hướng dẫn cài đặt và chạy dự án. | Must |

## 8. Giới hạn và ràng buộc

- **Nguồn lực:** Nhóm có 8 thành viên; thời gian theo kế hoạch học phần. Ưu tiên hoàn thành các yêu cầu Must trước khi mở rộng chức năng.
- **Kỹ thuật:** Chỉ hỗ trợ sản phẩm phẳng một mặt và preview 2D theo template; Admin kiểm tra thủ công trước khi in. Không cam kết bộ công cụ thiết kế tương đương Canva.
- **Tích hợp:** Thanh toán sandbox và vận chuyển theo quy tắc đơn giản. Cổng thanh toán, dịch vụ email, hosting, ngân sách và công nghệ cụ thể cần kiểm tra khả năng triển khai.
- **Các nội dung cần nhóm xác nhận:**
  - Studio có được giảng viên chấp nhận là chức năng mở rộng hay không.
  - Số lượng template và sản phẩm demo.
  - Giới hạn ảnh, nội dung chữ và quy cách file in.
  - Chính sách COD, thanh toán trước, hủy đơn và hoàn tiền.
  - Phí vận chuyển, điều kiện voucher và thời hạn lưu ảnh.
- **Thông số đề xuất:** Các con số như 5 MB/ảnh, 2–3 template, phí vận chuyển hoặc thời hạn giữ ảnh trong phản biện AI chưa được xem là cam kết khi chưa có quyết định nhóm.
- **Yêu cầu học phần:** Đánh giá, sản phẩm liên quan, bộ lọc và Dashboard được giữ từ requirement gốc; chỉ loại bỏ khi nhóm đối chiếu yêu cầu môn và xác nhận được phép.
- **Dữ liệu và nguồn sử dụng:** Hình ảnh và thư viện phải có quyền sử dụng; không dùng dữ liệu cá nhân thật khi chưa được đồng ý. Nhóm kiểm tra nội dung AI và ghi nhận việc sử dụng trong tài liệu học phần.
