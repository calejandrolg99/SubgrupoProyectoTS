import { PaymentMechanism } from "../../PaymentMechanism/PaymentMechanism";
import { CreditCard } from "../../PaymentMechanism/PaymentTypes/CreditCard";
import { PayPal } from "../../PaymentMechanism/PaymentTypes/PayPal";
import { Subscription } from "../Subscription";
import { Modality } from "../ModalityEnum";

class WithBenefits extends Subscription {
	//ATRIBUTOS
	private reduction: number;

	constructor(
		mount: number,
		reduction: number,
		status: string,
		modality: Modality
	) {
		super(mount, status, modality);
		this.reduction = reduction;
	}

	//GETTERS Y SETTERS
	getMount(): number {
		return this.mount - this.reduction;
	}

	//METODOS
	pay(paymentMechanism: PaymentMechanism) {
		switch (paymentMechanism.constructor) {
			case CreditCard:
				paymentMechanism.pay(this.mount - this.reduction);
				break;
			case PayPal:
				paymentMechanism.pay(this.mount - this.reduction);
			default:
				break;
		}
	}
}
