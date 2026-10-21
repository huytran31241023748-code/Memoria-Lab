# Project Plan

Kế hoạch phát triển website thương mại điện tử quà tặng kỷ niệm cá nhân hóa **Memoria Lab**, kết hợp Web Photobooth, Custom Studio, QR kỷ niệm và đặt in sản phẩm.

- **Thời gian dự kiến:** 19/10/2026–10/12/2026.
- **Quy mô:** 8 thành viên.
- **Hạn nộp Chương 1:** 23:00 ngày 21/10/2026.
- **Mục tiêu nộp sớm của nhóm:** trước 21:00 ngày 21/10/2026.
- **Ngày kết thúc 10/12/2026:** mốc lập kế hoạch dự kiến, điều chỉnh theo lịch học phần và tiến độ được nhóm thông qua.

## 1. Thành viên và vai trò

### 1.1. Phân công thành viên

| STT | Thành viên | Vai trò Chương 1 | Module và trách nhiệm giai đoạn phát triển dự kiến |
|---|---|---|---|
| 1 | Trần Lâm Huy | Nhóm trưởng; thống nhất đề tài, tạo repository, viết README, kiểm tra và nộp bài. | **H — QR, tích hợp và triển khai:** phát triển trang kỷ niệm và QR; quản lý repository/nhánh, review và hợp nhất, cấu hình môi trường, triển khai, tài liệu kỹ thuật và điều phối liên module. |
| 2 | Phạm Đình Quang | Phân tích khách hàng, phạm vi, chức năng, phi chức năng; viết REQUIREMENTS. | **B — Tài khoản và QA:** đăng ký/đăng nhập, hồ sơ, quyền tài khoản, lịch sử khách hàng; lập kế hoạch kiểm thử, tổng hợp kết quả và kiểm tra nghiệm thu. |
| 3 | Nguyễn Ngọc Thúy Quyên | Phụ trách chính khảo sát ba website, phối hợp Nguyễn Hoàng Kim Anh hoàn thiện phân tích. | **D — Giỏ và đơn hàng:** giỏ cá nhân hóa, checkout, bản lưu thiết kế đơn, theo dõi trạng thái, sửa thiết kế theo yêu cầu; điều phối UI/UX chung. |
| 4 | Nguyễn Hoàng Kim Anh | Khảo sát website cùng Nguyễn Ngọc Thúy Quyên, tổng hợp tiêu chí và bài học. | **C — Cửa hàng và sản phẩm:** khung giao diện, trang chủ, danh mục, tìm kiếm/lọc/sắp xếp, chi tiết, giá biến thể, liên quan/mua kèm, review/rating. |
| 5 | Vương Thị Anh | Sử dụng AI thứ nhất phân tích yêu cầu; bàn giao kết quả và tổng hợp nhật ký sử dụng AI. | **E — Photobooth và Studio:** webcam, khung/bộ lọc/chụp lại, tải ảnh, canvas, kéo thả, chữ/sticker/lớp, preview, lưu/mở thiết kế và xuất ảnh in. |
| 6 | Vũ Hà Phi Yến | Dùng AI khác phản biện; viết AGENTS và bàn giao kết quả. | **A — Nền tảng và dữ liệu:** cấu trúc backend, CSDL/migration, API contract, lưu file và quyền truy cập, bảo mật, giao dịch dữ liệu, hỗ trợ các module. |
| 7 | Vũ Trọng Huy | Viết và cập nhật quy trình nghiệp vụ. | **F — Thanh toán và vận chuyển:** VNPay Sandbox, xác thực kết quả, COD cho cả hàng cá nhân hóa, phí/thông tin giao và đối soát trạng thái với module D/G. |
| 8 | Lâm Phú Cường | Viết kế hoạch, tạo và quản lý GitHub Issues. | **G — Voucher và Admin:** voucher/khuyến mãi, quản lý sản phẩm/template/sticker/tài khoản/đơn, duyệt thiết kế, Dashboard, hướng dẫn sử dụng. |

**Trần Lâm Huy phụ trách chính QR/trang kỷ niệm.** Vũ Hà Phi Yến hỗ trợ API, dữ liệu và quyền truy cập; Vương Thị Anh hỗ trợ chèn QR trong Studio. Phân công chi tiết tại mục 3.5.

### 1.2. Nguyên tắc trách nhiệm

- Mỗi nhiệm vụ có một người phụ trách chính; người phối hợp được ghi riêng. Nhiệm vụ chưa có người chính phải được chốt phân công trước khi bắt đầu.
- Chủ module chịu trách nhiệm giao diện, API và dữ liệu nghiệp vụ thuộc module; module A cung cấp nền tảng và hỗ trợ, không thay toàn bộ phần backend của nhóm.
- Người thực hiện bàn giao mã nguồn, hướng dẫn chạy, dữ liệu kiểm thử và bằng chứng kết quả. Mỗi thành viên phải giải thích được phần mình thực hiện.
- Phạm Đình Quang tổng hợp kiểm thử; từng chủ module vẫn chịu trách nhiệm test chức năng của mình và sửa lỗi được giao.
- Trần Lâm Huy điều phối review và tích hợp; các thành viên cùng review, xử lý xung đột và kiểm tra liên module.
- Phân công kỹ thuật giai đoạn 2–6 được rà soát theo năng lực và khối lượng. Không chuyển toàn bộ việc lập trình cho một thành viên hoặc cho AI.

### 1.3. Phạm vi thực hiện

| Nhóm công việc | Nội dung |
|---|---|
| TMĐT nền tảng | Trang chủ; sản phẩm/biến thể; tìm kiếm, sắp xếp và ít nhất 5 thuộc tính lọc; tài khoản/hồ sơ; giỏ/checkout/đơn; review; sản phẩm liên quan/mua kèm. |
| Web Photobooth | Quyền camera, khung và bộ lọc, đếm ngược/chụp liên tiếp, chụp lại, tải ảnh dự phòng, chuyển ảnh sang Studio. |
| Custom Studio | Template tương thích khổ/sản phẩm; kéo thả/biến đổi ảnh và sticker; văn bản/nền/lớp; khung khóa; preview 2D; lưu/mở lại; phiên bản đơn và PNG phục vụ in. |
| QR kỷ niệm | Nội dung ảnh/lời nhắn/nhạc, trang xem trên điện thoại, QR gắn đúng thiết kế/dòng đơn, cơ chế quyền và kích hoạt sau khi Q06 được chốt. |
| Thanh toán | VNPay Sandbox có request/response, xác thực và xử lý lặp; COD áp dụng cả hàng bán sẵn và hàng cá nhân hóa. |
| Vận chuyển | Địa chỉ, phí lưu trong đơn, thông tin/trạng thái giao; API hay quy tắc phí theo Q10. |
| Voucher/Admin | Điều kiện/thời hạn/lượt dùng/đối tượng/mức giảm; quản trị tài nguyên và đơn; duyệt/yêu cầu sửa; tải file in; Dashboard có doanh thu, số đơn, bán chạy, sản phẩm chờ giao và số khách. |
| Chất lượng và triển khai | Responsive 390 px/1366 px; ít nhất 3 tương tác UX; kiểm thử chức năng/biên/lỗi/bảo mật; lịch sử Git; website và tài liệu demo truy cập được. |

