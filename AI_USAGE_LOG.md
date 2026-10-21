# AI USAGE LOG – MEMORIA CRAFT
**Dự án: Memoria Lab**

## Lần sử dụng 1

### Công cụ

Claude (Anthropic). Người phụ trách sử dụng: **Vương Thị Anh**.

### Mục đích

Phân tích yêu cầu từ mô tả đề tài, khách hàng mục tiêu, vấn đề kinh doanh và kết quả khảo sát Canva, Mixbook, Photocare; đề xuất phạm vi, vai trò, chức năng, quy trình, chất lượng và rủi ro.

### Prompt

Tên MEMORIA CRAFT trong prompt là tên tại lần sử dụng ban đầu; tên hiện tại của dự án là Memoria Lab.

```text
Bạn là chuyên gia phân tích nghiệp vụ cho dự án thương mại điện tử.

Thông tin dự án:
- Tên dự án: MEMORIA CRAFT – Nền tảng TMĐT quà tặng kỷ niệm cá nhân hóa và Digital Scrapbook tương tác
- Sản phẩm hoặc dịch vụ: Scrapbook, khung tranh, thiệp, hộp quà cá nhân hóa; khách tự thiết kế (chọn template, tải ảnh, nhập lời nhắn, thêm sticker) và xem trước 2D trước khi đặt mua
- Khách hàng mục tiêu: Học sinh, sinh viên, cặp đôi, nhóm bạn, người thích quà sáng tạo (16–26 tuổi), không rành phần mềm thiết kế
- Vấn đề kinh doanh: (1) khó hình dung thành phẩm; (2) gửi ảnh/yêu cầu qua tin nhắn thiếu trực quan; (3) mẫu cố định hạn chế sáng tạo; (4) quà vật lý và kỷ niệm số bị tách rời
- Website tham khảo: https://www.canva.com/ ; https://www.mixbook.com/ ; https://www.photocare.vn/
- Thời gian thực hiện: Các giai đoạn trải dài suốt học phần, chưa xác định số tuần cụ thể (cần nhóm xác nhận)
- Quy mô nhóm: 8 thành viên (kỹ năng lập trình từng người chưa được đánh giá)

Hãy đề xuất:
1. Mục tiêu và phạm vi dự án.
2. Các nhóm người dùng và quyền hạn.
3. Danh sách chức năng cần có.
4. Quy trình nghiệp vụ chính.
5. Yêu cầu phi chức năng.
6. Các chức năng nên hoàn thành ở phiên bản đầu tiên.
7. Các chức năng nâng cao có thể bổ sung.
8. Rủi ro khi triển khai và cách giảm thiểu.

Phân biệt rõ:
- Yêu cầu bắt buộc.
- Yêu cầu có thể phát triển sau.
- Đề xuất cần nhóm xác minh thêm.

Không giả định nhóm có đủ thời gian hoặc năng lực để triển khai tất cả chức năng. Hãy giải thích cơ sở của từng đề xuất.
```

### Kết quả đề xuất

| Nhóm nội dung | Tóm tắt đầu ra ban đầu của AI thứ nhất |
|---|---|
| 1. Mục tiêu và phạm vi | Khách tự cá nhân hóa, xem trước và đặt mua; đơn vị bán nhận dữ liệu thiết kế. Ưu tiên TMĐT và Studio theo mẫu cố định. |
| 2. Người dùng và quyền | Guest xem sản phẩm; Customer dùng Studio/mua/theo dõi đơn; Admin quản lý/duyệt; nhân viên xử lý đơn là đề xuất cần xem xét. |
| 3. Chức năng | 19 yêu cầu FR-01–FR-19, phân biệt bắt buộc, phát triển sau và cần xác minh. Kéo thả cần thử; review/liên quan, email, Photobooth, QR và xuất file tự động được để sau. |
| 4. Quy trình nghiệp vụ | Chọn sản phẩm/biến thể/template → tải ảnh/nhập chữ → preview → giỏ → checkout/payment → Admin duyệt/sửa → sản xuất/giao. |
| 5. Phi chức năng | 11 NFR về responsive, kiểm tra dữ liệu/file, phân quyền, giá tại server, ảnh riêng, secret, transaction, test, source và lưu ảnh. |
| 6. Phiên bản đầu | FR-01–FR-10 và Studio mẫu cơ bản/kiểm tra ảnh; một số khả năng thiết kế chưa cam kết. |
| 7. Nâng cao | Kéo thả, nháp/sửa lại, review/email, API giao hàng, Photobooth, QR, 3D/NFC/AI và file in tự động. |
| 8. Rủi ro | 10 rủi ro về độ phức tạp, scope, sai thiết kế, ảnh kém, gian lận giá, riêng tư, tích hợp, năng lực, tài liệu và thời gian. |

