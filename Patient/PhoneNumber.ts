export abstract class PhoneNumber {
  protected phone: string;
  protected type: string;
  protected countryCode: string;
  protected prefixCode: string;

  constructor(
    phone: string,
    type: string,
    countryCode: string,
    prefixCode: string
  ) {
    this.phone = phone;
    this.type = type;
    this.countryCode = countryCode;
    this.prefixCode = prefixCode;
  }

  getPhone(): string {
    return this.phone;
  }

  setPhone(phone: string) {
    this.phone = phone;
  }

  getType(): string {
    return this.type;
  }

  setType(type: string) {
    this.type = type;
  }

  getCountryCode(): string {
    return this.countryCode;
  }

  setCountryCode(countryCode: string) {
    this.countryCode = countryCode;
  }

  getPrefixCode(): string {
    return this.prefixCode;
  }

  setPrefixCode(prefixCode: string) {
    this.prefixCode = prefixCode;
  }

  abstract getNumber(): string;
}