Photobooth, Studio kéo thả, QR và xuất file in nằm trong phạm vi theo [REQUIREMENTS.md](REQUIREMENTS.md). Video quá trình chụp, link tải tạm và tích hợp API vận chuyển cụ thể còn chờ quyết định. Các mục Should chỉ triển khai sau khi xét khối lượng Must. Không bổ sung 3D, NFC, AI thiết kế, cộng tác thời gian thực hoặc tự động điều khiển máy in vào lịch hiện tại.

## 2. Các giai đoạn

### 2.1. Tiến độ dự kiến

| Giai đoạn | Thời gian | Nội dung | Kết quả bàn giao | Phụ trách chính |
|---|---|---|---|---|
| GĐ1 — Khảo sát và xác định yêu cầu | 19–25/10 | Chốt đề tài, khảo sát 3 website, phân tích/phản biện, phạm vi và workflow; lập bộ tài liệu và Issues. Nộp Chương 1 ngày 21/10; rà soát năng lực và khởi động kỹ thuật ngày 24–25/10. | Bộ tài liệu khởi tạo, repository Public và công việc ban đầu. | Trần Lâm Huy |
| GĐ2 — Thiết kế giao diện | 26–30/10 | Sitemap, wireframe, bộ thành phần, luồng Photobooth/Studio/QR, ERD và API contract; thử các điểm kỹ thuật khó. | Thiết kế và đặc tả dữ liệu/API được duyệt; kết quả thử camera, canvas, QR và xuất ảnh. | Nguyễn Ngọc Thúy Quyên |
| GĐ3 — Phát triển frontend | 2–15/11 | Các trang khách/Admin; Photobooth, Studio và trang kỷ niệm; dữ liệu mẫu và kết nối API đã có. | Luồng giao diện chạy được, dùng thử được các thao tác chính. | Nguyễn Hoàng Kim Anh |
| GĐ4 — Backend và CSDL | 9–29/11 | API nghiệp vụ; thiết kế/QR và phiên bản; giỏ/đơn; VNPay/COD; vận chuyển/voucher/Admin; bảo mật và file. | API và dữ liệu liên kết được; chạy nhánh VNPay và COD cùng quy trình duyệt/in. | Vũ Hà Phi Yến |
| GĐ5 — Tích hợp và kiểm thử | 23/11–4/12 | Tích hợp toàn luồng, kiểm thử biên/lỗi/quyền/đồng thời; kiểm tra QR và file in; sửa lỗi. | Hệ thống đạt tiêu chí Must, có test case/kết quả và danh sách lỗi đã xử lý. | Phạm Đình Quang |
| GĐ6 — Triển khai và hoàn thiện | 5–10/12 | Cấu hình chính thức, kiểm tra lại môi trường, hoàn thiện tài liệu/báo cáo và tập demo. | Website, repository, hướng dẫn, báo cáo và minh chứng bàn giao. | Trần Lâm Huy |

Các module triển khai song song; thiết kế dữ liệu, thử tích hợp và API mẫu bắt đầu từ GĐ2/tuần 3. Tích hợp từng phần ngay khi có đầu ra, không đợi đến tuần cuối. QR triển khai theo lịch mục tiêu tại mục 3.5; quyền truy cập, kích hoạt và vòng đời dữ liệu phụ thuộc Q06/Q07.

### 2.2. Mốc kiểm tra

| Thời điểm | Mốc | Điều kiện đạt |
|---|---|---|
| Trước 12:00 ngày 21/10 | Kiểm tra nội bộ Chương 1 | Tài liệu đúng vị trí, thống nhất tên/phạm vi, Issues có người và tiêu chí; link truy cập được. |
| Trước 21:00 ngày 21/10 | Mục tiêu nộp sớm | Gửi đúng link repository Public, kiểm tra đã nộp. |
| 23:00 ngày 21/10 | Hạn nộp Chương 1 | Hoàn tất nộp trước hạn theo thông tin nhóm đã xác nhận. |
| 25/10 | Chốt phân công kỹ thuật | Có người chính cho các module, gồm QR; thống nhất những quyết định ảnh hưởng thiết kế. |
| 30/10 | Duyệt thiết kế và thử kỹ thuật | Wireframe/ERD/API; thử camera→Studio, lưu/mở, xuất PNG và QR; có kết quả/giới hạn. |
| 8/11 | Mốc tích hợp đầu | Khung frontend/backend, xác thực/file cơ bản và Photobooth hoặc tải ảnh nối được với Studio. |
| 15/11 | Frontend chính | Trình diễn sản phẩm→thiết kế→giỏ→checkout và giao diện Admin/trang kỷ niệm; API đã có được nối sớm. |
| 22/11 | Nghiệp vụ liên module | Đơn lưu đúng snapshot; VNPay Sandbox/COD chạy bước đầu; QR gắn đúng dòng; duyệt/sửa có phiên bản. |
| 29/11 | Hoàn tất Must để kiểm thử tổng | Các module chạy trên môi trường tích hợp; đủ dữ liệu, tài khoản và đầu ra kiểm tra. |
| 4/12 | Khóa bổ sung chức năng | Must được kiểm tra, không còn lỗi chặn luồng; phạm vi còn lại và lỗi tồn có người xử lý. |
| 7/12 | Triển khai chính thức dự kiến | Website, callback VNPay, quyền ảnh, file in và link QR hoạt động trong môi trường triển khai. |
| 8/12 | Kiểm tra lại sau triển khai | Hoàn tất xử lý lỗi chặn và kiểm tra hồi quy; link/tài khoản demo dùng được. |
| 10/12 | Bàn giao cuối dự kiến | Website, tài liệu, báo cáo, minh chứng và demo hoàn tất; ngày nộp cuối theo lịch học phần được xác nhận. |

### 2.3. Các quyết định trước triển khai

Các mã Q tham chiếu [REQUIREMENTS.md](REQUIREMENTS.md), mục 6.3. Ngày trong bảng là hạn xử lý nội bộ dự kiến, không phải nội dung chính sách đã được thông qua.