### Phản biện

Rà soát của nhóm trước khi xử lý phản biện:

| Nội dung | Đánh giá | Lý do |
|---|---|---|
| Luồng bán hàng, giá tại server, giỏ theo thiết kế và Admin duyệt | Giữ hướng đề xuất. | Phù hợp nghiệp vụ; cần làm rõ dữ liệu và nghiệm thu. |
| Chỉ Customer được dùng Studio | Cần điều chỉnh. | Guest cần thử trải nghiệm trước đăng nhập; phải giữ thiết kế qua bước xác thực. |
| Studio cố định, hoãn kéo thả/Photobooth/QR/file in | Cần đối chiếu brainstorm. | Bỏ nhiều thành phần khác biệt của đề tài, không thể chỉ lấy scope thu hẹp làm quyết định cuối. |
| Review/liên quan, lọc và Dashboard | Cần đối chiếu quy định môn. | Không loại yêu cầu bắt buộc chỉ vì chưa cần cho luồng tối giản; phải đủ năm thuộc tính lọc và các chỉ số. |
| Gộp nháp dài hạn với sửa từ giỏ | Cần tách. | Khác mục đích/vòng đời; mở lại thiết kế không tự phụ thuộc việc chọn Fabric.js. |
| MB/pixel, phí, thời hạn, số mẫu và công nghệ | Cần xác nhận. | Không coi ví dụ của AI là cấu hình/chính sách đã duyệt; chi phí và khả năng triển khai cần kiểm tra. |

Gemini được sử dụng ở lần 2 để phản biện bản yêu cầu và bảng rà soát này.

### Quyết định của nhóm

- Giữ luồng TMĐT, giỏ có thiết kế riêng, kiểm tra ảnh, duyệt/sửa và dữ liệu nhất quán.
- Phạm vi được cập nhật theo brainstorm: Photobooth, Studio kéo thả/sticker/lớp, QR/trang kỷ niệm và PNG phục vụ in; tên thống nhất Memoria Lab.
- Giữ review/liên quan, năm thuộc tính lọc và Dashboard theo quy định. Không lấy phân loại phát triển sau của AI1 để bỏ các yêu cầu này.
- Giữ các thông số/chính sách chưa chốt ở trạng thái cần xác nhận; quyết định xử lý từng ý kiến được tổng hợp tại lần 2.

### Người kiểm tra

**Trần Lâm Huy.**

## Lần sử dụng 2

### Công cụ

Gemini, model **Argon 4.0**, mức tư duy trung bình. Người phụ trách sử dụng: **Vũ Hà Phi Yến**.

### Mục đích

Phản biện độc lập bản yêu cầu và bảng rà soát của AI1 theo sáu khía cạnh; chỉ ra vấn đề, lý do và cách điều chỉnh, không mặc định AI1 đúng.

### Prompt

