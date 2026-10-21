# Project Instructions for AI

## 1. Project context

Memoria Lab là dự án website thương mại điện tử quà tặng kỷ niệm cá nhân hóa của nhóm sinh viên môn Phát triển ứng dụng thương mại điện tử.

Sản phẩm chính gồm dải ảnh Photostrip, khung tranh Digital Scrapbook để bàn và thiệp cá nhân hóa. Website kết hợp Web Photobooth, Custom Studio, trang kỷ niệm truy cập qua QR và đặt in sản phẩm phẳng một mặt.

AI hỗ trợ phân tích, thiết kế, lập trình, giải thích, sửa lỗi, kiểm thử và tài liệu. Thành viên phụ trách phải kiểm tra, hiểu và chịu trách nhiệm về đầu ra trước khi tích hợp.

Tài liệu liên quan:

- [REQUIREMENTS.md](REQUIREMENTS.md): mục tiêu, phạm vi, vai trò, yêu cầu, nghiệm thu và các quyết định cần xác nhận.
- [PROJECT_PLAN.md](PROJECT_PLAN.md): phân công, tiến độ, công việc và rủi ro.
- [docs/business-workflow.md](docs/business-workflow.md): quy trình BW-01, dữ liệu, trạng thái và ngoại lệ.
- [docs/competitor-analysis.md](docs/competitor-analysis.md): khảo sát website và đề xuất áp dụng.
- [README.md](README.md): tổng quan dự án.

## 2. Scope

- Chỉ triển khai các chức năng đã được nhóm thống nhất trong REQUIREMENTS.md. Dùng tiêu chí nghiệm thu của từng FR/NFR làm căn cứ kiểm tra.
- Giữ tên dự án **Memoria Lab** nhất quán trong giao diện và tài liệu. Không tự đổi tên repository, đường dẫn hoặc mã yêu cầu khi chưa được đồng ý.
- Phạm vi hiện tại gồm TMĐT nền tảng; Photobooth webcam và tải ảnh dự phòng; Studio kéo thả ảnh/chữ/sticker, nền/lớp và preview 2D; lưu phiên bản thiết kế; QR/trang kỷ niệm; PNG phục vụ in; thanh toán, vận chuyển, voucher và Admin.
- Phương thức thanh toán đã chốt là **VNPay Sandbox và COD cho cả hàng bán sẵn lẫn hàng cá nhân hóa**. Không tự thêm điều kiện trả trước, đặt cọc hoặc hạn mức COD.
- Không tự đưa 3D, NFC, AI thiết kế, chỉnh sửa cộng tác thời gian thực, album nhiều trang phức tạp hoặc tự động điều khiển máy in vào phạm vi.
- Các mục Should không được tự nâng thành Must. Các đề xuất như video quá trình chụp và link tải tạm chỉ triển khai sau khi nhóm xác nhận.
- Các quyết định Qxx còn mở trong REQUIREMENTS.md phải được hỏi và chốt trước khi triển khai phần chính sách liên quan. Không tự đặt mức phí, giới hạn ảnh/chữ, thời hạn lưu, điều kiện hủy/hoàn hoặc quy tắc QR.
- Không tự chốt thư viện, framework, CSDL, dịch vụ lưu trữ hoặc gói trả phí khi lựa chọn kỹ thuật còn đang xem xét.
- Khi các tài liệu mâu thuẫn, chỉ rõ nội dung khác nhau và đề nghị nhóm xác nhận. Không âm thầm thay đổi phạm vi hoặc coi ý kiến AI là quyết định của nhóm.

## 3. Coding principles

