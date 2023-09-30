class CreditCardPayment implements PaymentGateway {

  private paymentGateway: PaymentGatewayImpl | null = null;

  pay(): void {
    if (this.paymentGateway === null) {
      console.log("Initializing payment gateway");
      this.paymentGateway = new PaymentGatewayImpl();
    }
    console.log("Start payment with credit card")
    this.paymentGateway.pay();
  }
}