```text
Bạn là người phản biện độc lập cho một dự án website thương mại điện tử
do nhóm sinh viên thực hiện trong một học phần.

Tôi sẽ cung cấp:
1. Mô tả đề tài.
2. Vấn đề kinh doanh và khách hàng mục tiêu.
3. Kết quả khảo sát ba website.
4. Danh sách yêu cầu do một công cụ AI khác đề xuất.

Hãy phản biện các yêu cầu theo những khía cạnh:
- Có thực sự giải quyết vấn đề kinh doanh không?
- Có yêu cầu nào trùng lặp hoặc không cần thiết không?
- Có chức năng nào vượt quá phạm vi của nhóm không?
- Có thiếu chức năng cơ bản hoặc quy trình nghiệp vụ nào không?
- Có rủi ro về dữ liệu, bảo mật hoặc quyền riêng tư không?
- Có yêu cầu nào chưa đủ rõ để lập trình và kiểm thử không?

Với mỗi vấn đề, hãy nêu lý do và đề xuất điều chỉnh.

Không mặc định rằng phương án của công cụ AI trước là đúng.
Không tự ý thay đổi toàn bộ đề tài.
```

### Kết quả đề xuất

| Khía cạnh | Vấn đề và lý do AI thứ hai nêu | Đề xuất của AI thứ hai |
|---|---|---|
| 1. Giải quyết vấn đề kinh doanh | Đăng nhập trước thử Studio gây thêm bước cản trở; không có file ghép hoàn chỉnh thì khâu sản xuất chưa khép kín. | Guest thử trước; lưu ảnh phẳng cùng cấu hình/tài nguyên để Admin duyệt và sử dụng. |
| 2. Trùng lặp/không cần thiết | Quy tắc ảnh lặp FR/NFR; nháp dài hạn gộp sửa giỏ; quy trình Git/test lẫn yêu cầu chất lượng. | Dùng chung quy tắc ảnh, tách nháp/sửa; đưa quy trình nhóm sang kế hoạch. |
| 3. Vượt phạm vi | Sticker/kéo thả và lưu ảnh riêng làm tăng độ phức tạp; scope lớn so với nguồn lực. | Thu hẹp Studio thành form/ô cố định, hoãn tính năng nặng; đề xuất tên file UUID thay một phần bảo vệ. |
| 4. Thiếu nghiệp vụ | COD cá nhân hóa có rủi ro từ chối nhận; vòng sửa/hủy/hoàn và quản lý template chưa rõ. | Trả trước hàng custom; lý do sửa bắt buộc, khóa biến thể, duyệt lại; hủy trước duyệt/hoàn thủ công; bổ sung template Admin. |
| 5. Dữ liệu/bảo mật/riêng tư | Ảnh tạm/mồ côi, file giả ảnh, lời nhắn hiển thị không an toàn và tham chiếu chung thiết kế có thể gây lỗi. | Preview phía client, lưu khi cần; kiểm tra file và đầu vào; snapshot thiết kế đơn độc lập. |
| 6. Độ rõ để lập trình/test | Chưa có cấu trúc mẫu, giới hạn ảnh/chữ, công thức ship/voucher và định nghĩa thống kê. | Đưa ví dụ số mẫu/ký tự, 5 MB, 800×800 px, phí/trần/lượt và bộ Dashboard để nhóm xem xét. |

### Phản biện

- Giải pháp thu hẹp thành ô cố định và hoãn Photobooth/QR không phù hợp scope đã chọn từ brainstorm; cần quản lý khối lượng bằng thử kỹ thuật, phân công và tích hợp sớm.
- UUID/tên khó đoán không thay quyền truy cập ảnh riêng; quyền xem nội dung QR không được mở toàn bộ ảnh nguồn/đơn.
- Không bỏ toàn bộ NFR về source: khả năng bảo trì và cấu hình vẫn là yêu cầu chất lượng; lịch Git/test thuộc PROJECT_PLAN.
- Không chấp nhận đề xuất trả trước hàng custom vì nhóm đã chọn COD cho cả hàng cá nhân hóa. Giữ nhận diện rủi ro nhưng không tự thêm hạn mức/đặt cọc.
- Không dùng bộ Dashboard rút gọn hoặc loại review để bỏ yêu cầu học phần. Không dùng VietQR tĩnh thay tích hợp VNPay Sandbox đã chốt.
- Các số tiền, MB/pixel, số mẫu, ngày và thời gian triển khai là ví dụ/ước lượng chưa được duyệt. Kiểm tra loại file phải nhiều lớp; không coi magic bytes là biện pháp duy nhất.

