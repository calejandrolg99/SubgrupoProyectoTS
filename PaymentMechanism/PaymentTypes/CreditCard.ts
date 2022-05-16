import { PaymentMechanism } from "../PaymentMechanism";

class Creditcard implements PaymentMechanism {
	private password: string;
	private email: string;

	constructor(password: string, email: string) {
		this.password = password;
		this.email = email;
	}

	pay(mount: number) {
		console.log("Mecanismo de tarjeta de credito (Servicio externo) " + mount);
	}
}
