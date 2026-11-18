# Quy trình nhánh Memoria Lab

## Danh mục nhánh

Main là bản tích hợp và nhánh được chọn để triển khai website. Mười lăm nhánh công việc có README riêng.

| Nhánh | Phần việc | Phụ trách theo công việc hiện có |
|---|---|---|
| [feature/homepage](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/homepage) | Trang chủ | KAnh và THuy |
| [feature/product-data](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/product-data) | Dữ liệu sản phẩm | THuy |
| [feature/product-catalog](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/product-catalog) | Danh sách sản phẩm | KAnh |
| [feature/search-filter-sort](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/search-filter-sort) | Tìm kiếm, lọc và sắp xếp | Quyên |
| [feature/product-detail](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/product-detail) | Chi tiết và ảnh sản phẩm | Quang |
| [feature/product-customization](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/product-customization) | Cá nhân hóa sản phẩm | THuy điều phối, phối hợp Quang và Vanh |
| [feature/shopping-cart](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/shopping-cart) | Giỏ hàng | Vanh và Yến |
| [feature/cart-storage](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/cart-storage) | Lưu trữ giỏ hàng | VHuy |
| [feature/about-contact](https://github.com/huytran31241023748-code/Memoria-Lab/tree/feature/about-contact) | Giới thiệu và liên hệ | THuy điều phối, phối hợp Vanh và Yến |
| [style/responsive-accessibility](https://github.com/huytran31241023748-code/Memoria-Lab/tree/style/responsive-accessibility) | Responsive và khả năng tiếp cận | THuy điều phối, phối hợp Yến và Cường |
| [fix/cart-feedback](https://github.com/huytran31241023748-code/Memoria-Lab/tree/fix/cart-feedback) | Phản hồi thêm giỏ | THuy điều phối, phối hợp Vanh và Yến |
| [test/integration](https://github.com/huytran31241023748-code/Memoria-Lab/tree/test/integration) | Kiểm thử tích hợp | Cường, phối hợp các thành viên |
| [docs/project-report](https://github.com/huytran31241023748-code/Memoria-Lab/tree/docs/project-report) | Báo cáo và tài liệu | THuy và Cường, thành viên bổ sung phần phụ trách |
| [chore/repository-setup](https://github.com/huytran31241023748-code/Memoria-Lab/tree/chore/repository-setup) | Tổ chức repository | THuy |
| [release/submission](https://github.com/huytran31241023748-code/Memoria-Lab/tree/release/submission) | Bản bàn giao | THuy, Cường kiểm tra và các thành viên xác nhận |

Tên phụ trách kế thừa bảng công việc của dự án. Những phạm vi nhóm chưa giao riêng được THuy điều phối, phối hợp chủ file liên quan. Lịch sử commit ghi nhận tác giả thực tế.

## Bản nền và lịch sử

Các nhánh chức năng được tạo từ cùng bản main sau tích hợp. Chức năng hiện có nằm trong bản nền. README từng nhánh mô tả phạm vi tiếp tục phát triển và kiểm thử. Commit khởi tạo đánh dấu thời điểm tổ chức nhánh.

Hai nhánh buoi-2/HTML và buoi-3/CSS lưu lịch sử theo buổi. Công việc mới dùng danh mục nhánh chức năng trên.

## Phát triển và tích hợp

1. Cập nhật main và nhánh phụ trách trước khi nhận việc.
2. Kiểm tra tên nhánh trước khi sửa hoặc upload file.
3. Trao đổi với người phụ trách khi cùng sửa file dùng chung như js/products.js, js/product-detail.js, js/cart-ui.js hoặc css/style.css.
4. Commit rõ nội dung và push lên nhánh công việc.
5. Tạo Pull Request với base là main, compare là nhánh công việc. Ghi file thay đổi, cách thử, kết quả và minh chứng.
6. Review, giải quyết xung đột và kiểm thử phần liên quan, sau đó merge vào main.
7. Xác nhận kết quả triển khai và website trước khi báo đã hoàn thành.

Commit mới cập nhật nhánh công việc và Pull Request đang mở. Main nhận thay đổi qua merge. Các nhánh còn lại cần cập nhật từ main khi tiếp tục phát triển.

## README riêng

Mỗi nhánh có README.md ở thư mục gốc. Khi tích hợp vào main, rà phần README trong Pull Request và giữ README tổng quan của main. Nội dung bàn giao cần lưu được chuyển vào tài liệu chức năng trong docs trước khi merge. Khi cập nhật main vào nhánh công việc, giữ README phạm vi của nhánh và bổ sung trạng thái mới.

Các nhánh có đầy đủ website để chạy. Bảng phạm vi xác định những file cần sửa chính.

## Bản bàn giao

Release/submission được cập nhật từ main đã kiểm tra trước đợt nộp. Nhóm ghi mã commit và thời điểm của bản chốt trong README khi xác nhận bàn giao.

## Kiểm tra bản tích hợp trước khi đẩy GitHub

Đã chạy kiểm tra bằng Chromium trên bản làm việc. Kết quả đạt cho danh sách, tìm kiếm không dấu, danh mục từ URL, tám trang chi tiết và vùng tải ảnh, mã sản phẩm sai, thêm hai cấu hình khác nhau vào giỏ, tải lại, tăng số lượng, xóa dòng và JSON giỏ hỏng. Sáu trang chính đã được kiểm tra tràn ngang tại 390, 768 và 1366 px. Trình duyệt không ghi nhận lỗi JavaScript trong các thao tác này.

Việc xác minh các nhánh trên GitHub, nhánh mặc định và nguồn triển khai được thực hiện khi có kết nối ghi thành công.
