import { PaymentMechanism } from "../../PaymentMechanism/PaymentMechanism";
import { CreditCard } from "../../PaymentMechanism/PaymentTypes/CreditCard";
import { PayPal } from "../../PaymentMechanism/PaymentTypes/PayPal";
import { Subscription } from "../Subscription";
import { Modality } from "../ModalityEnum";

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
		paymentMechanism.pay(this.mount);
	}
}
