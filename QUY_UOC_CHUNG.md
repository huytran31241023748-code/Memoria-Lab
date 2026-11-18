# QUY ƯỚC CHUNG DỰ ÁN MEMORIA LAB

## 1. Mục đích và phạm vi áp dụng

Tài liệu thống nhất cách phân công, quản lý mã nguồn, phát triển chức năng, kiểm thử và bàn giao trong dự án Memoria Lab. Các thành viên áp dụng khi làm việc với repository, website và tài liệu của nhóm.

Quy ước được cập nhật khi nhóm thống nhất thay đổi. Người chỉnh sửa cần nêu rõ nội dung và lý do trong commit hoặc Pull Request.

## 2. Tài liệu dùng chung

| Tài liệu | Nội dung quản lý |
|---|---|
| `README.md` trên `main` | Tổng quan website, chức năng đã tích hợp, cách chạy và liên kết |
| `README.md` trên từng nhánh | Mục tiêu, phạm vi, file liên quan, người phụ trách và cách kiểm tra phần việc |
| `REQUIREMENTS.md` | Yêu cầu và phạm vi chức năng của dự án |
| `PROJECT_PLAN.md` và bảng phân công | Nhiệm vụ, người phụ trách, phối hợp và tiến độ |
| `QUY_UOC_CHUNG.md` | Quy ước làm việc của cả nhóm |
| `docs/branch-workflow.md` | Hướng dẫn thao tác với nhánh, Pull Request và tích hợp |
| `INTEGRATION_LOG.md` | Nhật ký tích hợp |
| `AI_USAGE_LOG.md` | Nội dung có AI hỗ trợ và kết quả rà soát |

Khi tài liệu có nội dung khác nhau, thành viên ghi rõ điểm cần thống nhất và trao đổi với người điều phối trước khi triển khai phần phụ thuộc vào quyết định đó.

## 3. Phân công và phối hợp

Mỗi nhiệm vụ cần ghi đủ các thông tin sau.

| Nội dung | Yêu cầu |
|---|---|
| Mục tiêu | Kết quả cần đạt và chức năng liên quan |
| Người phụ trách | Một người chịu trách nhiệm chính |
| Người phối hợp | Thành viên hỗ trợ hoặc phụ trách phần phụ thuộc |
| Nhánh thực hiện | Nhánh phù hợp với nhiệm vụ |
| File dự kiến sửa | Các file chính và file dùng chung có thể bị ảnh hưởng |
| Thời hạn | Mốc bàn giao để nhóm kiểm tra |
| Tiêu chí hoàn thành | Điều kiện có thể kiểm chứng bằng thao tác hoặc đầu ra |

Người phụ trách chính theo dõi tiến độ, giải thích phần mình thực hiện và xử lý lỗi được ghi nhận trong quá trình review.

Trước khi cùng sửa một file, các thành viên trao đổi phạm vi chỉnh sửa. Với file dùng chung như `js/products.js`, `js/product-detail.js`, `js/cart-ui.js` và `css/style.css`, cần thông báo cho người phụ trách phần liên quan.

Khi chậm tiến độ hoặc gặp phụ thuộc chưa được giải quyết, thành viên cập nhật sớm phần đã làm, vấn đề đang gặp và nội dung cần hỗ trợ.

## 4. Quản lý nhánh GitHub

### 4.1. Vai trò của các nhánh

`main` là bản tích hợp của nhóm. Các thay đổi được kiểm tra trên nhánh công việc trước khi gộp vào `main`.

| Nhánh | Phạm vi chính |
|---|---|
| `feature/homepage` | Trang chủ |
| `feature/product-data` | Nguồn dữ liệu sản phẩm |
| `feature/product-catalog` | Danh sách và thẻ sản phẩm |
| `feature/search-filter-sort` | Tìm kiếm, lọc và sắp xếp |
| `feature/product-detail` | Chi tiết và thư viện ảnh sản phẩm |
| `feature/product-customization` | Tùy chọn, tải ảnh và xem trước cá nhân hóa |
| `feature/shopping-cart` | Giao diện và nghiệp vụ giỏ hàng |
| `feature/cart-storage` | Lưu trữ, kiểm tra và khôi phục giỏ hàng |
| `feature/about-contact` | Giới thiệu, liên hệ và thông tin kết nối |
| `style/responsive-accessibility` | Responsive, bàn phím và khả năng tiếp cận |
| `fix/cart-feedback` | Phản hồi và lỗi liên quan đến thao tác thêm giỏ |
| `test/integration` | Kiểm thử tích hợp |
| `docs/project-report` | Báo cáo và tài liệu dự án |
| `chore/repository-setup` | Tổ chức repository và cấu hình phát triển |
| `release/submission` | Chuẩn bị phiên bản bàn giao |

