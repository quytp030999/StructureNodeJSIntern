class Order {
  constructor(userId) {
    this.userId = userId;
    this.timeOrder = Date.now();
    this.products = [];
  }
}

class OrderManager {
  constructor() {
    this.order = null;
  }

  // createOrder
  createOrder(userId) {
    this.order = new Order(userId);
  }

  // addProduct
  addProduct(product) {
    this.order.products.push(product);
  }

  // getOrder
  getOrder() {
    return this.order;
  }

  // isValid Products
  isValidProduct() {
    return !!this.order.products.length;
  }

  sendMailOrder() {
    if (this.isValidProduct()) {
      this.orderSendMail = new SendMailOrder();
      return this.orderSendMail.sendMail(this.order);
    }
    return 1;
  }
}

class SendMailOrder {
  sendMail(order) {
    console.log(
      `Program sent mail successfully https:ecommerce.com/order :::`,
      order
    );
    return 1;
  }
}

const orderManager = new OrderManager();
orderManager.createOrder("user--0001");
orderManager.addProduct({
  productId: 001,
  quantity: 2,
  price: 100,
  unit: "USD",
});
orderManager.addProduct({
  productId: 001,
  quantity: 2,
  price: 100,
  unit: "USD",
});
console.log("order:::", orderManager.getOrder());
// orderManager.sendMailOrder();

const orderManager2 = new OrderManager();
orderManager2.createOrder("user--0001");
orderManager2.addProduct({
  productId: 001,
  quantity: 2,
  price: 100,
  unit: "USD",
});
orderManager2.addProduct({
  productId: 001,
  quantity: 2,
  price: 100,
  unit: "USD",
});
console.log("order2:::", orderManager2.getOrder());