| Mã | Công việc cần chốt | Điều phối chính | Phối hợp | Thời hạn dự kiến | Kết quả | Trạng thái |
|---|---|---|---|---|---|---|
| QP-01 | Bàn giao phạm vi QR/trang kỷ niệm | Trần Lâm Huy | Vũ Hà Phi Yến, Vương Thị Anh | 25/10 | Thống nhất đầu ra, phụ thuộc dữ liệu/API và giao diện giữa các thành viên. | Chưa bắt đầu |
| QP-02 | Q01 — Chức năng mở rộng trình giảng viên | Trần Lâm Huy | Phạm Đình Quang | 30/10 | Ghi nhận phản hồi và lựa chọn của nhóm. | Chưa bắt đầu |
| QP-03 | Q02 — Stack, lưu file, email, hosting/domain và ngân sách | Vũ Hà Phi Yến | Trần Lâm Huy, Vương Thị Anh, Vũ Trọng Huy | 30/10 | Danh sách công nghệ/dịch vụ, quyền sử dụng, chi phí và khả năng tích hợp. | Chưa bắt đầu |
| QP-04 | Q03/Q04/Q08 — Bộ mẫu, giới hạn ảnh/chữ/đối tượng và file in | Vương Thị Anh | Nguyễn Hoàng Kim Anh, Lâm Phú Cường, Vũ Hà Phi Yến | 30/10 | Bảng cấu hình sản phẩm/template và tiêu chuẩn xuất/thử in. | Chưa bắt đầu |
| QP-05 | Q05/Q06/Q07 — Video/link tạm, quyền/kích hoạt QR và lưu/xóa dữ liệu | Trần Lâm Huy | Vũ Hà Phi Yến, Vương Thị Anh | 30/10 | Quyết định phạm vi/chính sách, không tự chọn thời hạn. | Chưa bắt đầu |
| QP-06 | Q09 — Quy tắc voucher và giá giảm | Lâm Phú Cường | Nguyễn Ngọc Thúy Quyên, Vũ Trọng Huy | 30/10 | Công thức, điều kiện, lượt dùng/hoàn lượt và cách kiểm thử. | Chưa bắt đầu |
| QP-07 | Q10 — Phí/giao hàng và xác nhận thu COD | Vũ Trọng Huy | Nguyễn Ngọc Thúy Quyên, Lâm Phú Cường | 30/10 | Phương án API hoặc quy tắc; quy trình giao và thu COD. | Chưa bắt đầu |
| QP-08 | Q11 — Hủy/hoàn, đơn hỗn hợp, giao lỗi và trạng thái | Nguyễn Ngọc Thúy Quyên | Vũ Trọng Huy, Lâm Phú Cường, Phạm Đình Quang | 30/10 | Bảng chuyển trạng thái và các ngoại lệ được nhóm duyệt. | Chưa bắt đầu |
| QP-09 | Q12/Q13/Q14 — Thống kê, email, review và tài khoản | Phạm Đình Quang | Lâm Phú Cường, Nguyễn Hoàng Kim Anh, Vũ Hà Phi Yến | 30/10 | Định nghĩa chỉ số, sự kiện thông báo và quy tắc cần cho test. | Chưa bắt đầu |


## 3. Công việc

### 3.1. Theo dõi và bàn giao

- Trạng thái: **Chưa bắt đầu / Đang làm / Chờ kiểm tra / Hoàn thành / Bị chặn**. Người phụ trách cập nhật trên Issue và bảng kế hoạch khi nhận việc, gửi review hoặc bàn giao.
- Chỉ chuyển Hoàn thành khi có đầu ra kiểm tra được, review và kết quả test phù hợp. Task Bị chặn phải ghi nguyên nhân, phụ thuộc và người xử lý.
- Thời hạn giai đoạn 2–6 là dự kiến. Các trạng thái Chương 1 dưới đây giữ theo bảng nhóm cung cấp; chủ việc cập nhật lại theo kết quả bàn giao thực tế.
- Số Issue #1–#8 là đối chiếu theo file phân công hiện có; cần gắn link/số thực sau khi kiểm tra repository. Task mới chưa tự gán số Issue như đã tạo.
- Mỗi task lập trình tham chiếu FR/NFR liên quan, đầu ra và tiêu chí nghiệm thu trong REQUIREMENTS. Pull Request có mã task/Issue và người review khác người thực hiện.

### 3.2. Giai đoạn 1 — Khảo sát và xác định yêu cầu

| Mã | Công việc | Phụ trách chính | Phối hợp | Kết quả cần đạt | Thời hạn | Trạng thái | Issue dự kiến |
|---|---|---|---|---|---|---|---|
| T1.1 | Chốt đề tài, tạo repository, viết README | Trần Lâm Huy | Phạm Đình Quang | README giới thiệu Memoria Lab, thành viên/công nghệ/link; repository chung. | 23:59 19/10 | Đang làm | #1 |
| T1.2 | Lập kế hoạch và tạo Issues | Lâm Phú Cường | Trần Lâm Huy | PROJECT_PLAN; task có người chính, kết quả, hạn, trạng thái và tiêu chí. | 12:00 20/10 | Đang làm | #2 |
| T1.3 | Khảo sát tối thiểu 3 website | Nguyễn Ngọc Thúy Quyên | Nguyễn Hoàng Kim Anh | competitor-analysis có URL, bảng so sánh/cột đề xuất, lý do áp dụng/không áp dụng. | 12:00 20/10 | Chưa bắt đầu | #3 |
| T1.4a | AI thứ nhất phân tích yêu cầu | Vương Thị Anh | Nguyễn Ngọc Thúy Quyên | Prompt và đầu ra AI1 đã rà soát, bàn giao cho Vũ Hà Phi Yến. | 18:00 20/10 | Chưa bắt đầu | #4 |
| T1.5 | AI khác phản biện; viết AGENTS | Vũ Hà Phi Yến | Vương Thị Anh | Phản biện có lý do/đề xuất; AGENTS đủ quy tắc bối cảnh, phạm vi, code, quy trình, bảo mật và giao tiếp. | 21:00 20/10 | Chưa bắt đầu | #5 |
| T1.4b | Tổng hợp xử lý ý kiến và nhật ký AI | Vương Thị Anh | Vũ Hà Phi Yến, Trần Lâm Huy | Công cụ/prompt/kết quả/phản biện/quyết định/người kiểm tra; phân biệt phần chưa chốt. | 23:59 20/10 | Chưa bắt đầu | #4 |
| T1.6 | Hoàn thiện REQUIREMENTS | Phạm Đình Quang | Cả nhóm | Đủ mục theo mẫu; từng FR có mã/tên/mô tả/người/ưu tiên/nghiệm thu; có NFR và quyết định mở. | 23:59 20/10 | Chưa bắt đầu | #6 |
| T1.7 | Hoàn thiện workflow | Vũ Trọng Huy | Phạm Đình Quang, Vương Thị Anh | BW-01 có bước/sơ đồ, tác nhân, điều kiện, dữ liệu và ngoại lệ; khớp VNPay/COD và scope mới. | 23:59 20/10 | Chưa bắt đầu | #7 |
| T1.8 | Kiểm tra và nộp Chương 1 | Trần Lâm Huy | Lâm Phú Cường, Phạm Đình Quang | Đủ 7 file đúng vị trí, Issues có người/tiêu chí, Public kiểm tra ẩn danh, link và bài nộp. | Kiểm tra 12:00; mục tiêu nộp trước 21:00 ngày 21/10; hạn 23:00 | Chưa bắt đầu | #8 |
| T1.9 | Rà soát năng lực và phân công kỹ thuật | Lâm Phú Cường | Trần Lâm Huy, cả nhóm | Bảng năng lực/khối lượng, đề xuất phân công gồm QR để nhóm duyệt. | 24/10 | Chưa bắt đầu | Chưa gắn |
| T1.10 | Họp khởi động GĐ2 | Trần Lâm Huy | Cả nhóm | Người phụ trách, phụ thuộc và lịch thiết kế được thống nhất. | 25/10 | Chưa bắt đầu | Chưa gắn |

