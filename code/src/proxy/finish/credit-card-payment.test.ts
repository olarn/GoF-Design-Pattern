describe('credit card payment', function () {
  it('should have call console log', function () {
    const creditCardPayment = new CreditCardPayment();
    jest.spyOn(console, 'log');
    creditCardPayment.pay();
    expect(console.log).toHaveBeenCalledWith("Start payment with credit card");
    expect(console.log).toHaveBeenCalledWith("Processing payment making http request to payment gateway.....");
  })

  it('should initialize payment gateway object once', function () {
    const creditCardPayment = new CreditCardPayment();
    jest.spyOn(console, 'log');
    creditCardPayment.pay();
    creditCardPayment.pay();
    expect(console.log).toHaveBeenNthCalledWith(1, "Initializing payment gateway");
  });
});