Các nhánh theo buổi được giữ để tham khảo lịch sử. Công việc mới được thực hiện theo danh mục nhánh chức năng.

### 4.2. Tạo thêm nhánh

Nhóm có thể tạo thêm nhánh khi phát sinh phần việc có mục tiêu riêng. Tên nhánh dùng chữ thường, tiếng Anh, dấu gạch ngang giữa các từ và tiền tố phù hợp.

| Tiền tố | Mục đích | Ví dụ |
|---|---|---|
| `feature/` | Phát triển chức năng | `feature/order-history` |
| `fix/` | Sửa lỗi | `fix/cart-total` |
| `style/` | Điều chỉnh giao diện | `style/mobile-navigation` |
| `test/` | Công việc kiểm thử | `test/product-customization` |
| `docs/` | Cập nhật tài liệu | `docs/user-guide` |
| `chore/` | Bảo trì và cấu hình | `chore/deployment-config` |
| `release/` | Chuẩn bị bản bàn giao | `release/submission-02` |

Thành viên kiểm tra nhánh và phần việc đang có trước khi tạo nhánh mới để tránh thực hiện trùng nhiệm vụ.

### 4.3. Cập nhật và tích hợp

1. Cập nhật bản `main` mới nhất trước khi bắt đầu nhiệm vụ.
2. Chọn nhánh phụ trách và cập nhật các thay đổi cần thiết từ `main`.
3. Thực hiện phần việc, kiểm tra và commit.
4. Push lên đúng nhánh.
5. Tạo Pull Request với **base là `main`**, **compare là nhánh công việc**.
6. Review, xử lý xung đột và chạy lại các phần bị ảnh hưởng.
7. Merge khi đáp ứng tiêu chí bàn giao.
8. Kiểm tra bản triển khai nếu thay đổi ảnh hưởng website đang chạy.

Commit trên nhánh công việc cập nhật nhánh đó. `main` nhận thay đổi thông qua thao tác merge. Các nhánh khác được cập nhật từ `main` khi thành viên tiếp tục làm việc.

## 5. README riêng cho từng nhánh

Mỗi nhánh có một `README.md` tại thư mục gốc, gồm các nội dung phù hợp với phạm vi của nhánh.

- Tên nhánh và mục tiêu.
- Người phụ trách, người phối hợp.
- Chức năng hoặc tài liệu đang thực hiện.
- File chính được chỉnh sửa và phần phụ thuộc.
- Cách chạy, cách kiểm tra.
- Kết quả đã xác minh, lỗi còn tồn tại và việc tiếp theo.
- Hướng dẫn bàn giao vào `main`.

Khi merge, người tích hợp rà soát thay đổi của `README.md` và giữ nội dung tổng quan trên `main`. Những thông tin bàn giao cần lưu lâu dài được đưa vào tài liệu tương ứng trong thư mục `docs/`.

Khi cập nhật từ `main` vào nhánh công việc, thành viên giữ README theo phạm vi của nhánh và bổ sung thông tin mới cần thiết.

## 6. Quy ước commit và Pull Request

### 6.1. Commit

Mỗi commit nên thể hiện một thay đổi có mục tiêu rõ ràng. Nội dung commit mô tả hành động và phần bị tác động.

Ví dụ các thông điệp commit có thể sử dụng.

```text
feat(cart): lưu lựa chọn hộp quà theo từng dòng giỏ
fix(product-detail): xử lý mã sản phẩm không tồn tại
style(home): căn lại danh mục trên điện thoại
docs(readme): cập nhật cách kiểm tra giỏ hàng
test(cart): bổ sung trường hợp dữ liệu lưu trữ hỏng
```

Trước khi commit, thành viên kiểm tra danh sách file để tránh đưa vào file tạm, dữ liệu cá nhân hoặc thay đổi ngoài nhiệm vụ.

Mỗi người cấu hình tên và email Git của tài khoản mình. Khi dùng công cụ hỗ trợ tạo commit, cần kiểm tra lại thông tin tác giả.

### 6.2. Pull Request

Pull Request cần trình bày ngắn gọn nhưng đủ để người khác kiểm tra.