- Giữ mã nguồn dễ đọc, dễ bảo trì và phù hợp kiến trúc, ngôn ngữ, quy ước hiện có của dự án.
- Không thay đổi kiến trúc lớn, schema dữ liệu hoặc giao tiếp API giữa các module khi chưa được nhóm đồng ý.
- Không tự ý xóa chức năng đang hoạt động, dữ liệu, test hoặc tài nguyên mà chức năng khác còn sử dụng.
- Ưu tiên thay đổi nhỏ, có thể kiểm tra; tránh sửa các phần không liên quan đến nhiệm vụ.
- Tái sử dụng thành phần và quy tắc đã có; không tạo nhiều công thức tính giá, phí hoặc voucher khác nhau ở các module.
- Backend phải tính lại giá, giảm giá và phí giao hàng; không tin số tiền do client gửi lên.
- Tách trạng thái xử lý đơn khỏi trạng thái thanh toán. COD chưa thu tiền không tự ngăn đơn cá nhân hóa hợp lệ được duyệt và sản xuất; VNPay chưa thành công hợp lệ không đủ điều kiện sản xuất.
- Lưu thiết kế đơn độc lập với thiết kế trong giỏ. Bản sửa phải có phiên bản và được duyệt lại; chỉ dùng đúng bản duyệt để xuất/tải file in.
- Phân biệt cấu hình thiết kế, preview/mockup và PNG phục vụ in. Không coi phóng to canvas là bảo đảm chất lượng in.
- Giữ tương thích dữ liệu và hợp đồng API đã thống nhất; thay đổi ảnh hưởng module khác phải có hướng cập nhật và kiểm tra tích hợp.
- Dùng thư viện/tài nguyên có nguồn và quyền sử dụng rõ ràng; không tự thêm dependency hoặc sao chép source không rõ license.

## 4. Workflow

### Trước khi sửa mã nguồn

1. Đọc nhiệm vụ/Issue, các tài liệu liên quan, mã nguồn hiện tại và hướng dẫn áp dụng cho phần cần sửa.
2. Phân tích hiện trạng, xác định mã yêu cầu, dữ liệu, quyền, module phụ thuộc và chức năng có thể bị ảnh hưởng.
3. Đề xuất phương án: mục tiêu, file dự kiến sửa, thay đổi dữ liệu/API nếu có, rủi ro và cách chạy/kiểm thử.
4. Chờ nhóm xác nhận phương án trước khi sửa. Nếu nhóm đã xác nhận rõ phương án và phạm vi trong nhiệm vụ hiện tại thì thực hiện trong giới hạn đó; hỏi lại khi phát sinh quyết định mới hoặc thay đổi vượt phạm vi đã duyệt.

### Khi thực hiện

1. Làm trên nhánh và quy trình review theo PROJECT_PLAN.md; không tự hợp nhất hoặc đẩy thay đổi lên repository nếu chưa được giao quyền thực hiện.
2. Chỉ sửa phần đã được xác nhận. Khi gặp yêu cầu chưa rõ, lỗi dữ liệu hoặc phụ thuộc ngoài dự kiến, báo lại trước khi mở rộng thay đổi.
3. Kiểm tra phù hợp với thay đổi: chức năng chính, dữ liệu biên, trường hợp lỗi, quyền truy cập và tích hợp liên quan.
4. Không vô hiệu hóa kiểm tra bảo mật hoặc bỏ qua lỗi để làm test/demo có vẻ thành công.
5. Không tự triển khai, chạy migration có thể làm mất dữ liệu, mua dịch vụ hoặc chuyển sang thanh toán thật khi chưa được nhóm cho phép.

### Sau khi sửa mã nguồn

1. Giải thích những thay đổi đã thực hiện và lý do.
2. Nêu rõ các file đã sửa, mã yêu cầu và tác động tới dữ liệu/API/module khác nếu có.
3. Hướng dẫn chạy và kiểm thử; báo kết quả đã chạy, kết quả thực tế và bằng chứng phù hợp. Không ghi test thành công khi chưa chạy hoặc chưa có kết quả.
4. Báo cáo giới hạn, lỗi còn tồn, phần chưa kiểm tra và nội dung cần nhóm quyết định.
5. Đề xuất cập nhật tài liệu/Issue liên quan nếu thay đổi làm ảnh hưởng phạm vi, workflow hoặc kế hoạch; ghi nhận hỗ trợ AI theo AI_USAGE_LOG.md.

## 5. Security

