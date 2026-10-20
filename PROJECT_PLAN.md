# Project Plan – Memoria Craft

Kế hoạch thực hiện dự án **Memoria Craft** (website thương mại điện tử quà tặng kỷ niệm cá nhân hóa và Studio Customize Scrapbook), môn Phát triển ứng dụng thương mại điện tử.

- **Thời gian thực hiện:** từ 19/10/2026 đến 10/12/2026 (đã gồm Chương 1).
- **Quy mô nhóm:** 8 thành viên.
- **Trạng thái tài liệu:** phần Chương 1 đã chốt theo bảng phân công của nhóm; phần Giai đoạn 2–6 là **dự kiến**, sẽ điều chỉnh khi nhóm thống nhất vai trò kỹ thuật và khi có lịch học phần chính thức.

---

## 1. Thành viên và vai trò

### 1.1. Bảng vai trò

| STT | Thành viên | Vai trò Chương 1 (đã chốt) | Module phụ trách Giai đoạn 2–6 (đề xuất) |
|---|---|---|---|
| 1 | THuy | Nhóm trưởng / Project Coordinator | **H.** Tích hợp, quản lý repo và nhánh, triển khai, tài liệu kỹ thuật |
| 2 | Quang | Business Analyst | **B.** Tài khoản và phân quyền; QA lead (test plan, test case) |
| 3 | Quyên | Competitor Research Lead | **D.** Giỏ hàng, đặt hàng, theo dõi đơn; UI/UX chung |
| 4 | Kim Anh | Competitor Research | **C.** Danh mục, tìm kiếm/lọc, chi tiết sản phẩm, đánh giá |
| 5 | Vanh | AI Requirement Analysis | **E.** Studio Scrapbook (Fabric.js, lưu thiết kế, tải ảnh) |
| 6 | Yến | AI Review / Project AI Guidelines | **A.** Nền tảng: schema MySQL, khung API, bảo mật, xử lý tải ảnh |
| 7 | VHuy | Business Workflow Analyst | **F.** Thanh toán (VNPay Sandbox) và vận chuyển |
| 8 | Cường | Project Planning / GitHub Issues | **G.** Voucher và Admin; quản lý GitHub Issues; hướng dẫn cài đặt |

### 1.2. Trách nhiệm chính

| Thành viên | Trách nhiệm |
|---|---|
| THuy | Điều phối nhóm, thống nhất đề tài, quản lý tiến độ, viết README, tạo GitHub repository, kiểm tra và nộp bài; ở các giai đoạn sau review code, merge nhánh, tích hợp và triển khai |
| Quang | Phân tích khách hàng, phạm vi, vai trò người dùng, yêu cầu chức năng và phi chức năng (REQUIREMENTS.md); ở các giai đoạn sau xây dựng và thực hiện kế hoạch kiểm thử |
| Quyên | Chịu trách nhiệm chính khảo sát và tổng hợp phân tích ≥3 website tương tự; ở các giai đoạn sau thiết kế UI/UX và phát triển luồng mua hàng |
| Kim Anh | Khảo sát website tham khảo cùng Quyên; ở các giai đoạn sau xây dựng khung giao diện và các trang sản phẩm |
| Vanh | Dùng AI thứ nhất phân tích yêu cầu, tổng hợp nhật ký sử dụng hai AI; ở các giai đoạn sau phát triển Studio Scrapbook |
| Yến | Dùng AI thứ hai phản biện, xây dựng quy tắc AI (AGENTS.md); ở các giai đoạn sau xây dựng nền tảng backend, CSDL và bảo mật |
| VHuy | Mô tả quy trình nghiệp vụ chính (business-workflow.md); ở các giai đoạn sau phát triển thanh toán và vận chuyển |
| Cường | Lập kế hoạch dự án, tạo và quản lý GitHub Issues; ở các giai đoạn sau phát triển voucher, Admin và tài liệu hướng dẫn |

### 1.3. Nguyên tắc phân công

- Mỗi nhiệm vụ có một người chịu trách nhiệm chính.
- Mỗi thành viên sở hữu một module từ giao diện đến API và dữ liệu, có sản phẩm cụ thể để giải thích khi vấn đáp.
- Không giao toàn bộ việc lập trình cho một thành viên hoặc cho AI. Các thành viên hỗ trợ nhau khi tích hợp và kiểm thử.
- Việc phân công cho Giai đoạn 2–6 sẽ được nhóm xem xét lại dựa trên năng lực thực tế của từng người.

### 1.4. Phạm vi phiên bản đầu tiên (MVP) và nâng cao

