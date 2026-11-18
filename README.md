# Memoria Lab — Báo cáo và tài liệu

## Nhánh và mục tiêu

Nhánh docs/project-report phụ trách báo cáo và tài liệu của website Memoria Lab.

Phụ trách hoặc điều phối theo công việc hiện có là THuy và Cường, thành viên bổ sung phần phụ trách. Lịch sử commit ghi nhận người thực hiện thực tế. Nhóm rà lại phân công khi giao nhiệm vụ mới.

## Hiện trạng

Tài liệu dự án, báo cáo, hướng dẫn và phân công.

Nhánh được tạo từ main đã tích hợp. Chức năng hiện có kế thừa từ bản nền và các commit trước ngày tổ chức nhánh. Bản khởi tạo README đánh dấu phạm vi công việc cho những thay đổi tiếp theo.

## File và phạm vi

- [README.md](README.md)
- [PROJECT_PLAN.md](PROJECT_PLAN.md)
- [REQUIREMENTS.md](REQUIREMENTS.md)
- [INTEGRATION_LOG.md](INTEGRATION_LOG.md)
- [AI_USAGE_LOG.md](AI_USAGE_LOG.md)
- [docs](docs)

Các file dùng chung cần trao đổi với chủ nhánh liên quan trước khi sửa.

## Cách chạy

Mở thư mục bằng Live Server hoặc chạy python -m http.server 8000, sau đó mở http://localhost:8000/index.html. Trang chi tiết dùng product-detail.html?id=1 đến id=8.

## Kiểm tra phần phụ trách

Đối chiếu tài liệu với mã nguồn và kiểm tra đường dẫn.

Chạy thêm chức năng liên quan trước khi tích hợp. Ghi kết quả thực tế, lỗi, người xử lý và kết quả chạy lại khi bàn giao.

## Phụ thuộc và dữ liệu

Nguồn sản phẩm dùng js/products.js. Giỏ dùng js/cart.js, js/cart-storage.js và js/cart-ui.js. Ảnh tải từ thiết bị hiện chỉ xem trước tại trình duyệt. Cấu hình và ghi chú giỏ được lưu vào memoria_cart.

## Bàn giao vào main

1. Cập nhật nhánh từ main và giữ README phạm vi của nhánh này.
2. Hoàn thành phần việc, commit và push lên docs/project-report.
3. Mở Pull Request với base là main, compare là docs/project-report.
4. Ghi thay đổi, kết quả kiểm thử và minh chứng. Review xong mới merge.
5. Khi merge, giữ README tổng quan trên main. Đưa nội dung bàn giao cần lưu vào tài liệu chức năng trong docs.

## Tài liệu

[Quy trình nhánh](docs/branch-workflow.md), [kế hoạch](PROJECT_PLAN.md), [yêu cầu](REQUIREMENTS.md), [nhật ký AI](AI_USAGE_LOG.md), [README main](https://github.com/huytran31241023748-code/Memoria-Lab/blob/main/README.md) và [website](https://huytran31241023748-code.github.io/Memoria-Lab/).
