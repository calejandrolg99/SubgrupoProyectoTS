import { PaymentMechanism } from "../PaymentMechanism/PaymentMechanism";

export abstract class Subscription {
	private mount: number;
	private status: string;
	private modality: Modality;

	constructor(mount: number, status: string, modality: Modality) {
		this.mount = mount;
		this.status = status;
		this.modality = modality;
	}

	getStatus(): string {
		return this.status;
	}

	setStatus(status: string) {
		this.status = status;
	}

	setMount(mount: number) {
		this.mount = mount;
	}

	getModality(): Modality {
		return this.modality;
	}

	setModality(modality: Modality) {
		this.modality = modality;
	}

	abstract getMount(): number;
	abstract pay(paymentMechanism: PaymentMechanism);
}

enum Modality {
	Normal,
	WithBenefit,
}