Chuỗi bàn giao: T1.3 → T1.4a → T1.5 → nhóm thống nhất → T1.6/T1.7 và T1.4b. T1.5 chỉ cần đầu ra AI1, không phải chờ nhật ký tổng hợp hoàn tất. Các hạn 19–20/10 giữ làm mốc kế hoạch ban đầu; việc tồn chuyển thành task cập nhật, không ghi hoàn thành hồi tố.

### 3.3. Giai đoạn 2 — Thiết kế và chuẩn bị kỹ thuật

| Mã | Công việc | Phụ trách chính | Phối hợp | Kết quả cần đạt | Thời hạn | Trạng thái |
|---|---|---|---|---|---|---|
| T2.1 | Sitemap, UI/UX và bộ thành phần | Nguyễn Ngọc Thúy Quyên | Nguyễn Hoàng Kim Anh, Vương Thị Anh | Bố cục/điều hướng thống nhất, trạng thái lỗi/tải/không dữ liệu; desktop/mobile. | 28/10 | Chưa bắt đầu |
| T2.2 | Thiết kế các trang cửa hàng | Nguyễn Hoàng Kim Anh | Nguyễn Ngọc Thúy Quyên | Trang chủ, danh mục/detail, 5 bộ lọc, giá/% giảm, review và mua kèm. | 28/10 | Chưa bắt đầu |
| T2.3 | Thiết kế giỏ/checkout/theo dõi/sửa đơn | Nguyễn Ngọc Thúy Quyên | Vũ Trọng Huy, Lâm Phú Cường | Giỏ theo thiết kế; VNPay/COD; thông báo và phiên bản sửa theo BW-01. | 29/10 | Chưa bắt đầu |
| T2.4 | Thử Photobooth và Studio | Vương Thị Anh | Vũ Hà Phi Yến, Nguyễn Hoàng Kim Anh | Camera/tải dự phòng, kéo thả/sticker/lớp, lưu/mở, PNG và QR chèn thử; ghi hạn chế. | 29/10 | Chưa bắt đầu |
| T2.5 | Thiết kế tài khoản và chuẩn bị test | Phạm Đình Quang | Vũ Hà Phi Yến | Đăng ký/login/hồ sơ, ma trận quyền; test plan và các trường hợp chính/biên/lỗi. | 28/10 | Chưa bắt đầu |
| T2.6 | Chuẩn bị payment và shipping | Vũ Trọng Huy | Nguyễn Ngọc Thúy Quyên, Vũ Hà Phi Yến | Đăng ký/kiểm tra VNPay Sandbox, request/callback, COD; phương án phí/giao Q10. | 29/10 | Chưa bắt đầu |
| T2.7 | Thiết kế Admin/voucher | Lâm Phú Cường | Vương Thị Anh, Nguyễn Ngọc Thúy Quyên | Template/sticker/sản phẩm, duyệt/sửa/in, voucher và Dashboard. | 29/10 | Chưa bắt đầu |
| T2.8 | ERD và API contract | Vũ Hà Phi Yến | Chủ module | ERD nháp, cấu trúc thiết kế/phiên bản/QR, đơn/payment/voucher; API và kiểm tra quyền. | Nháp 27/10; duyệt 29/10 | Chưa bắt đầu |
| T2.9 | Repository và môi trường dùng chung | Trần Lâm Huy | Vũ Hà Phi Yến, Nguyễn Hoàng Kim Anh | Cấu trúc, cấu hình mẫu, hướng dẫn chạy, nhánh/PR; không có secret thật. | 27/10 | Chưa bắt đầu |
| T2.10 | Kiểm tra thiết kế với FR/NFR | Phạm Đình Quang | Cả nhóm | Ma trận yêu cầu→màn hình/API/test/task; không thiếu Must; đề xuất chưa duyệt được tách. | 30/10 | Chưa bắt đầu |
| T2.11 | Duyệt thiết kế và quyết định kỹ thuật | Trần Lâm Huy | Cả nhóm | Thiết kế/stack/chính sách được thông qua; nội dung còn mở có người và hạn. | 30/10 | Chưa bắt đầu |
| T2.12 | Hoàn thiện đặc tả và bàn giao kỹ thuật QR | Trần Lâm Huy | Vũ Hà Phi Yến, Vương Thị Anh | Đặc tả trang/QR/quyền/kích hoạt/lưu; thống nhất dữ liệu/API, giao diện và đầu việc QR-01–03. | Bàn giao 25/10; đặc tả 30/10 | Chưa bắt đầu |


### 3.4. Giai đoạn 3–5 — Phát triển và tích hợp theo tuần

Mã `A-T3` là công việc module A ở tuần 3, khác mã `T6.1` là công việc thuộc giai đoạn 6. Mỗi dòng dưới đây là một task có người phụ trách chính, kết quả, hạn và trạng thái; task cần chia nhỏ thêm được tạo thành Issue con.

#### Tuần 3: 2–8/11

| Mã | Công việc và kết quả cần đạt | Phụ trách chính | Phối hợp | Thời hạn | Trạng thái |
|---|---|---|---|---|---|
| A-T3 | Khung backend, schema/migration v1, xác thực nền và API mẫu; mô hình thiết kế/đơn/QR được thống nhất. | Vũ Hà Phi Yến | Chủ module | 8/11 | Chưa bắt đầu |
| B-T3 | Giao diện đăng ký/login/logout và API xác thực đầu tiên; test trùng email/sai quyền; khung test plan. | Phạm Đình Quang | Vũ Hà Phi Yến | 8/11 | Chưa bắt đầu |
| C-T3 | Khung frontend, layout và trang chủ/danh mục; dữ liệu sản phẩm mẫu có biến thể. | Nguyễn Hoàng Kim Anh | Nguyễn Ngọc Thúy Quyên | Layout 4/11; task 8/11 | Chưa bắt đầu |
| D-T3 | Dòng giỏ theo từng thiết kế, preview và số lượng; đặc tả snapshot checkout với A/E. | Nguyễn Ngọc Thúy Quyên | Vũ Hà Phi Yến, Vương Thị Anh | 8/11 | Chưa bắt đầu |
| E-T3 | Camera/quyền/bộ lọc/đếm ngược/chụp lại hoặc tải ảnh; ảnh đi được sang canvas. | Vương Thị Anh | Vũ Hà Phi Yến, Nguyễn Hoàng Kim Anh | 8/11 | Chưa bắt đầu |
| F-T3 | Luồng VNPay request/response thử và UI lựa chọn COD; trường hợp COD cá nhân hóa không bị chặn. | Vũ Trọng Huy | Vũ Hà Phi Yến, Nguyễn Ngọc Thúy Quyên | 8/11 | Chưa bắt đầu |
| G-T3 | Khung Admin/sản phẩm/template/sticker; mô hình điều kiện voucher theo Q09. | Lâm Phú Cường | Vương Thị Anh, Vũ Hà Phi Yến | 8/11 | Chưa bắt đầu |
| H-T3 | Review và nối khung các module; môi trường tích hợp đầu, checklist chạy và lỗi phụ thuộc. | Trần Lâm Huy | Cả nhóm | 8/11 | Chưa bắt đầu |

