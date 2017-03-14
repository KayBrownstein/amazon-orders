class Order {
  constructor(placedOn, customer, paymentMethod, shippingAddress, items) {
    this.placedOn = placedOn;
    this.customer = customer;
    this.paymentMethod = paymentMethod;
    this.shippingAddress = shippingAddress;
    this.items = [];
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  toHTML() {

  }

  total() {
    let sum = 0;
    this.items.forEach(function(item) {
      sum += item.price;
    });
    return sum;
  }

  summary() {
    let orderSummary = `Date: ${this.placedOn}
    \nCustomer: ${this.customer}
    \nPayment method: ${this.paymentMethod}
    \nShipping address: ${this.shippingAddress}
    \n\nItems:`;
      this.items.forEach(function(item) {
        orderSummary += item.summary();
        orderSummary +=`\n`;
    });
    orderSummary += `Total: ${this.total()}`;

    return orderSummary;

  }
}
