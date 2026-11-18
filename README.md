# Memoria Lab

Website quà tặng kỷ niệm cá nhân hóa của nhóm sinh viên môn Phát triển ứng dụng thương mại điện tử.

## Main và sản phẩm

Main là bản tích hợp của website, gồm Trang chủ, danh mục, chi tiết và cá nhân hóa tại trình duyệt, giỏ hàng, giới thiệu và liên hệ.

- [Website demo](https://huytran31241023748-code.github.io/Memoria-Lab/)
- [Repository](https://github.com/huytran31241023748-code/Memoria-Lab)
- [Bảng phân công](https://docs.google.com/spreadsheets/d/1eJ1J088PnPgRg2XK-QkzYYVgHOOGAT-d/edit?gid=1128739764#gid=1128739764)

## Chức năng đã có

- Tám sản phẩm dùng chung dữ liệu và có ba ảnh minh họa mỗi mẫu.
- Tìm kiếm không dấu, lọc danh mục, sắp xếp và đọc điều kiện URL.
- Chi tiết theo id, lựa chọn, ghi chú, số lượng và ảnh toàn màn hình.
- Tải ảnh từ thiết bị để xem thử bố cục cá nhân hóa.
- Giỏ phân biệt các cấu hình, hỗ trợ tăng giảm, xóa, tính tổng và khôi phục khi tải lại.
- Thông báo thêm giỏ, giới thiệu, liên hệ và biểu tượng tab.

Ảnh tải từ thiết bị hiện phục vụ xem trước trong phiên trình duyệt. Các lựa chọn và ghi chú được lưu trong giỏ. Mã QR trên hình ảnh sản phẩm là minh họa. Thanh toán và backend thuộc kế hoạch phát triển tiếp theo. Một số quy cách và kênh liên hệ dùng thông tin nhóm lựa chọn cho bản học tập.

## Nhánh và phân công

| Nhánh | Phần việc | Phụ trách hoặc điều phối |
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

Đọc [quy trình nhánh](docs/branch-workflow.md) để bàn giao, tạo Pull Request và xử lý README riêng. Các nhánh công việc có bản đầy đủ của website và README theo phạm vi.

## Công nghệ và cách chạy

HTML5, CSS3, JavaScript thuần, localStorage và GitHub Pages.

Mở thư mục bằng Live Server hoặc chạy python -m http.server 8000 tại thư mục gốc, sau đó truy cập http://localhost:8000/index.html.

## Cấu trúc

| Đường dẫn | Nội dung |
|---|---|
| index.html | Trang chủ |
| products.html | Danh mục |
| product-detail.html | Chi tiết theo id |
| cart.html | Giỏ hàng |
| about.html, contact.html | Giới thiệu và liên hệ |
| js/ | Dữ liệu, render, tìm kiếm, chi tiết và giỏ |
| css/ | Giao diện dùng chung và từng trang |
| images/ | Ảnh và biểu tượng |
| docs/ | Tài liệu, quy trình nhánh và hồ sơ |

## Kiểm thử

Thử danh sách tám sản phẩm, tìm ky niem, lọc kết hợp và sắp xếp. Mở chi tiết id=1 đến id=8, id=999 và thiếu id. Thử tải ảnh, đổi góc ảnh, cấu hình, ghi chú, thêm giỏ, thêm trùng cấu hình, sửa số lượng, xóa, tải lại và JSON localStorage hỏng. Kiểm tra Console và bố cục 1366, 768, 390 px.

## Khắc phục thường gặp

- Ảnh hoặc CSS cũ, tải lại bằng Ctrl + F5.
- Ảnh xem trước mất khi tải lại, chọn lại ảnh từ thiết bị cho phiên mới.
- Xung đột README khi tích hợp, áp dụng hướng dẫn tại docs/branch-workflow.md.

## Tài liệu và AI hỗ trợ

[Phân công](PROJECT_PLAN.md), [yêu cầu](REQUIREMENTS.md), [nhật ký tích hợp](INTEGRATION_LOG.md), [nhật ký AI](AI_USAGE_LOG.md) và [README lịch sử](docs/previous-project-readme.md).

AI hỗ trợ đối chiếu, tích hợp, tạo ảnh minh họa, kiểm thử và tài liệu. Thành viên chịu trách nhiệm rà soát phần bàn giao.