- **MVP (bắt buộc):** module A, B, C, D; module E ở mức cơ bản (chọn template, tải ảnh, thêm chữ/sticker, xem trước 2D, lưu thiết kế); module F dùng sandbox hoặc mô phỏng; module G ở mức quản lý sản phẩm, đơn hàng và voucher đơn giản.
- **Nâng cao (chưa đưa vào kế hoạch thời gian, chỉ cân nhắc nếu MVP hoàn thành sớm):** Photo Booth, Digital Scrapbook và mã QR, Live Preview 3D, NFC, hỗ trợ thiết kế bằng AI, xuất file in.
- Danh sách chức năng chi tiết và mức ưu tiên chính thức nằm trong `REQUIREMENTS.md`. Nếu có khác biệt, `REQUIREMENTS.md` là tài liệu chuẩn.

---

## 2. Các giai đoạn

| Giai đoạn | Thời gian | Nội dung thực hiện | Kết quả | Phụ trách chính |
|---|---|---|---|---|
| **GĐ1 – Khảo sát và xác định yêu cầu** | Tuần 1 (19–25/10) | Chọn đề tài, khảo sát website tương tự, phân tích yêu cầu bằng AI và phản biện, xác định vai trò, quy trình nghiệp vụ, tạo GitHub | Bộ tài liệu khởi tạo và GitHub repository | THuy |
| **GĐ2 – Thiết kế giao diện** | Tuần 2 (26–30/10) | Sitemap, wireframe các trang và Studio, ERD, API contract | Wireframe, ERD, danh sách API đã thống nhất | Quyên |
| **GĐ3 – Phát triển frontend** | Tuần 3–4 (2–15/11) | Xây dựng giao diện và tương tác, bước đầu Studio Scrapbook, dùng dữ liệu mẫu | Giao diện có thể demo với dữ liệu mẫu | Kim Anh, Vanh |
| **GĐ4 – Backend và cơ sở dữ liệu** | Tuần 4–6 (9–29/11) | Xây dựng API, CSDL, nghiệp vụ tài khoản, sản phẩm, thiết kế, đơn hàng, thanh toán, vận chuyển, khuyến mãi | Backend và CSDL chạy được các nghiệp vụ chính | Yến, VHuy |
| **GĐ5 – Tích hợp và kiểm thử** | Tuần 6–7 (23/11–4/12) | Nối frontend–backend, kiểm thử chức năng, lỗi, bảo mật, giao dịch | Hệ thống chạy trọn quy trình mua hàng | Quang |
| **GĐ6 – Triển khai và hoàn thiện** | 5–10/12 | Triển khai, sửa lỗi cuối, tài liệu kỹ thuật, báo cáo, demo | Website chạy được, mã nguồn, tài liệu, báo cáo | THuy |

Các giai đoạn chồng nhau ở tuần 4 và tuần 6 vì mỗi thành viên làm cả frontend và backend của module mình.

### Mốc quan trọng

| Ngày | Mốc | Điều kiện đạt |
|---|---|---|
| 21/10/2026, 21:00 | Nộp Chương 1 | Đủ 7 file, GitHub Issues, repo Public |
| 30/10/2026 | Chốt thiết kế | Wireframe, ERD, API contract được nhóm duyệt |
| 15/11/2026 | Frontend chạy với dữ liệu mẫu | Các trang MVP có thể demo |
| 29/11/2026 | Backend MVP hoàn tất | API các module A–G chạy được |
| 4/12/2026 | Chốt chức năng (feature freeze) | Chạy trọn luồng Studio → giỏ hàng → voucher → thanh toán → đơn hàng |
| 8/12/2026 | Triển khai xong | Website chạy được trên môi trường thật |
| 10/12/2026 | Kết thúc dự án | Báo cáo, tài liệu và demo hoàn tất, nộp bài |

---

## 3. Công việc

Trạng thái sử dụng: *Chưa bắt đầu / Đang làm / Hoàn thành / Bị chặn*.

### 3.1. Giai đoạn 1 – Khảo sát và xác định yêu cầu

