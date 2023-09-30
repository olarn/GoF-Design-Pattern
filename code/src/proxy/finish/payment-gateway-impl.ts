interface PaymentGateway {
  pay(): void;
}

class PaymentGatewayImpl implements PaymentGateway {
  pay(): void {
    console.log("Processing payment making http request to payment gateway.....");
  }

}

