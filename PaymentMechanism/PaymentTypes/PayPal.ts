import { PaymentMechanism } from "../PaymentMechanism";

export class PayPal implements PaymentMechanism {
	private password: string;
	private email: string;

	constructor(password: string, email: string) {
		this.password = password;
		this.email = email;
	}

	pay(mount: number) {
		//Servicio externo de pago con paypal
	}
}