| Mã | Công việc | Người phụ trách | Kết quả cần đạt | Thời hạn | Trạng thái | Issue |
|---|---|---|---|---|---|---|
| T1.1 | Chốt đề tài, tạo repo, viết README | THuy | README.md + GitHub repository | 23:59 19/10 | Đang làm | #1 |
| T1.2 | Lập kế hoạch dự án, tạo GitHub Issues | Cường | PROJECT_PLAN.md + Issues | 12:00 20/10 | Đang làm | #2 |
| T1.3 | Khảo sát ≥3 website tương tự, bảng so sánh | Quyên (chính), Kim Anh | docs/competitor-analysis.md | 12:00 20/10 | Chưa bắt đầu | #3 |
| T1.4 | Dùng AI thứ nhất phân tích yêu cầu, tổng hợp nhật ký AI | Vanh | AI_USAGE_LOG.md | 23:59 20/10 | Chưa bắt đầu | #4 |
| T1.5 | Dùng AI thứ hai phản biện, viết quy tắc AI | Yến | AGENTS.md + kết quả phản biện | 23:59 20/10 | Chưa bắt đầu | #5 |
| T1.6 | Viết yêu cầu dự án | Quang | REQUIREMENTS.md | 23:59 20/10 | Chưa bắt đầu | #6 |
| T1.7 | Mô tả quy trình nghiệp vụ chính | VHuy | docs/business-workflow.md | 23:59 20/10 | Chưa bắt đầu | #7 |
| T1.8 | Kiểm tra 7 file, Issues, quyền Public, nộp bài | THuy | Link GitHub hoàn chỉnh | 12:00 21/10 (nộp trước 21:00) | Chưa bắt đầu | #8 |
| T1.9 | Khảo sát năng lực nhóm, rà soát lại người phụ trách module | Cường, THuy | Bảng năng lực, phân công module đã duyệt | 24/10 | Chưa bắt đầu | – |
| T1.10 | Họp khởi động Giai đoạn 2 | Cả nhóm | Biên bản ngắn | 25/10 | Chưa bắt đầu | – |

### 3.2. Giai đoạn 2 – Thiết kế giao diện và chuẩn bị kỹ thuật (26–30/10)

| Mã | Công việc | Người phụ trách | Kết quả cần đạt | Thời hạn | Trạng thái |
|---|---|---|---|---|---|
| T2.1 | Sitemap, luồng người dùng, design system (màu, font, component) | Quyên | Tài liệu và bản thiết kế chung | 28/10 | Chưa bắt đầu |
| T2.2 | Wireframe trang chủ, danh mục, tìm kiếm/lọc, chi tiết sản phẩm | Kim Anh | Wireframe module C | 28/10 | Chưa bắt đầu |
| T2.3 | Wireframe giỏ hàng, đặt hàng, theo dõi đơn | Quyên | Wireframe module D | 29/10 | Chưa bắt đầu |
| T2.4 | Wireframe Studio Scrapbook, thử nhanh Fabric.js | Vanh | Wireframe + bản thử nghiệm | 29/10 | Chưa bắt đầu |
| T2.5 | Wireframe đăng ký, đăng nhập, hồ sơ | Quang | Wireframe module B | 28/10 | Chưa bắt đầu |
| T2.6 | Wireframe thanh toán, địa chỉ, phí vận chuyển; đăng ký VNPay Sandbox | VHuy | Wireframe module F, tài khoản sandbox | 29/10 | Chưa bắt đầu |
| T2.7 | Wireframe Admin và nhập voucher | Cường | Wireframe module G | 29/10 | Chưa bắt đầu |
| T2.8 | ERD toàn hệ thống và API contract | Yến (chính), VHuy | ERD, danh sách endpoint | ERD nháp 27/10, chốt 29/10 | Chưa bắt đầu |
| T2.9 | Cấu trúc repo, quy ước nhánh và commit, môi trường chạy | THuy | Cấu trúc thư mục và hướng dẫn | 27/10 | Chưa bắt đầu |
| T2.10 | Rà soát wireframe với REQUIREMENTS.md | Quang | Danh sách chỗ lệch cần sửa | 30/10 | Chưa bắt đầu |
| T2.11 | Họp duyệt và chốt thiết kế | Cả nhóm | Thiết kế được duyệt | 30/10 | Chưa bắt đầu |

### 3.3. Giai đoạn 3–5 – Frontend, backend và tích hợp theo module (2/11–4/12)

Mã công việc có dạng `<Module>-<Tuần>`, ví dụ `A-T3`. Thời hạn của mỗi mục là Chủ nhật của tuần đó (riêng T7 là thứ Sáu 4/12), trừ khi ghi khác. Trạng thái ban đầu của tất cả: Chưa bắt đầu.