#### Tuần 4: 9–15/11

| Mã | Công việc và kết quả cần đạt | Phụ trách chính | Phối hợp | Thời hạn | Trạng thái |
|---|---|---|---|---|---|
| A-T4 | Upload/lưu file, kiểm tra loại thực và quyền; schema phiên bản/snapshot; thử rollback và file tạm. | Vũ Hà Phi Yến | Vương Thị Anh, Nguyễn Ngọc Thúy Quyên | 15/11 | Chưa bắt đầu |
| B-T4 | Hồ sơ/địa chỉ, lịch sử xem/mua/đơn; kiểm tra vai trò và quyền API; test case theo FR. | Phạm Đình Quang | Nguyễn Ngọc Thúy Quyên, Vũ Hà Phi Yến | 15/11 | Chưa bắt đầu |
| C-T4 | Chi tiết, giá biến thể/% giảm, tìm/sắp xếp/5 bộ lọc và liên quan/mua kèm; nối API đã có. | Nguyễn Hoàng Kim Anh | Lâm Phú Cường, Vũ Hà Phi Yến | 15/11 | Chưa bắt đầu |
| D-T4 | Checkout/địa chỉ/voucher/phương thức, tổng tiền server và lưu đơn độc lập; giữ thiết kế qua login. | Nguyễn Ngọc Thúy Quyên | Vũ Trọng Huy, Vương Thị Anh, Vũ Hà Phi Yến | 15/11 | Chưa bắt đầu |
| E-T4 | Ảnh/chữ/sticker/nền/lớp, khung khóa, preview; lưu/mở cấu hình và PNG đầu tiên. | Vương Thị Anh | Vũ Hà Phi Yến, Nguyễn Hoàng Kim Anh | 15/11 | Chưa bắt đầu |
| F-T4 | Callback xác thực, mã đơn/số tiền, thất bại/hủy/lặp; API phí/giao theo lựa chọn Q10. | Vũ Trọng Huy | Nguyễn Ngọc Thúy Quyên, Vũ Hà Phi Yến | 15/11 | Chưa bắt đầu |
| G-T4 | UI/API quản trị sản phẩm/template/sticker, tài khoản và voucher; giao diện duyệt/sửa và Dashboard. | Lâm Phú Cường | Vũ Hà Phi Yến, Vương Thị Anh, Phạm Đình Quang | 15/11 | Chưa bắt đầu |
| H-T4 | Nối luồng giao diện và API, cấu hình môi trường ngoài máy cá nhân để thử QR/callback theo Q02. | Trần Lâm Huy | Vũ Hà Phi Yến, Vũ Trọng Huy | 15/11 | Chưa bắt đầu |

#### Tuần 5: 16–22/11

| Mã | Công việc và kết quả cần đạt | Phụ trách chính | Phối hợp | Thời hạn | Trạng thái |
|---|---|---|---|---|---|
| A-T5 | Giao dịch DB cho đơn/voucher, quyền ảnh, phiên bản và dọn file theo chính sách; test dữ liệu lỗi. | Vũ Hà Phi Yến | Nguyễn Ngọc Thúy Quyên, Lâm Phú Cường, Vương Thị Anh | 22/11 | Chưa bắt đầu |
| B-T5 | Thực hiện test quyền sở hữu và phiên; tập hợp lỗi luồng chính; theo dõi coverage Must. | Phạm Đình Quang | Chủ module | 22/11 | Chưa bắt đầu |
| C-T5 | Review chỉ cho đơn hoàn thành; card giá/khuyến mãi và mua kèm; hoàn thiện responsive cửa hàng. | Nguyễn Hoàng Kim Anh | Phạm Đình Quang, Nguyễn Ngọc Thúy Quyên | 22/11 | Chưa bắt đầu |
| D-T5 | Đơn/giỏ thật, snapshot, trạng thái riêng payment, vòng khách sửa→Admin duyệt lại; hủy theo Q11. | Nguyễn Ngọc Thúy Quyên | Vương Thị Anh, Lâm Phú Cường, Vũ Trọng Huy | 22/11 | Chưa bắt đầu |
| E-T5 | Lưu cấu hình/preview, mở lại và sửa có phiên bản, xuất PNG đúng khổ; gắn QR từ module kỷ niệm. | Vương Thị Anh | Vũ Hà Phi Yến, Lâm Phú Cường, Trần Lâm Huy | 22/11 | Chưa bắt đầu |
| F-T5 | Tích hợp VNPay/COD với đơn và Admin; thu COD đúng căn cứ; lỗi callback/đối soát theo Q11. | Vũ Trọng Huy | Nguyễn Ngọc Thúy Quyên, Lâm Phú Cường | 22/11 | Chưa bắt đầu |
| G-T5 | Duyệt thiết kế, lý do sửa, đúng bản tải in; voucher đồng thời, template phiên bản và số liệu Dashboard. | Lâm Phú Cường | Vũ Hà Phi Yến, Vương Thị Anh, Nguyễn Ngọc Thúy Quyên | 22/11 | Chưa bắt đầu |
| H-T5 | Tích hợp bản đầu chạy xuyên luồng, môi trường thử ổn định và khung tài liệu kỹ thuật. | Trần Lâm Huy | Cả nhóm | 22/11 | Chưa bắt đầu |

#### Tuần 6: 23–29/11

| Mã | Công việc và kết quả cần đạt | Phụ trách chính | Phối hợp | Thời hạn | Trạng thái |
|---|---|---|---|---|---|
| A-T6 | Kiểm tra validation/XSS/SQLi/CSRF phù hợp phiên, quyền trực tiếp và giới hạn file; sửa lỗi dữ liệu. | Vũ Hà Phi Yến | Phạm Đình Quang | 29/11 | Chưa bắt đầu |
| B-T6 | Chốt bộ test trước 25/11; chạy tích hợp, biên/lỗi/quyền; ghi actual/evidence và giao lỗi từng chủ module. | Phạm Đình Quang | Cả nhóm | 29/11 | Chưa bắt đầu |
| C-T6 | Hồi quy cửa hàng/review/lọc/giá; kiểm tra desktop/mobile và ít nhất 3 tương tác UX cùng D/E. | Nguyễn Hoàng Kim Anh | Nguyễn Ngọc Thúy Quyên, Vương Thị Anh | 29/11 | Chưa bắt đầu |
| D-T6 | Kiểm tra mất phiên, thay giá, giỏ khác thiết kế, snapshot/đơn hỗn hợp và sửa đúng quyền/trạng thái. | Nguyễn Ngọc Thúy Quyên | Phạm Đình Quang, Vũ Hà Phi Yến | 29/11 | Chưa bắt đầu |
| E-T6 | Kiểm tra camera dự phòng, chụp/ảnh lọc, lưu/mở, font tiếng Việt, lớp/PNG và QR ở khổ in theo Q08. | Vương Thị Anh | Lâm Phú Cường, Phạm Đình Quang, Trần Lâm Huy | 29/11 | Chưa bắt đầu |
| F-T6 | Test VNPay thành công/thất bại/hủy/sai/lặp, callback muộn; COD cá nhân hóa/giao/thu tiền theo chính sách. | Vũ Trọng Huy | Nguyễn Ngọc Thúy Quyên, Phạm Đình Quang | 29/11 | Chưa bắt đầu |
| G-T6 | Đối soát voucher, quyền Admin, duyệt/in, Dashboard với bộ đơn mẫu; viết hướng dẫn sử dụng bản đầu. | Lâm Phú Cường | Phạm Đình Quang, Nguyễn Hoàng Kim Anh | 29/11 | Chưa bắt đầu |
| H-T6 | Triển khai bản thử, kiểm tra cấu hình/callback/QR/quyền ảnh; tổng hợp minh chứng và hướng dẫn chạy. | Trần Lâm Huy | Vũ Hà Phi Yến, Vũ Trọng Huy | 29/11 | Chưa bắt đầu |