### Quyết định của nhóm

| Nội dung | AI thứ nhất đề xuất | AI thứ hai phản biện | Quyết định của nhóm |
|---|---|---|---|
| Guest thử thiết kế | Chỉ Customer dùng Studio trong phân quyền ban đầu. | Cho Guest thử trước. | **Điều chỉnh:** Guest dùng Photobooth/Studio; đăng nhập khi lưu giỏ/đặt hàng, giữ thiết kế trong phiên hợp lệ. |
| Studio/sticker/lớp | Mẫu cố định; kéo thả cần thử. | Bỏ sticker/kéo thả, dùng form cố định. | **Không áp dụng thu hẹp:** giữ kéo thả ảnh/chữ/sticker/nền/lớp theo brainstorm; chọn công cụ sau thử kỹ thuật. |
| Photobooth và QR | Phát triển sau. | Đồng tình ưu tiên thu hẹp. | **Giữ trong phạm vi:** webcam/tải dự phòng và trang kỷ niệm/QR; quyền/kích hoạt/lưu còn chờ xác nhận. |
| File in | Xuất tự động gộp với mở rộng sau. | Cần ảnh phẳng cho Admin. | **Giữ PNG phục vụ in**, đúng phiên bản đã duyệt; preview/mockup không thay PNG; quy cách chờ Q08. |
| Sửa giỏ và nháp dài hạn | Gộp một yêu cầu. | Tách hai mục đích. | **Tách:** giữ mở/sửa từ giỏ và đơn cần sửa; không triển khai kho nháp dài hạn độc lập ở bản đầu. |
| Kiểm tra ảnh | FR/NFR có quy tắc gần nhau. | Gộp nguồn cấu hình. | **Điều chỉnh:** hành vi ở FR, bảo vệ/kiểm tra server ở NFR, cùng dùng Q04. |
| VNPay/COD | COD và một cổng sandbox, điều kiện còn mở. | Khuyên trả trước hàng cá nhân hóa. | **Đã chốt:** VNPay Sandbox và COD cho cả hàng bán sẵn/cá nhân hóa; COD hợp lệ không bắt thu trước để duyệt/in. |
| Vòng yêu cầu sửa | Chưa khép kín. | Lý do, khóa biến thể và duyệt lại. | **Giữ:** lý do hiện trong đơn; chỉ sửa nội dung đúng quyền/trạng thái, không đổi biến thể/số lượng/giá; bản mới duyệt lại. |
| Hủy/hoàn và giao lỗi | Chưa có chính sách đủ rõ. | Hủy trước duyệt, hoàn thủ công. | **Chờ Q10/Q11:** chưa tự chốt cutoff, thời hạn, hoàn tiền hoặc giao lại. |
| Template/khung/sticker Admin | Thiếu chi tiết trong danh sách. | Bổ sung template. | **Giữ và bổ sung tài nguyên/phiên bản:** thay mẫu mới không đổi dữ liệu đơn cũ. |
| Ảnh riêng/QR chia sẻ | Chủ đơn/Admin xem ảnh. | Đề xuất hạ bằng UUID/kiểm API đơn. | **Không hạ bảo vệ:** file riêng phải kiểm quyền; QR chỉ cho xem nội dung được phép; cơ chế cụ thể còn Q06/Q07. |
| File tạm/snapshot | Transaction và định danh riêng. | Dọn file mồ côi, tách snapshot. | **Giữ:** thiết kế đơn độc lập, sửa có phiên bản; file ngoài DB cần vòng đời riêng theo Q07. |
| Review/liên quan và lọc | Review để sau, bộ lọc ít thuộc tính. | Không bổ sung đầy đủ ở phản biện. | **Giữ theo đề:** review/liên quan và tối thiểu năm thuộc tính lọc đã chọn. |
| Dashboard | Thống kê chung. | Bộ chỉ số rút gọn. | **Bổ sung đủ:** doanh thu, số đơn/trạng thái, bán chạy, sản phẩm chờ giao, số khách; Q12 định nghĩa cách tính và dữ liệu sandbox/COD. |
| Email | Phát triển sau. | Nâng ưu tiên thông báo. | **Email xác nhận đơn Must** theo brainstorm; email sự kiện Should; yêu cầu sửa vẫn có trong tài khoản. |
| NFR/source/test | Có source/test/commit. | Chuyển sang kế hoạch. | **Áp dụng một phần:** giữ bảo trì/cấu hình/hướng dẫn trong NFR; quy trình, lịch và người test/commit ở PLAN. |
| Giá trị ví dụ | Có ngưỡng đề xuất, nhiều phần mở. | Đưa MB/pixel, phí ship/voucher, số mẫu và chữ cụ thể. | **Chưa chốt:** không tự dùng 5/10 MB, 800×800 px, phí/ngưỡng giảm, số mẫu/ký tự hoặc thời hạn thành chính sách. |
| Vai trò nhân viên riêng; 3D/NFC/AI | Cân nhắc hoặc để sau. | Ưu tiên giảm độ phức tạp. | **Ngoài bản đầu:** Admin xử lý theo quyền; không bổ sung chức năng này vào lịch hiện tại. |