| Module – Người | T3 (2–8/11) | T4 (9–15/11) | T5 (16–22/11) | T6 (23–29/11) | T7 (30/11–4/12) |
|---|---|---|---|---|---|
| **A – Yến** | Khung backend, API mẫu, schema v1 (hạn 8/11) | Schema hoàn chỉnh, migration, xử lý tải ảnh | Hỗ trợ API các module, rà soát bảo mật | Kiểm tra bảo mật (phân quyền, tải ảnh, dữ liệu nhập) | Sửa lỗi, hỗ trợ tích hợp |
| **B – Quang** | Giao diện đăng ký, đăng nhập; khung test plan | Giao diện hồ sơ; API xác thực | API phân quyền; viết test case | Test plan và test case hoàn chỉnh (hạn 25/11) | Kiểm thử toàn hệ thống |
| **C – Kim Anh** | Khung React và layout (hạn 4/11); trang chủ, danh mục | Tìm kiếm, lọc, chi tiết sản phẩm | API sản phẩm, danh mục, đánh giá | Nối API thật, responsive | Kiểm thử và sửa lỗi module C |
| **D – Quyên** | Giỏ hàng | Form đặt hàng, theo dõi đơn | API giỏ hàng, đơn hàng | Nối API, trạng thái đơn | Tích hợp luồng mua hàng |
| **E – Vanh** | Canvas, template, tải ảnh | Chữ, sticker, xem trước 2D, lưu cấu hình | API lưu thiết kế, tải ảnh (cùng Yến) | Gắn thiết kế vào giỏ và đơn | Tích hợp Studio, sửa lỗi |
| **F – VHuy** | Giao diện thanh toán, địa chỉ | Giao diện kết quả giao dịch, phí ship | VNPay Sandbox, quy tắc phí ship | Trạng thái thanh toán, cập nhật đơn | Kiểm thử thanh toán thành công/thất bại/hủy |
| **G – Cường** | Giao diện Admin: sản phẩm, đơn | Giao diện voucher, thống kê | API voucher (hiệu lực, tính lại tổng tiền) | API Admin, thống kê | Ghi lỗi qua Issues, theo dõi sửa lỗi |
| **H – THuy** | Review PR, merge hằng tuần | Review PR, merge | Chuẩn bị môi trường hosting | Merge nhánh tích hợp, triển khai bản thử | Tích hợp nhánh chính, chốt chức năng 4/12 |

Tuần 7 (30/11–4/12): nối các module 30/11–2/12, kiểm thử và ghi lỗi 1–3/12, sửa lỗi nặng và khóa chức năng 3–4/12.

### 3.4. Giai đoạn 6 – Triển khai và hoàn thiện (5–10/12)

Giai đoạn này chỉ có 6 ngày nên tài liệu (hướng dẫn cài đặt, khung báo cáo) được viết dần từ tuần 6–7 và chỉ hoàn thiện ở giai đoạn này.

| Mã | Công việc | Người phụ trách | Kết quả cần đạt | Thời hạn | Trạng thái |
|---|---|---|---|---|---|
| T6.1 | Triển khai chính thức và kiểm tra hoạt động | THuy, Yến | Website chạy trên môi trường thật | 7/12 | Chưa bắt đầu |
| T6.2 | Sửa lỗi cuối theo module | Chủ từng module | Danh sách lỗi nặng đã xử lý | 8/12 | Chưa bắt đầu |
| T6.3 | Hướng dẫn cài đặt và sử dụng | Cường | Tài liệu hướng dẫn | 8/12 | Chưa bắt đầu |
| T6.4 | Tài liệu kỹ thuật, cập nhật README | THuy | Tài liệu và README mới | 9/12 | Chưa bắt đầu |
| T6.5 | Báo cáo đồ án, minh chứng | Quyên, Quang | Báo cáo hoàn chỉnh | 9/12 | Chưa bắt đầu |
| T6.6 | Tập demo, mỗi người giải thích phần mình | Cả nhóm | Buổi tập demo | 9/12 | Chưa bắt đầu |
| T6.7 | Rà soát lần cuối và nộp theo yêu cầu giảng viên | THuy | Bản nộp cuối | 10/12 | Chưa bắt đầu |

---

## 4. Rủi ro