| Nội dung | Thông tin cần ghi |
|---|---|
| Mục tiêu | Chức năng, lỗi hoặc yêu cầu được xử lý |
| Thay đổi chính | Các hành vi và file quan trọng |
| Cách kiểm tra | Các bước tái hiện hoặc thử chức năng |
| Kết quả | Điều đã chạy, kết quả thực tế và phần chưa kiểm tra |
| Minh chứng | Ảnh hoặc video khi thay đổi giao diện cần đối chiếu |
| Phụ thuộc | Nhánh, dữ liệu hoặc quyết định còn liên quan |

Người review kiểm tra phần thay đổi và chạy thử các chức năng bị ảnh hưởng. Khi có xung đột, cần đọc nội dung hai phía và giữ những thay đổi cần thiết của từng bên.

## 7. Tổ chức mã nguồn và đặt tên

| Thành phần | Quy ước |
|---|---|
| File và thư mục mới | Chữ thường, dùng dấu gạch ngang khi cần, ví dụ `product-detail.js` |
| Biến và hàm JavaScript | Tên diễn đạt ý nghĩa, dùng `camelCase` theo mã hiện có |
| Hằng số | Theo quy ước hiện có của module |
| Class CSS | Tên rõ nghĩa, tiếp tục cách đặt tên đang dùng trong thành phần |
| ID HTML | Duy nhất trong trang và thống nhất với JavaScript gọi tới |
| Ảnh | Tên mô tả sản phẩm, vị trí hoặc góc xem |
| Đường dẫn nội bộ | Dùng đường dẫn tương đối phù hợp với GitHub Pages |

Mã nguồn cần dễ đọc, có tên biến rõ nghĩa và chú thích cho phần xử lý khó hiểu. Khi sửa chức năng, ưu tiên tái sử dụng module hiện có.

Các thay đổi về tên hàm, tham số, cấu trúc dữ liệu hoặc sự kiện dùng chung cần được trao đổi với thành viên đang sử dụng phần đó. Người sửa cập nhật đồng thời các nơi gọi và hướng dẫn kiểm tra.

## 8. Dữ liệu sản phẩm và giỏ hàng

### 8.1. Sản phẩm

`js/products.js` là nguồn dữ liệu sản phẩm dùng chung cho website hiện tại.

- Mỗi sản phẩm có mã duy nhất.
- Giá lưu dưới dạng số và được định dạng khi hiển thị.
- Mã danh mục khớp bộ lọc.
- Đường dẫn ảnh hợp lệ.
- Thông số, mô tả và cấu hình cá nhân hóa được cập nhật tại nguồn dữ liệu chung.
- Trang chủ, danh sách và chi tiết đọc từ cùng nguồn.

Khi bổ sung sản phẩm, thành viên kiểm tra cả danh sách, trang chi tiết, bộ lọc và thao tác thêm giỏ.

### 8.2. Giỏ hàng

Các trang sử dụng API giỏ hàng đã thống nhất trong module hiện có.

Một dòng giỏ được xác định theo sản phẩm, lựa chọn và ghi chú. Thêm lại cùng cấu hình sẽ tăng số lượng của dòng tương ứng. Khi khác cấu hình hoặc ghi chú, giỏ giữ các dòng riêng để người dùng kiểm tra.

Thành viên phát triển giỏ cần bảo đảm các thao tác sau hoạt động nhất quán.

- Thêm, tăng, giảm và xóa đúng dòng.
- Số lượng hợp lệ và tổng tiền được tính từ dữ liệu sản phẩm.
- Biểu tượng giỏ và trang giỏ cập nhật sau thao tác.
- Dữ liệu được kiểm tra trước khi khôi phục.
- Dữ liệu cũ được xử lý phù hợp khi thay đổi cấu trúc lưu trữ.

Khi thay đổi cách tính giá hoặc thêm phụ phí, nhóm cần thống nhất quy tắc và cập nhật các nơi hiển thị, lưu trữ và kiểm tra tổng tiền.

## 9. Giao diện và nội dung

Website sử dụng nhất quán tên **Memoria Lab**, bảng màu, kiểu chữ, menu, nút và cách trình bày thông tin.

Nội dung giao diện viết rõ ràng, đúng chức năng thực tế. Thông báo cần giúp người dùng biết thao tác thành công hay thất bại và có thể làm gì tiếp theo.

Các thay đổi giao diện cần đáp ứng những điểm sau.

- Thông số cố định hiển thị dễ đọc.
- Thuộc tính có nhiều phương án có điều khiển lựa chọn phù hợp.
- Trạng thái đang tải, rỗng và lỗi có thông báo.
- Ảnh có mô tả thay thế phù hợp với vai trò.
- Người dùng có thể thao tác các chức năng chính bằng bàn phím.
- Nút và ô nhập có nhãn, trạng thái focus dễ nhận biết.
- Thông báo sau thao tác hạn chế làm thay đổi vị trí nội dung đang sử dụng.

