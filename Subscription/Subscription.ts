import { PaymentMechanism } from "../PaymentMechanism/PaymentMechanism";

export abstract class Subscription {
	protected mount: number;
	protected status: string;
	protected modality: Modality;

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

export enum Modality {
	Normal,
	WithBenefits,
}
