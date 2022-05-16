import { PhoneNumber } from "../PhoneNumber";

class VenezuelanNumber extends PhoneNumber {
  constructor(
    phone: string,
    type: string,
    countryCode: string,
    prefixCode: string
  ) {
    super(phone, type, countryCode, prefixCode);
  }

  getNumber(): string {
    return this.countryCode + " " + this.prefixCode + "-" + this.phone;
  }
}
