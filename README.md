# Memoria Lab — Phản hồi thêm giỏ

## Nhánh và mục tiêu

Nhánh fix/cart-feedback phụ trách phản hồi thêm giỏ của website Memoria Lab.

Phụ trách hoặc điều phối theo công việc hiện có là THuy điều phối, phối hợp Vanh và Yến. Lịch sử commit ghi nhận người thực hiện thực tế. Nhóm rà lại phân công khi giao nhiệm vụ mới.

## Hiện trạng

Thông báo nổi có tên, số lượng, nút xem giỏ và nút đóng.

Nhánh được tạo từ main đã tích hợp. Chức năng hiện có kế thừa từ bản nền và các commit trước ngày tổ chức nhánh. Bản khởi tạo README đánh dấu phạm vi công việc cho những thay đổi tiếp theo.

## File và phạm vi

- [js/cart-ui.js](js/cart-ui.js)
- [js/render-products.js](js/render-products.js)
- [js/product-detail.js](js/product-detail.js)
- [css/style.css](css/style.css)

Các file dùng chung cần trao đổi với chủ nhánh liên quan trước khi sửa.

## Cách chạy

Mở thư mục bằng Live Server hoặc chạy python -m http.server 8000, sau đó mở http://localhost:8000/index.html. Trang chi tiết dùng product-detail.html?id=1 đến id=8.

## Kiểm tra phần phụ trách

Thêm hàng từ ba trang, thêm nhiều lần, đóng thông báo và kiểm tra vị trí cuộn.

Chạy thêm chức năng liên quan trước khi tích hợp. Ghi kết quả thực tế, lỗi, người xử lý và kết quả chạy lại khi bàn giao.

## Phụ thuộc và dữ liệu

Nguồn sản phẩm dùng js/products.js. Giỏ dùng js/cart.js, js/cart-storage.js và js/cart-ui.js. Ảnh tải từ thiết bị hiện chỉ xem trước tại trình duyệt. Cấu hình và ghi chú giỏ được lưu vào memoria_cart.

## Bàn giao vào main

1. Cập nhật nhánh từ main và giữ README phạm vi của nhánh này.
2. Hoàn thành phần việc, commit và push lên fix/cart-feedback.
3. Mở Pull Request với base là main, compare là fix/cart-feedback.
4. Ghi thay đổi, kết quả kiểm thử và minh chứng. Review xong mới merge.
5. Khi merge, giữ README tổng quan trên main. Đưa nội dung bàn giao cần lưu vào tài liệu chức năng trong docs.

## Tài liệu

[Quy trình nhánh](docs/branch-workflow.md), [kế hoạch](PROJECT_PLAN.md), [yêu cầu](REQUIREMENTS.md), [nhật ký AI](AI_USAGE_LOG.md), [README main](https://github.com/huytran31241023748-code/Memoria-Lab/blob/main/README.md) và [website](https://huytran31241023748-code.github.io/Memoria-Lab/).
