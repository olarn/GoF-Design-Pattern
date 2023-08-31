var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.addresses = address;
    }
    Customer.prototype.getMailingAddress = function () {
        return this.firstName + " " + this.lastName + "\n" + this.addresses.map(function (address) { return address.getFormettedAddress(); }).join("\n");
    };
    return Customer;
}());
var Address = /** @class */ (function () {
    function Address() {
    }
    Address.prototype.getFormettedAddress = function () {
        return this.line1 + "\n" + this.line2 + "\n" + this.zipCode;
    };
    return Address;
}());
var address = new Address();
address.line1 = "123 Main St.";
address.line2 = "Suite 101";
address.zipCode = "12345";
address.addressType = "Home";
var addresses = [address];
var c = new Customer("John", "Smith", addresses);
console.log(c.getMailingAddress());