- Không đưa mật khẩu, API key, token, khóa VNPay hoặc chuỗi kết nối chứa secret vào mã nguồn, tài liệu công khai, dữ liệu demo hay thông báo lỗi.
- Sử dụng cấu hình môi trường và file cấu hình mẫu không chứa khóa thật; kiểm tra quy tắc bỏ qua file nhạy cảm trước khi commit.
- Không tự ý vô hiệu hóa xác thực, phân quyền, validation, kiểm tra chữ ký thanh toán hoặc cơ chế bảo vệ hiện có.
- Backend kiểm tra vai trò, quyền sở hữu và trạng thái tài nguyên trên từng thao tác; không chỉ ẩn nút ở giao diện.
- Không sử dụng ảnh, tài khoản, địa chỉ hoặc dữ liệu cá nhân thật khi chưa được phép. Không đưa dữ liệu nhạy cảm vào công cụ AI hoặc repository công khai.
- Kiểm tra file tải lên theo danh sách định dạng được phép, loại file thực và giới hạn đã chốt. Không tin riêng đuôi file hoặc Content-Type do client gửi; không tự mở thêm định dạng ngoài phạm vi.
- Bảo vệ ảnh nguồn, cấu hình thiết kế và file in riêng tư. UUID/tên file khó đoán không thay thế kiểm tra quyền truy cập.
- QR chỉ cung cấp nội dung được phép chia sẻ theo Q06; quyền xem trang kỷ niệm không cấp quyền đọc đơn, thanh toán hoặc ảnh nguồn riêng tư.
- Camera chỉ được dùng sau khi khách cho phép; dừng khi kết thúc sử dụng. Không ghi video hoặc thu âm ngầm; video vẫn là đề xuất chờ xác nhận.
- Xử lý văn bản theo ngữ cảnh hiển thị an toàn; phòng XSS, SQL injection, CSRF và truy cập tài nguyên trái quyền phù hợp kiến trúc được chọn.
- Xác thực kết quả VNPay ở backend, đối chiếu đơn/số tiền và chống ghi nhận lặp. Không coi trang trả về từ trình duyệt là bằng chứng đủ để ghi thanh toán thành công.
- Phân biệt giao dịch sandbox, dữ liệu demo và khoản thu thực tế. Không dùng kết quả thử để tuyên bố đã thu hoặc hoàn tiền thật.
- Quản lý file tạm, file mồ côi và thời hạn lưu/xóa theo chính sách đã duyệt; không tự xóa tài nguyên đơn đang cần xử lý. Rollback DB không tự hoàn tác file trên dịch vụ lưu trữ.
- Khi phát hiện rò rỉ dữ liệu, secret hoặc lỗ hổng, báo ngay cho người phụ trách; không tự che giấu, xóa bằng chứng hoặc công khai thông tin nhạy cảm.

## 6. Communication

- Nếu yêu cầu chưa rõ, hỏi lại trước khi triển khai; nêu cụ thể thông tin thiếu và phần công việc phụ thuộc vào câu trả lời.
- Phân biệt rõ dữ kiện đã xác nhận, nhận định kỹ thuật, phương án đề xuất và quyết định Qxx còn mở.
- Khi đề xuất thay đổi, giải thích lý do, ảnh hưởng và lựa chọn để nhóm quyết định. Không tự chuyển đề xuất thành chính sách đã chốt.
- Báo sớm nhiệm vụ bị chặn, xung đột tài liệu, nguy cơ mất dữ liệu hoặc rủi ro tiến độ; nêu đầu ra đã có và việc cần xử lý tiếp.
- Trình bày bằng tiếng Việt rõ ràng, giữ nguyên mã yêu cầu, tên file và thuật ngữ cần thiết. Nội dung giao diện phải phù hợp người sử dụng, không đưa chi tiết lập trình không cần thiết vào luồng khách hàng.
- Tài liệu nộp giảng viên viết trực tiếp theo cấu trúc yêu cầu; không thêm lời dẫn hội thoại, nhận xét về quá trình AI soạn hoặc tuyên bố kết quả chưa được kiểm chứng.
- Không tự liên hệ giảng viên, gửi thông báo cho thành viên hoặc đăng bình luận bên ngoài nếu chưa được nhóm giao thực hiện.
