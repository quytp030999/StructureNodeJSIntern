Bài tập
1. Viết hàm lấy tất cả thông tin khách hàng từ mảng - truyền vào tham số status -> Chỉ lấy dữ liệu khi status === 1
2. Viết hàm lấy thông tin chi tiết của khách hàng bất kì từ mảng ( theo id )
3. Viết hàm thêm thông tin khách hàng mới vào mảng - thêm mới thành công trả về mảng mới -> console.log ra màn hình mảng mới

Lưu ý:
1. Tất cả hàm sử dụng Promise
2. Sử dụng hàm với cả 2 cách: .then().catch() & async/await
3. Thông tin khách hàng gồm các trường: đầy đủ các trường như object trong mảng đã cho - id tăng dần *
3. Bắt lỗi & console.log ra màn hình
4. Kết quả console.log ra màn hình
5. Cấu trúc thư mục: controllers & services
6. Viết Code rõ ràng - rành mạch ( đặt tên hàm - tên biến)

const customers = [
  {
    id: 1,
    name: "Dat",
    fullname: "Trần Phát Đạt",
    address: "88/5 ấp Đông Huề, Tân Khánh Đông, Sa Đéc, Đồng Tháp",
    status: 1,
    point: 0,
    provinceCode: "DTP",
    signBoard: "Phát Đạt",
    districtCode: "Sa Đéc",
    customerCode: "RDTP00001",
    dayBirthday: 1,
    monthBirth: 1,
    yearBirth: 1990,
    phone: "84916459260@84386976349",
  },
  {
    id: 3,
    name: "A",
    fullname: "NGÔ THỊ Á",
    address: "Hiệp Hạnh, Hiệp Sương, Phú Tân, An Giang",
    status: 1,
    point: 0,
    provinceCode: "AGG",
    signBoard: "BÌNH YÊN 2",
    districtCode: "Phú Tân",
    customerCode: "RAGG00003",
    dayBirthday: 0,
    monthBirth: 0,
    yearBirth: 1990,
    phone: "84399224446",
  },
  {
    id: 2,
    name: "Long",
    fullname: "Nguyễn Thành Long",
    address: "Ấp Cửu Hòa, xã Thân Cửu Nghĩa, Châu Thành, Tiền Giang",
    status: 1,
    point: 0,
    provinceCode: "TGG",
    signBoard: "Nguyễn Thành Long (9 Diệu)",
    districtCode: "Châu Thành-TG",
    customerCode: "RTGG00002",
    dayBirthday: 1,
    monthBirth: 1,
    yearBirth: 1990,
    phone: "84949649855",
  },
  {
    id: 4,
    name: "ANH",
    fullname: "PHAN THỊ MỸ ÁNH",
    address: "Trung Hội, Mỹ Trinh, Phù Mỹ, Bình Định - 0566522704",
    status: 1,
    point: 0,
    provinceCode: "BDH",
    signBoard: "ÁNH DƯƠNG",
    districtCode: "Phù Mỹ",
    customerCode: "RBDH00004",
    dayBirthday: 0,
    monthBirth: 0,
    yearBirth: 1990,
    phone: "84986563704",
  }
];
