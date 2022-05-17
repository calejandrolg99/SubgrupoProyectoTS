import { PaymentMechanism } from "../PaymentMechanism";

export class PayPal implements PaymentMechanism {
	//ATRIBUTOS
	private password: string;
	private email: string;

	constructor(password: string, email: string) {
		this.password = password;
		this.email = email;
	}

	//METODOS
	pay(mount: number) {
		try {
			//SE INTENTA PAGAR
		} catch (error) {
			console.log(error);
		}
		//Servicio externo de pago con paypal
	}
}