#### Tuần 7: 30/11–4/12

| Mã | Công việc và kết quả cần đạt | Phụ trách chính | Phối hợp | Thời hạn | Trạng thái |
|---|---|---|---|---|---|
| A-T7 | Sửa lỗi nền tảng/bảo mật, kiểm tra lại lỗi đã sửa, đóng băng schema và cấu hình liên quan. | Vũ Hà Phi Yến | Chủ module | 4/12 | Chưa bắt đầu |
| B-T7 | Kiểm thử hồi quy tổng, báo cáo Must đạt/chưa đạt, kết quả biên/lỗi và vấn đề còn tồn. | Phạm Đình Quang | Cả nhóm | 4/12 | Chưa bắt đầu |
| C-T7 | Sửa lỗi cửa hàng/giao diện, chuẩn hóa dữ liệu demo và ảnh minh chứng. | Nguyễn Hoàng Kim Anh | Nguyễn Ngọc Thúy Quyên | 4/12 | Chưa bắt đầu |
| D-T7 | Chạy xuyên luồng thiết kế→giỏ→đơn→duyệt/sửa→giao; sửa lỗi nhất quán và trạng thái. | Nguyễn Ngọc Thúy Quyên | Vương Thị Anh, Vũ Trọng Huy, Lâm Phú Cường | 4/12 | Chưa bắt đầu |
| E-T7 | Sửa lỗi Photobooth/Studio/PNG; chứng minh lưu/mở đúng lớp và QR trong file; ghi giới hạn còn lại. | Vương Thị Anh | Phạm Đình Quang, Trần Lâm Huy | 4/12 | Chưa bắt đầu |
| F-T7 | Hồi quy payment/shipping/COD và đối soát; chuẩn bị kịch bản demo giao dịch. | Vũ Trọng Huy | Nguyễn Ngọc Thúy Quyên, Phạm Đình Quang | 4/12 | Chưa bắt đầu |
| G-T7 | Sửa lỗi voucher/Admin/Dashboard; hoàn thiện hướng dẫn sử dụng và các đầu ra vận hành. | Lâm Phú Cường | Phạm Đình Quang, Vũ Hà Phi Yến | 4/12 | Chưa bắt đầu |
| H-T7 | Hợp nhất bản kiểm thử, khóa bổ sung chức năng, danh sách bàn giao triển khai/báo cáo. | Trần Lâm Huy | Cả nhóm | 4/12 | Chưa bắt đầu |

### 3.5. QR và trang kỷ niệm

Trần Lâm Huy chịu trách nhiệm chính các nhiệm vụ QR-01–QR-03, phối hợp hoàn thiện đặc tả tại **T2.12**. Quyền xem, kích hoạt và vòng đời dữ liệu cần được chốt theo Q06/Q07 trước khi triển khai các chính sách tương ứng.

| Mã | Công việc | Phụ trách chính | Phối hợp dự kiến | Kết quả cần đạt | Thời hạn mục tiêu | Trạng thái |
|---|---|---|---|---|---|---|
| QR-01 | Trang kỷ niệm, dữ liệu/quyền và QR đầu tiên | Trần Lâm Huy | Vũ Hà Phi Yến, Vương Thị Anh, Nguyễn Ngọc Thúy Quyên | Giao diện mobile ảnh/lời nhắn/nhạc; API/quyền; QR trỏ đúng nội dung; kích hoạt theo Q06. | Thiết kế 30/10; bản đầu 15/11 | Bị chặn: chờ chốt Q06/Q07 |
| QR-02 | Gắn QR với Studio, giỏ và bản lưu đơn | Trần Lâm Huy | Vương Thị Anh, Nguyễn Ngọc Thúy Quyên, Vũ Hà Phi Yến | QR/nội dung riêng theo dòng; không đổi đơn cũ do sửa giỏ; chèn và xuất QR đọc được. | 22/11 | Chưa bắt đầu |
| QR-03 | Kiểm tra quyền, vòng đời và triển khai trang | Trần Lâm Huy | Phạm Đình Quang, Vũ Hà Phi Yến, Vương Thị Anh | Test sai link/chưa kích hoạt/hết hạn, ảnh riêng, mobile, domain và PNG; bằng chứng trên môi trường triển khai. | Kiểm thử 29/11; hồi quy 4/12 | Chưa bắt đầu |

### 3.6. Truy vết phạm vi tới công việc