### Người kiểm tra

**Trần Lâm Huy.**

## Lần sử dụng 3

### Công cụ

Codex trong cuộc trò chuyện hỗ trợ chỉnh sửa tài liệu.

### Mục đích

Rà soát đầu ra hai AI, đồng bộ tên/phạm vi Memoria Lab và gộp nội dung cần nộp vào AI_USAGE_LOG.md theo mẫu.

### Prompt

Prompt chính về rà soát:

```text
phần này kiểm tra xem đã làm đúng theo cấu trúc file .md chưa thay đổi tên đề tài,
và nhận xét có cần sửa thêm gì ko trước khi bắt đầu sửa tôi ok mới bắt đầu sửa,
giờ nhận xét thoi
```

Sau nhận xét, nhóm đồng ý sửa. Yêu cầu bổ sung về cách bàn giao:

```text
tôi chỉ nộp file ai_usa thoi nên hãy cho vào 1 nội dung thôi đừng tạo file riêng
phần nội dung nào ko cần thiết hay dư thừa ở file này cũng ko cần bỏ vào
và rà soát xem nội dung dư thừa có thuộc phần nào trong cấu trúc github giáo viên hướng dẫn ko
```

### Kết quả đề xuất

Một file có đủ công cụ, mục đích, prompt, tóm tắt kết quả, phản biện, quyết định và người kiểm tra cho từng lần. Kết quả AI1 giữ đủ tám nhóm; AI2 giữ sáu khía cạnh và bảng bốn cột. Không phụ thuộc file phân tích/phản biện hoặc bản lịch sử riêng.

### Phản biện

Không chép lại toàn bộ FR/NFR, kế hoạch hay workflow vào nhật ký. Không sửa lịch sử để biến nội dung cập nhật thành đầu ra Claude/Gemini ban đầu; chỉ tóm tắt ý kiến cũ và ghi rõ quyết định hiện tại. Các mục chưa chốt tiếp tục để mở, không ghi kết quả test hay số liệu chưa có.

### Quyết định của nhóm

Gộp thành AI_USAGE_LOG.md; bỏ yêu cầu nộp các file phụ. Tên hiện tại là Memoria Lab, người kiểm tra kết quả AI1/AI2 là Trần Lâm Huy. Nội dung yêu cầu chi tiết, lịch/phân công, quy tắc AI, khảo sát và quy trình chính được giữ trong các file tương ứng của bộ hồ sơ.

### Người kiểm tra

**Trần Lâm Huy — chờ rà soát bản tổng hợp này trước khi nộp.**

Nội dung đang được cập nhật bởi Vanh (TV5).
