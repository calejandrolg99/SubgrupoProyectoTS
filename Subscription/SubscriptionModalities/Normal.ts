import { PaymentMechanism } from "../../PaymentMechanism/PaymentMechanism";
import { CreditCard } from "../../PaymentMechanism/PaymentTypes/CreditCard";
import { PayPal } from "../../PaymentMechanism/PaymentTypes/PayPal";
import { Subscription, Modality } from "../Subscription";

class Normal extends Subscription {
	constructor(mount: number, status: string, modality: Modality) {
		super(mount, status, modality);
	}

	//GETTERS Y SETTERS
	getMount(): number {
		return this.mount;
	}

	//METODOS
	pay(paymentMechanism: PaymentMechanism) {
		switch (paymentMechanism.constructor) {
			case CreditCard:
				paymentMechanism.pay(this.mount);
				break;
			case PayPal:
				paymentMechanism.pay(this.mount);
			default:
				break;
		}
	}
}