| STT | Rủi ro | Mức độ | Biện pháp giảm thiểu | Phụ trách |
|---|---|---|---|---|
| 1 | Phạm vi quá rộng (Studio, thanh toán, vận chuyển, voucher, admin) so với thời gian thực hiện | Cao | Chốt MVP từ đầu; chức năng nâng cao chỉ cân nhắc sau khi MVP ổn định; chốt chức năng ngày 4/12 | THuy, Quang |
| 2 | Chuỗi phụ thuộc và dồn hạn ngày 20/10 (Vanh → Yến → Quang, VHuy cùng 23:59) | Cao | Đặt mốc trung gian: Vanh nộp bản nháp trước 18:00, Yến trước 21:00; báo cáo sớm khi bị chặn | THuy |
| 3 | Studio Scrapbook (Fabric.js) khó hoặc chậm | Cao | Thử nghiệm sớm ở tuần 2; làm bản cơ bản trước; báo sớm để nhóm hỗ trợ khi cần | Vanh |
| 4 | Dịch vụ ngoài (VNPay Sandbox, API vận chuyển) trục trặc hoặc đăng ký chậm | Trung bình | Chuẩn bị phương án mô phỏng thanh toán; tính phí ship theo quy tắc cố định | VHuy |
| 5 | Lộ khóa API, mật khẩu hoặc ảnh cá nhân thật trên repo Public | Cao | Dùng `.env` và `.gitignore`; dùng ảnh mẫu; kiểm tra trước khi push | Yến, THuy |
| 6 | Xung đột Git khi nhiều người sửa chung | Trung bình | Mỗi module một nhánh; Pull Request; review chéo; THuy merge | THuy |
| 7 | Chênh lệch năng lực lập trình giữa các thành viên | Trung bình | Khảo sát năng lực, điều chỉnh module, làm việc theo cặp | Cường, THuy |
| 8 | Tích hợp frontend–backend trễ | Trung bình | API contract chốt tuần 2; API mẫu từ tuần 3; tích hợp từng module từ tuần 6 | Yến, THuy |
| 9 | Chưa chốt hosting và nơi lưu ảnh tải lên | Trung bình | Chốt trước 15/11, ưu tiên phương án miễn phí | THuy, Yến |
| 10 | Thành viên bận hoặc vắng | Trung bình | Họp ngắn mỗi tuần, phát hiện sớm và phân việc lại khi cần | THuy |
| 11 | Giai đoạn triển khai và hoàn thiện quá ngắn (6 ngày) | Cao | Chuẩn bị môi trường và triển khai bản thử từ tuần 6; viết tài liệu dần từ tuần 6–7; không nhận thêm chức năng sau 4/12 | THuy |
| 12 | Lịch học phần hoặc yêu cầu của giảng viên thay đổi | Trung bình | Kế hoạch tính theo tuần, cập nhật tài liệu khi có thay đổi | Cường |
| 13 | Tài liệu mâu thuẫn nhau (REQUIREMENTS, business-workflow, PROJECT_PLAN) | Thấp | REQUIREMENTS.md là tài liệu chuẩn; đối chiếu trước khi nộp; chỉ cập nhật sau khi nhóm đồng ý | Cường, Quang |

---

## 5. Quy ước phối hợp

- **Nhận việc:** qua GitHub Issues; mỗi Issue có người phụ trách và tiêu chí hoàn thành. Cập nhật trạng thái trong Issue khi bắt đầu và khi xong.
- **Nhánh:** `docs/<tên-tài-liệu>` cho tài liệu; `feature/<module>-<mô-tả>` cho tính năng; không commit trực tiếp lên nhánh chính khi đã bắt đầu lập trình.
- **Commit:** thông điệp ngắn, rõ, ví dụ `Add competitor website analysis`.
- **Review:** mỗi Pull Request có ít nhất một thành viên khác kiểm tra; THuy merge vào nhánh chính.
- **Họp:** mỗi tuần một buổi ngắn đầu tuần để cập nhật tiến độ và rủi ro (giờ họp sẽ thống nhất sau).
- **Sử dụng AI:** theo `AGENTS.md`; ghi lại trong `AI_USAGE_LOG.md`; không đưa mật khẩu, khóa API hay dữ liệu cá nhân vào công cụ AI hoặc repo.

---

## 6. Giả định và nội dung chờ xác nhận

- Dự án bắt đầu 19/10/2026 và kết thúc 10/12/2026; ngày cụ thể từ Giai đoạn 2 trở đi là **dự kiến**, sẽ cập nhật khi có lịch học phần.
- Vai trò và module Giai đoạn 2–6 là **đề xuất**, chờ nhóm trưởng và các thành viên duyệt.
- Hạn nộp Chương 1 lấy theo đề của giảng viên: **trước 21:00 ngày 21/10/2026**.
- Công nghệ, hosting, nơi lưu ảnh và phương án vận chuyển còn đang nghiên cứu, sẽ chốt trong Giai đoạn 2.
- Danh sách chức năng và mức ưu tiên chính thức theo `REQUIREMENTS.md`; quy trình nghiệp vụ theo `docs/business-workflow.md`.
