import { PaymentMechanism } from "../PaymentMechanism";

export class CreditCard implements PaymentMechanism {
	//ATRIBUTOS
	private cardNumber: number;
	private securityCode: number;
	private type: string;
	private expiration: Date;

	constructor(
		cardNumber: number,
		securityCode: number,
		type: string,
		expiration: Date
	) {
		this.cardNumber = cardNumber;
		this.securityCode = securityCode;
		this.type = type;
		this.expiration = expiration;
	}

	//METODOS
	pay(mount: number) {
		//Servicio externo de pago con tarjeta
	}
}