| Nhóm yêu cầu | Mã trong REQUIREMENTS | Task chính và đầu ra |
|---|---|---|
| Tài khoản/khách hàng Must | FR-AUTH-01, FR-AUTH-03, FR-CUS-02 | B-T3–B-T5; đăng nhập/hồ sơ/lịch sử và kiểm tra quyền; B-T6–B-T7 test. |
| Cửa hàng | FR-HOME-01, FR-HOME-03; FR-PRD-01, FR-PRD-02, FR-PRD-04, FR-PRD-06, FR-PRD-07, FR-PRD-09; FR-CART-05 | C-T3–C-T7, D-T4; đủ lọc/giá/giảm/review/liên quan/mua kèm. |
| Photobooth | FR-PHO-01, FR-PHO-02, FR-PHO-03, FR-PHO-04, FR-PHO-05, FR-PHO-06 | T2.4, E-T3, E-T6–E-T7; camera/quyền, khung/bộ lọc/chụp lại và tải dự phòng. |
| Studio/file in | FR-STU-01, FR-STU-02, FR-STU-03, FR-STU-04, FR-STU-05, FR-STU-06, FR-STU-07, FR-STU-08, FR-STU-09, FR-STU-10, FR-STU-11 | T2.4, E-T4–E-T7 với A/D/G; lưu/mở, giữ phiên, snapshot, phiên bản và PNG. |
| Kỷ niệm/QR | FR-MEM-01, FR-MEM-02, FR-MEM-03, FR-MEM-04 | T2.12, QR-01–QR-03; phụ thuộc Q06/Q07. |
| Giỏ/đơn/thông báo | FR-CART-01, FR-CART-03; FR-ORD-01, FR-ORD-02, FR-ORD-05, FR-ORD-06, FR-ORD-07 | D-T3–D-T7; A-T5 hỗ trợ nhất quán/lưu file; email xác nhận triển khai cùng D-T5 và cấu hình dịch vụ bởi A/H. |
| Payment/shipping | FR-PAY-01, FR-PAY-02, FR-PAY-03; FR-SHP-01 | T2.6, F-T3–F-T7; sandbox có tích hợp, COD cá nhân hóa, phí/trạng thái và thu COD. |
| Voucher/Admin | FR-VCH-01, FR-VCH-04; FR-ADM-01, FR-ADM-04, FR-ADM-05, FR-ADM-06, FR-ADM-07, FR-ADM-09, FR-ADM-10, FR-ADM-11 | G-T3–G-T7 với C/D/E/F; dữ liệu, tài nguyên, duyệt/sửa/in, thống kê và voucher. |
| Giao diện/UX | FR-UX-01; NFR-RES-01, NFR-UX-02, NFR-COMP-01 | T2.1, C/D/E-T4–T7, B-T6; hai kích thước, ba tương tác và browser/version ghi rõ. |
| Bảo mật | NFR-SEC-01, NFR-SEC-02, NFR-SEC-07, NFR-SEC-08, NFR-SEC-10, NFR-SEC-11 | T2.5/T2.8, A-T3–T7, B-T5–T7, E-T3/T6 và QR-03; quyền/file/secret/input/camera. |
| Nhất quán/vòng đời dữ liệu | NFR-REL-01, NFR-REL-02, NFR-DATA-01, NFR-DATA-02 | A-T4–A-T7, D/E/F/G-T5–T7; transaction, voucher đồng thời, callback lặp và phiên bản/file tạm. |
| Bảo trì/triển khai | NFR-MNT-01, NFR-DEP-01 | T2.9, H-T3–H-T7, T6.1–T6.7; cấu hình, hướng dẫn chạy, link/tài khoản và minh chứng. |

### 3.7. Mục Should và đề xuất chưa duyệt

| Nhóm | Mã yêu cầu | Cách đưa vào kế hoạch |
|---|---|---|
| Tài khoản mở rộng | FR-AUTH-04, FR-CUS-04 | Phạm Đình Quang ước lượng sau B-T4; chỉ thêm task/hạn khi Must đã kiểm tra không bị ảnh hưởng. |
| Thông báo và biểu đồ | FR-ORD-08, FR-ADM-08 | Nguyễn Ngọc Thúy Quyên/Lâm Phú Cường đánh giá sau D/G-T5; email bổ sung theo Q13, biểu đồ phải khớp dữ liệu. |
| Chất lượng nâng cao | NFR-COMP-02, NFR-PERF-01, NFR-PERF-02, NFR-UX-01 | Phạm Đình Quang lập kịch bản Firefox/Safari, đo tải/preview và dùng thử; thực hiện nếu còn nguồn lực sau kiểm tra Must. |
| Video/link tải tạm | FR-PHO-07, FR-MEM-05 | Chờ Q05–Q07; chưa giao thành việc bắt buộc hoặc cam kết thời hạn. |
| API giao hàng cụ thể | FR-SHP-02 | Vũ Trọng Huy kiểm tra khả năng tích hợp ở T2.6, chốt Q10 rồi mới ghi nhiệm vụ triển khai; không giả định đã có sandbox. |

Việc cân nhắc Should/đề xuất không được làm chậm các chức năng Must hoặc tự thay phạm vi đã chốt. Mọi bổ sung phải có người chính, kết quả, ước lượng và ngày được nhóm thông qua.

### 3.8. Giai đoạn 6 — Triển khai và hoàn thiện

| Mã | Công việc | Phụ trách chính | Phối hợp | Kết quả cần đạt | Thời hạn dự kiến | Trạng thái |
|---|---|---|---|---|---|---|
| T6.1 | Triển khai chính thức | Trần Lâm Huy | Vũ Hà Phi Yến, Vũ Trọng Huy | Website/backend/CSDL, callback, quyền ảnh, PNG và QR hoạt động; cấu hình không lộ secret. | 7/12 | Chưa bắt đầu |
| T6.2 | Kiểm tra lại và đóng lỗi cuối | Phạm Đình Quang | Chủ từng module | Danh sách lỗi có người sửa, kiểm tra lại và bằng chứng; không còn lỗi chặn demo/Must. | 8/12 | Chưa bắt đầu |
| T6.3 | Hướng dẫn cài đặt và sử dụng | Lâm Phú Cường | Trần Lâm Huy, Vũ Hà Phi Yến, chủ module | Hướng dẫn chạy, dữ liệu/tài khoản demo, sử dụng khách/Admin; cấu hình mẫu không có khóa thật. | 8/12 | Chưa bắt đầu |
| T6.4 | Tài liệu kỹ thuật và README | Trần Lâm Huy | Vũ Hà Phi Yến, chủ module | Kiến trúc/ERD/API/flow, nguồn code/license/API, link hoạt động, môi trường và giới hạn. | 9/12 | Chưa bắt đầu |
| T6.5 | Báo cáo và minh chứng | Nguyễn Ngọc Thúy Quyên | Phạm Đình Quang, cả nhóm | Nội dung theo quy định, bảng đóng góp chi tiết, hình/test/code/nguồn và kết quả đúng bằng chứng. | 9/12 | Chưa bắt đầu |
| T6.6 | Tập demo và giải thích code | Trần Lâm Huy | Cả nhóm | Mỗi người chạy/giải thích phần mình, Product/Cart/Checkout; thử thay đổi đơn giản và nâng cao rồi kiểm tra. | 9/12 | Chưa bắt đầu |
| T6.7 | Kiểm tra hồ sơ và bàn giao | Trần Lâm Huy | Lâm Phú Cường, Phạm Đình Quang | Đúng tên/định dạng theo LMS, link truy cập được, repository/lịch sử/đóng góp và bài nộp. | 10/12, điều chỉnh theo lịch học phần | Chưa bắt đầu |

Hướng dẫn, tài liệu kỹ thuật và khung báo cáo được viết từ tuần 5–6, không đợi tới 5/12 mới bắt đầu. Sau 4/12 ưu tiên sửa lỗi và hoàn thiện đầu ra, không tự nhận thêm chức năng.

### 3.9. Phối hợp và quản lý thay đổi

