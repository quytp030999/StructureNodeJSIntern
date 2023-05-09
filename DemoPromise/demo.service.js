const customers = [
  {
    id: 122,
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
  },
  {
    id: 5,
    name: "Khanh",
    fullname: "Nguyễn Văn Khanh",
    address: "Phong Thạch Bàn, Cát Sơn, Phù Cát, Bình Định",
    status: 1,
    point: 0,
    provinceCode: "BDH",
    signBoard: "Khanh",
    districtCode: "Phù Cát",
    customerCode: "RBDH00005",
    dayBirthday: 1,
    monthBirth: 1,
    yearBirth: 1990,
    phone: "84937395026@84777189318",
  },
  {
    id: 6,
    name: "Son",
    fullname: "Trần Nhật Sơn",
    address: "Thôn Háo Đức, Nhơn An, TX An Nhơn, Bình Định",
    status: 1,
    point: 0,
    provinceCode: "BDH",
    signBoard: "Sơn Nhi",
    districtCode: "TX An Nhơn",
    customerCode: "RBDH00006",
    dayBirthday: 1,
    monthBirth: 1,
    yearBirth: 1990,
    phone: "84369817007",
  },
  {
    id: 7,
    name: "Nguyen",
    fullname: "Đặng Cao Nguyên",
    address: "Thôn Phước Thọ, Mỹ Hòa, Phù Mỹ, Bình Định",
    status: 1,
    point: 0,
    provinceCode: "BDH",
    signBoard: "Hoa Nguyên",
    districtCode: "Phù Mỹ",
    customerCode: "RBDH00007",
    dayBirthday: 0,
    monthBirth: 0,
    yearBirth: 1990,
    phone: "84327307589",
  },
  {
    id: 8,
    name: "Can",
    fullname: "Cao Trung Cần",
    address: "Khu vực Thái Hòa 2, Phường Thái Long, Ô Môn, Cần Thơ",
    status: 1,
    point: 0,
    provinceCode: "CTO",
    signBoard: "Trung Cần",
    districtCode: "Ô Môn",
    customerCode: "RCTO00008",
    dayBirthday: 1,
    monthBirth: 1,
    yearBirth: 1990,
    phone: "84333746352@84939863970",
  },
  {
    id: 9,
    name: "Tam",
    fullname: "Nguyễn Thị Minh Tâm",
    address: "Ấp Thạnh Lộc 2, Trung An, Cờ Đỏ, Cần Thơ",
    status: 1,
    point: 0,
    provinceCode: "CTO",
    signBoard: "Tấn Đạt",
    districtCode: "Cờ Đỏ",
    customerCode: "RCTO00009",
    dayBirthday: 1,
    monthBirth: 1,
    yearBirth: 1990,
    phone: "84947777232@84917182660",
  },
  {
    id: 10,
    name: "Quoc",
    fullname: "Nguyễn Phú Quốc",
    address: "Tân Lợi 2, Phường Tân Hưng, Thốt Nốt, Cần Thơ",
    status: 1,
    point: 0,
    provinceCode: "CTO",
    signBoard: "Phú Quốc",
    districtCode: "Thốt Nốt",
    customerCode: "RCTO00010",
    dayBirthday: 1,
    monthBirth: 1,
    yearBirth: 1990,
    phone: "84918421259@84942175253",
  },
  {
    id: 11,
    name: "Tuan",
    fullname: "Trần Thạch Tuấn",
    address: "359 ấp Thị Tứ, TT Phong Điền, Phong Điền, Cần Thơ",
    status: 1,
    point: 0,
    provinceCode: "CTO",
    signBoard: "Trần Tuấn",
    districtCode: "Phong Điền",
    customerCode: "RCTO00011",
    dayBirthday: 0,
    monthBirth: 0,
    yearBirth: 1990,
    phone: "84982850216",
  },
];

const getAllCustomer = (status) => {
  return new Promise((resolve, reject) => {
    if (status === 1) {
      resolve(customers);
    }
    reject("Status Invalid");
  });
};

const getDetailCustomer = (id) => {
  return new Promise((resolve, reject) => {
    if (id) {
      const customer = customers.find((cus) => cus.id === id);
      if (customer) {
        resolve(customer);
      }
      reject("Customer Invalid");
    }
    reject("Id Customer Invalid");
  });
};

const insertNewCustomer = (customer) => {
  return new Promise((resolve, reject) => {
    if (customer) {
      customers.push(customer);
      resolve(customers);
    }
    reject("Customer Invalid");
  });
};

const getMaxIdCustomer = () => {
  return new Promise((resolve, reject) => {
    var maxId = 0;
    customers.forEach((el) => {
      if (el.id > maxId) {
        maxId = el.id;
      }
    });
    resolve(maxId);
  });
};

module.exports = {
  getAllCustomer,
  getDetailCustomer,
  insertNewCustomer,
  getMaxIdCustomer,
};
