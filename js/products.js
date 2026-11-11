/* Memoria Lab: dữ liệu sản phẩm thống nhất. Quy cách từng sản phẩm có thể cập nhật tại đây. */
window.products = [
  {
    "id": 1,
    "name": "Photostrip 1×3 – Hàn Quốc",
    "price": 89000,
    "category": "photostrip",
    "image": "images/products/product-01.jpg",
    "previewOptions": {
      "Chất liệu": ["Giấy ảnh bóng", "Giấy mỹ thuật nhám"],
      "Kỷ niệm số": ["Không gắn mã QR", "Gắn mã QR"]
    },
    "description": "Dải ảnh cá nhân hóa 3 khung, phong cách Hàn Quốc; phù hợp lưu giữ khoảnh khắc cùng bạn bè hoặc người thương.",
    "specs": {
      "Loại sản phẩm": "Dải ảnh Photobooth cá nhân hóa",
      "Kích thước / quy cách": "5 × 15 cm",
      "Bố cục / thành phần": "1 cột × 3 ô ảnh",
      "Chất liệu": "Giấy ảnh bóng hoặc giấy mỹ thuật nhám",
      "Cá nhân hóa": "Tải ảnh, chọn template, thêm chữ và sticker.",
      "Kỷ niệm số": "Mã QR tùy chọn"
    },
    "detailDescription": [
      "Lưu giữ những khoảnh khắc đáng nhớ trong một dải ảnh nhỏ xinh mang phong cách Hàn Quốc. Photostrip 1×3 cho phép bạn chọn ba bức ảnh yêu thích, thêm lời nhắn, sticker và khung trang trí để tạo nên món quà mang dấu ấn riêng.",
      "Bạn có thể xem trước thiết kế trước khi đặt in và tùy chọn gắn mã QR để kết nối với trang kỷ niệm số."
    ]
  },
  {
    "id": 2,
    "name": "Photostrip 1×4 – Vintage",
    "price": 99000,
    "category": "photostrip",
    "image": "images/products/product-02.jpg",
    "description": "Bốn khung ảnh, tông màu hoài cổ và một lời nhắn dành riêng cho người bạn trân quý.",
    "specs": {
      "Loại sản phẩm": "Dải ảnh Photostrip phong cách vintage",
      "Kích thước / quy cách": "5 × 15 cm",
      "Bố cục / thành phần": "1 cột × 4 ô ảnh",
      "Chất liệu": "Giấy ảnh mờ",
      "Cá nhân hóa": "Tông màu vintage; chọn ảnh và thêm lời nhắn."
    },
    "detailDescription": [
      "Dải ảnh 4 khung với phong cách hoài cổ, phù hợp sinh nhật, hẹn hò và những dịp đáng nhớ. Chọn bốn bức ảnh, phối cùng tông màu vintage và lời nhắn để kể lại câu chuyện của bạn.",
      "Dải ảnh khổ 5 × 15 cm, in trên giấy ảnh mờ."
    ]
  },
  {
    "id": 3,
    "name": "Postcard 2×2 – Y2K",
    "price": 129000,
    "category": "cards",
    "image": "images/products/product-03.jpg",
    "description": "Bốn khoảnh khắc trong một tấm postcard Y2K, kết hợp ảnh và lời nhắn mang dấu ấn riêng.",
    "specs": {
      "Loại sản phẩm": "Bưu thiếp ảnh cá nhân hóa",
      "Kích thước / quy cách": "10 × 15 cm",
      "Bố cục / thành phần": "2 × 2 ô ảnh; thiết kế một mặt",
      "Chất liệu": "Giấy ảnh.",
      "Cá nhân hóa": "Tùy chỉnh nền, chữ và sticker."
    },
    "detailDescription": [
      "Bưu thiếp ảnh bố cục 2×2, kết hợp ảnh và lời nhắn ngắn theo phong cách Y2K. Bốn ô ảnh trên cùng một mặt giúp bạn lưu giữ nhiều khoảnh khắc trong một tấm postcard.",
      "Khổ 10 × 15 cm, in trên giấy ảnh; bạn có thể tùy chỉnh nền, chữ và sticker theo thiết kế."
    ]
  },
  {
    "id": 4,
    "name": "Khung tranh Desktop Custom",
    "price": 159000,
    "category": "frames",
    "image": "images/products/product-04.jpg",
    "description": "Mang bộ ảnh hoặc scrapbook ngắn lên chiếc khung để bàn dành cho góc nhỏ của bạn.",
    "specs": {
      "Loại sản phẩm": "Khung tranh để bàn cá nhân hóa",
      "Kích thước / quy cách": "Ảnh 10 × 15 cm",
      "Bố cục / thành phần": "Khung để bàn; thiết kế một mặt",
      "Chất liệu": "Khung gỗ MDF, mặt trong suốt",
      "Cá nhân hóa": "Cá nhân hóa nội dung ảnh hoặc scrapbook ngắn.",
      "Màu khung": "Vân gỗ sáng"
    },
    "detailDescription": [
      "Khung tranh để bàn lưu giữ một bộ ảnh hoặc scrapbook ngắn, phù hợp làm quà tặng cá nhân hóa. Một thiết kế nhỏ để đặt trên bàn học hoặc góc làm việc và gợi nhắc những khoảnh khắc đáng nhớ.",
      "Khung vân gỗ sáng phù hợp với ảnh khổ 10 × 15 cm."
    ]
  },
  {
    "id": 5,
    "name": "Thiệp kỷ niệm cá nhân hóa",
    "price": 69000,
    "category": "cards",
    "image": "images/products/product-05.jpg",
    "previewOptions": { "Phong bì": ["Không thêm phong bì", "Thêm phong bì giấy kraft"] },
    "description": "Thêm ảnh và lời chúc để gửi một lời cảm ơn, lời chúc mừng hoặc điều bạn muốn nói.",
    "specs": {
      "Loại sản phẩm": "Thiệp ảnh và lời chúc cá nhân hóa",
      "Kích thước / quy cách": "A5 (14,8 × 21 cm), thiệp phẳng",
      "Bố cục / thành phần": "In một mặt",
      "Chất liệu": "Giấy bìa mỹ thuật",
      "Cá nhân hóa": "Thêm ảnh, thông điệp và nội dung lời chúc.",
      "Phong bì": "Phong bì giấy kraft tùy chọn"
    },
    "detailDescription": [
      "Thiệp dành cho sinh nhật, kỷ niệm hoặc lời cảm ơn; bạn có thể thêm ảnh và thông điệp riêng. Biến lời chúc của mình thành một món quà nhỏ có thể lưu giữ.",
      "Thiệp phẳng khổ A5 có chỗ cho ảnh và lời chúc, với tùy chọn phong bì giấy kraft."
    ]
  },
  {
    "id": 6,
    "name": "Scrapbook để bàn",
    "price": 149000,
    "category": "frames",
    "image": "images/products/product-06.jpg",
    "description": "Một trang kỷ niệm khổ A5 kết hợp nhiều ảnh, ghi chú và sticker theo chủ đề của bạn.",
    "specs": {
      "Loại sản phẩm": "Ấn phẩm scrapbook cá nhân hóa",
      "Kích thước / quy cách": "Khổ A5",
      "Bố cục / thành phần": "Ấn phẩm phẳng, in một mặt",
      "Chất liệu": "Giấy mỹ thuật nhám",
      "Cá nhân hóa": "Chọn template; tùy chỉnh ảnh, văn bản và sticker."
    },
    "detailDescription": [
      "Ấn phẩm scrapbook nhỏ gọn kết hợp nhiều ảnh, ghi chú và sticker theo một chủ đề kỷ niệm. Tự tay sắp xếp những khoảnh khắc và lời nhắn thành một câu chuyện của riêng bạn.",
      "Ảnh, ghi chú và hình trang trí được bố trí trên một mặt giấy khổ A5."
    ]
  },
  {
    "id": 7,
    "name": "Dải ảnh + QR Digital Keepsake",
    "price": 119000,
    "category": "photostrip",
    "image": "images/products/product-07.jpg",
    "description": "Một dải ảnh 5 × 15 cm và mã QR kết nối những khoảnh khắc, lời nhắn, nhạc nền.",
    "specs": {
      "Loại sản phẩm": "Dải ảnh kết hợp trang kỷ niệm số",
      "Kích thước / quy cách": "5 × 15 cm",
      "Bố cục / thành phần": "Dải ảnh in kèm mã QR",
      "Chất liệu": "Giấy ảnh bóng",
      "Cá nhân hóa": "Ảnh, lời nhắn và nhạc nền",
      "Kỷ niệm số": "Mã QR dẫn đến trang kỷ niệm"
    },
    "detailDescription": [
      "Dải ảnh in kèm mã QR dẫn đến trang kỷ niệm số có ảnh, lời nhắn và nhạc nền. Kết hợp món quà có thể cầm nắm với những nội dung số dành riêng cho người nhận.",
      "Mã QR nằm trên dải ảnh khổ 5 × 15 cm để người nhận có thể quét và mở trang kỷ niệm."
    ]
  },
  {
    "id": 8,
    "name": "Set quà combo Photostrip + Frame",
    "price": 249000,
    "category": "combo",
    "image": "images/products/product-08.jpg",
    "previewOptions": { "Hộp quà": ["Không thêm hộp quà", "Thêm hộp giấy kraft"] },
    "description": "Một photostrip và một khung để bàn, đồng bộ phong cách để trao tặng kỷ niệm.",
    "specs": {
      "Loại sản phẩm": "Bộ quà Photostrip và khung để bàn",
      "Kích thước / quy cách": "Dải ảnh 5 × 15 cm, khung ảnh 10 × 15 cm",
      "Bố cục / thành phần": "01 photostrip + 01 khung để bàn",
      "Chất liệu": "Dải ảnh giấy ảnh bóng, khung gỗ MDF",
      "Cá nhân hóa": "Lựa chọn phong cách đồng bộ cho photostrip và khung.",
      "Hộp quà": "Hộp giấy kraft tùy chọn"
    },
    "detailDescription": [
      "Bộ quà kết hợp dải ảnh và khung để bàn, phù hợp tặng người thân, bạn bè hoặc người thương. Lựa chọn phong cách đồng bộ để hai thành phần cùng kể một câu chuyện.",
      "Mỗi bộ gồm một dải ảnh 5 × 15 cm và một khung để bàn cho ảnh 10 × 15 cm. Có thể chọn thêm hộp giấy kraft."
    ]
  }
];
