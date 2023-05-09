const {
  getAllCustomer,
  insertNewCustomer,
  getDetailCustomer,
  getMaxIdCustomer,
} = require("./demo.service");

// GET CUSTOMER
const getAllCustomerController = async () => {
  getAllCustomer(1)
    .then((customersByThen) => {
      console.log("customersByThen:::", customersByThen);
    })
    .catch((error) => {
      console.log("Error getAllCustomer:::", error);
    });

  try {
    const customersBySA = await getAllCustomer(1);
    console.log("customersBySA:::", customersBySA);
  } catch (error) {
    console.log("Error customersBySA:::", error);
  }
};

// GET DETAIL CUSTOMER
const getDetailCustomerControoler = async () => {
  getDetailCustomer(1)
    .then((detailCustomerByThen) => {
      console.log("detailCustomerByThen:::", detailCustomerByThen);
    })
    .catch((error) => {
      console.log("Error detailCustomerByThen:::", error);
    });

  try {
    const detailCustomersBySA = await getDetailCustomer(1);
    console.log("detailCustomersBySA:::", detailCustomersBySA);
  } catch (error) {
    console.log("Error detailCustomersBySA:::", error);
  }
};

// INSERT NEW CUSTOMER
const insertCustomerController = async () => {
  const maxId = await getMaxIdCustomer();
  const customer = {
    id: maxId + 1,
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
  };
//   insertNewCustomer(customer)
//     .then((newListCustomerByThen) => {
//       console.log("insertNewCustomerByThen Success", newListCustomerByThen);
//     })
//     .catch((error) => {
//       console.log("insertNewCustomerByThen Fail:::", error);
//     });

  try {
    const newListCustomerBySA = await insertNewCustomer(customer);
    console.log("insertNewCustomerBySA Success", newListCustomerBySA);
  } catch (error) {
    console.log("insertNewCustomerBySA Fail:::", error);
  }
};

// getAllCustomerController();
// getDetailCustomerControoler();
insertCustomerController();
