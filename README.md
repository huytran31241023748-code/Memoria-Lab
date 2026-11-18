# Memoria Lab — Cá nhân hóa sản phẩm

## Nhánh và mục tiêu

Nhánh feature/product-customization phụ trách cá nhân hóa sản phẩm của website Memoria Lab.

Phụ trách hoặc điều phối theo công việc hiện có là THuy điều phối, phối hợp Quang và Vanh. Lịch sử commit ghi nhận người thực hiện thực tế. Nhóm rà lại phân công khi giao nhiệm vụ mới.

## Hiện trạng

Tùy chọn và ghi chú chuyển vào giỏ. Tải ảnh xem thử theo bố cục từng mẫu.

Nhánh được tạo từ main đã tích hợp. Chức năng hiện có kế thừa từ bản nền và các commit trước ngày tổ chức nhánh. Bản khởi tạo README đánh dấu phạm vi công việc cho những thay đổi tiếp theo.

## File và phạm vi

- [js/product-detail.js](js/product-detail.js)
- [js/products.js](js/products.js)
- [css/product-detail.css](css/product-detail.css)

Các file dùng chung cần trao đổi với chủ nhánh liên quan trước khi sửa.

## Cách chạy

Mở thư mục bằng Live Server hoặc chạy python -m http.server 8000, sau đó mở http://localhost:8000/index.html. Trang chi tiết dùng product-detail.html?id=1 đến id=8.

## Kiểm tra phần phụ trách

Tải ảnh, thay ảnh, gỡ ảnh và kiểm tra lựa chọn, ghi chú trong giỏ.

Chạy thêm chức năng liên quan trước khi tích hợp. Ghi kết quả thực tế, lỗi, người xử lý và kết quả chạy lại khi bàn giao.

## Phụ thuộc và dữ liệu

Nguồn sản phẩm dùng js/products.js. Giỏ dùng js/cart.js, js/cart-storage.js và js/cart-ui.js. Ảnh tải từ thiết bị hiện chỉ xem trước tại trình duyệt. Cấu hình và ghi chú giỏ được lưu vào memoria_cart.

## Bàn giao vào main

1. Cập nhật nhánh từ main và giữ README phạm vi của nhánh này.
2. Hoàn thành phần việc, commit và push lên feature/product-customization.
3. Mở Pull Request với base là main, compare là feature/product-customization.
4. Ghi thay đổi, kết quả kiểm thử và minh chứng. Review xong mới merge.
5. Khi merge, giữ README tổng quan trên main. Đưa nội dung bàn giao cần lưu vào tài liệu chức năng trong docs.

## Tài liệu

[Quy trình nhánh](docs/branch-workflow.md), [kế hoạch](PROJECT_PLAN.md), [yêu cầu](REQUIREMENTS.md), [nhật ký AI](AI_USAGE_LOG.md), [README main](https://github.com/huytran31241023748-code/Memoria-Lab/blob/main/README.md) và [website](https://huytran31241023748-code.github.io/Memoria-Lab/).