Các chức năng còn đang phát triển được mô tả đúng trạng thái trong tài liệu và giao diện liên quan.

## 10. Quản lý hình ảnh và tài nguyên

Ảnh được lưu vào thư mục phù hợp, tối ưu dung lượng và dùng định dạng hỗ trợ tốt trên website.

Trước khi thêm tài nguyên, thành viên kiểm tra nguồn và quyền sử dụng. Ảnh có AI hỗ trợ được ghi nhận trong nhật ký và chú thích theo cách nhóm đã thống nhất.

Ảnh của sản phẩm cần phù hợp với mô tả, bố cục và quy cách đang công bố. Khi thay ảnh, kiểm tra các nơi dùng chung gồm Trang chủ, danh mục, chi tiết và giỏ hàng.

Đối với ảnh người dùng tải lên, chức năng phải nêu đúng cách ảnh được sử dụng và lưu trữ. Phiên bản hiện tại dùng ảnh tải lên để xem trước trong phiên trình duyệt.

## 11. Kiểm thử và tiêu chí hoàn thành

Người thực hiện tự kiểm tra phần việc trước khi gửi review. Người phụ trách kiểm thử tổng hợp kết quả và theo dõi việc chạy lại sau sửa lỗi.

### 11.1. Phạm vi kiểm tra

| Nhóm | Nội dung |
|---|---|
| Chức năng | Luồng chính, đầu vào hợp lệ, dữ liệu biên và lỗi |
| Tích hợp | Chức năng gọi chung dữ liệu, giỏ và lưu trữ |
| Giao diện | Bố cục tại 1366, 768 và 390 px |
| Điều hướng | Menu, nút, liên kết và tham số URL |
| Tài nguyên | Ảnh, CSS, JavaScript và đường dẫn |
| Bàn phím | Thứ tự Tab, focus và thao tác điều khiển |
| Kỹ thuật | Console, lỗi tải tài nguyên và dữ liệu lưu trữ |

### 11.2. Ghi nhận lỗi

Mỗi lỗi cần có tên ngắn gọn, trang xảy ra, các bước tái hiện, kết quả mong đợi, kết quả thực tế, người xử lý và kết quả kiểm tra lại.

Kết quả kiểm thử được ghi theo đúng thao tác đã thực hiện. Các trường hợp chưa chạy được đánh dấu rõ để tiếp tục kiểm tra.

### 11.3. Hoàn thành nhiệm vụ

Một nhiệm vụ được xác nhận hoàn thành khi đạt tiêu chí đã giao, chạy được qua giao diện thông thường, có hướng dẫn kiểm tra và đã xử lý các lỗi ảnh hưởng đến phần bàn giao. Tài liệu liên quan được cập nhật phù hợp với kết quả thực tế.

## 12. Triển khai và phiên bản nộp

Nhóm chọn một nguồn triển khai GitHub Pages thống nhất với bản tích hợp. Sau khi merge thay đổi ảnh hưởng website, người phụ trách kiểm tra kết quả triển khai và thử lại trên đường dẫn công khai.

Trước mỗi đợt nộp, nhóm cập nhật `release/submission` từ bản đã kiểm tra. README của bản nộp ghi rõ mã commit, chức năng bàn giao, cách chạy, link demo và các phần còn giới hạn.

Nếu giảng viên cần xem đúng phiên bản tại thời điểm nộp, nhóm có thể tạo thêm tag để đánh dấu mốc bàn giao.

## 13. Bảo mật và sử dụng AI

Mật khẩu, token, khóa API và thông tin đăng nhập được quản lý bằng công cụ hoặc cấu hình phù hợp. Thành viên kiểm tra file trước khi đưa lên repository công khai.

Dữ liệu cá nhân và ảnh của người khác được sử dụng khi có sự cho phép phù hợp. Quyền truy cập vào dịch vụ bên ngoài được cấp theo nhu cầu thực hiện nhiệm vụ.

AI có thể hỗ trợ phân tích, lập trình, thiết kế, kiểm thử và viết tài liệu. Thành viên sử dụng AI cần đọc lại, hiểu cách hoạt động, chạy thử và chịu trách nhiệm về nội dung bàn giao. Phần hỗ trợ đáng kể được ghi vào `AI_USAGE_LOG.md`.

Khi sử dụng AI để thao tác GitHub, thành viên cần chỉ rõ repository, nhánh, phạm vi chỉnh sửa và yêu cầu kiểm tra trước khi bàn giao.