- **Nhận việc:** GitHub Issue có mã, người chính, người phối hợp, FR/NFR, đầu ra, hạn, trạng thái và tiêu chí hoàn thành. Gắn Pull Request và kết quả test khi bàn giao.
- **Nhánh:** `docs/<noi-dung>` cho tài liệu; `feature/<module>-<noi-dung>` cho phát triển; commit rõ thay đổi; dùng Pull Request và review trước hợp nhất.
- **Review:** ít nhất một thành viên khác kiểm tra; Trần Lâm Huy điều phối merge. Thay đổi do Trần Lâm Huy thực hiện vẫn có thành viên khác review.
- **Họp:** một buổi ngắn đầu tuần; chốt đầu ra, phụ thuộc, lỗi và quyết định cần xử lý. Giờ họp/thời gian phản hồi cụ thể chờ nhóm thống nhất.
- **Thay đổi:** ghi lý do, yêu cầu/task ảnh hưởng, tác động lịch/chi phí/nguồn lực và người/ngày thông qua; đồng bộ REQUIREMENTS, workflow, kế hoạch và Issues.
- **AI:** theo AGENTS; thành viên kiểm tra/chỉnh sửa và hiểu đầu ra trước tích hợp; ghi nhận sử dụng trong AI_USAGE_LOG. Không đưa secret hoặc dữ liệu cá nhân chưa được phép vào AI/repository.
- **Minh chứng:** lưu đường dẫn PR/commit, ảnh hoặc video có ngữ cảnh/ngày khi cần, test case và actual. Không dùng dữ liệu giả làm bằng chứng giao dịch thật; phân biệt sandbox và thu COD.

## 4. Rủi ro

| Mã | Rủi ro | Mức độ | Biện pháp xử lý | Phụ trách chính |
|---|---|---|---|---|
| R01 | Phạm vi Photobooth/Studio/QR và TMĐT vượt nguồn lực | Cao | Thử kỹ thuật GĐ2, phân bổ công việc, ưu tiên Must; thay đổi scope phải được nhóm duyệt, không âm thầm loại QR/Photobooth. | Trần Lâm Huy |
| R02 | Chính sách QR chưa chốt hoặc phụ thuộc tích hợp làm chậm tiến độ | Cao | Hoàn tất T2.12, chốt Q06/Q07 trước triển khai; phối hợp API, Studio và đơn hàng; cập nhật tiến độ phụ thuộc. | Trần Lâm Huy |
| R03 | Vương Thị Anh quá tải vì cả Photobooth và Studio/xuất ảnh | Cao | Kiểm tra khối lượng ở T1.9/T2.4; Vũ Hà Phi Yến hỗ trợ file/dữ liệu, Lâm Phú Cường hỗ trợ tài nguyên/Admin, Nguyễn Hoàng Kim Anh hỗ trợ giao diện; điều chỉnh người chính chỉ sau nhóm thống nhất. | Trần Lâm Huy |
| R04 | Canvas lưu/mở sai lớp/font, ảnh in mờ hoặc QR không quét được | Cao | Spike sớm, chốt Q08, kiểm tra PNG đúng khổ/tài nguyên; không dùng multiplier như bảo đảm chất lượng; file lỗi không đưa vào in. | Vương Thị Anh |
| R05 | Camera bị từ chối/lỗi hoặc thiết bị không hỗ trợ | Trung bình | Có đường tải ảnh, giữ ảnh đã có, dừng camera khi xong; test trên thiết bị/browser đã ghi. | Vương Thị Anh |
| R06 | Mất đồng bộ giỏ/đơn/thiết kế hoặc sửa nhầm phiên bản | Cao | Snapshot độc lập, phiên bản duyệt, API contract; test sửa giỏ/template không đổi đơn cũ, chỉ tải bản duyệt. | Nguyễn Ngọc Thúy Quyên |
| R07 | VNPay đăng ký chậm, callback không tới hoặc xác thực sai | Cao | Kiểm tra tích hợp từ T2.6, thử môi trường triển khai sớm; mock chỉ dùng phát triển/test, không thay minh chứng tích hợp VNPay Sandbox. | Vũ Trọng Huy |
| R08 | Nhầm COD chưa thu với VNPay chưa trả, hoặc giả ghi đã thu | Cao | Tách phương thức/trạng thái, test COD cá nhân hóa được duyệt/in; chỉ ghi thu COD theo căn cứ Q10/Q11. | Vũ Trọng Huy |
| R09 | API vận chuyển/điều kiện dịch vụ không đáp ứng | Trung bình | Xác minh tài liệu/đăng ký và Q10; phương án tính phí khác chỉ áp dụng khi được nhóm duyệt và cập nhật tài liệu. | Vũ Trọng Huy |
| R10 | Voucher vượt lượt hoặc sai tổng tiền khi đặt đồng thời | Cao | Giao dịch DB/kiểm soát đồng thời, server tính lại, quy tắc Q09 và test biên/lặp/hủy. | Lâm Phú Cường |
| R11 | QR công khai ảnh nguồn hoặc link hết hạn trước khi chấm | Cao | Chốt quyền/vòng đời, tách nội dung chia sẻ và file riêng; kiểm tra link trên môi trường triển khai; duy trì bằng chứng trong thời gian đánh giá. | Vũ Hà Phi Yến |
| R12 | Hết dung lượng hoặc file mồ côi sau lỗi/hủy thao tác | Cao | Chốt Q04/Q07, giới hạn upload, quản lý file tạm và dọn theo chính sách; kiểm tra quyền và nguồn file. | Vũ Hà Phi Yến |
| R13 | Lộ mật khẩu/khóa API/dữ liệu thật trên repository | Cao | Cấu hình môi trường, .gitignore, rà soát trước push; dùng dữ liệu được phép; khi phát hiện secret phải xử lý thu hồi/thay khóa phù hợp. | Vũ Hà Phi Yến |
| R14 | Tích hợp trễ và dồn kiểm thử cuối kỳ | Cao | API contract GĐ2, tích hợp từ tuần 3, test module liên tục, bản thử tuần 5–6; không đợi mọi module hoàn tất mới nối. | Trần Lâm Huy |
| R15 | Xung đột Git hoặc thành viên sửa cùng tài liệu không trao đổi | Trung bình | Nhánh theo task, PR/review, người chính từng tài liệu, kiểm tra khi hợp nhất. | Trần Lâm Huy |
| R16 | Thành viên vắng hoặc chênh lệch năng lực | Trung bình | Rà soát khối lượng hằng tuần; hỗ trợ theo cặp và bàn giao tài liệu; nhóm thông qua thay phân công. | Lâm Phú Cường |
| R17 | Lịch học phần thay đổi, 6 ngày cuối không đủ | Cao | Giữ 10/12 là dự kiến, cập nhật khi có lịch; chuẩn bị hosting/tài liệu sớm, khóa bổ sung ngày 4/12. | Lâm Phú Cường |
| R18 | Báo cáo/tài liệu mâu thuẫn với hệ thống | Cao | Đối chiếu FR/NFR→task→test→bằng chứng, cập nhật README/workflow và quyết định; không khẳng định hoàn thành khi chưa có kết quả. | Phạm Đình Quang |
| R19 | Nguồn ảnh/font/sticker/nhạc hoặc code không rõ quyền sử dụng | Trung bình | Ghi nguồn/license, dùng tài nguyên được phép, lưu source inventory; không lấy tài nguyên bất kỳ rồi mặc định miễn phí. | Lâm Phú Cường |
| R20 | Chuỗi AI1→AI2→yêu cầu bị dồn hạn Chương 1 | Cao | Tách T1.4a và T1.4b, bàn giao từng đầu ra, báo chặn sớm; sửa việc tồn trong cập nhật thay vì khai hoàn thành hồi tố. | Trần Lâm Huy |

