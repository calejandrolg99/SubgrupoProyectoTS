import { PhoneNumber } from "../PhoneNumber";

export class ColombianNumber extends PhoneNumber {
	constructor(
		phone: string,
		type: string,
		countryCode: string,
		prefixCode: string
	) {
		super(phone, type, countryCode, prefixCode);
	}

	getNumber(): string {
		return (
			this.countryCode + " " + "(" + this.prefixCode + ")" + " " + this.phone
		);
	}
}
