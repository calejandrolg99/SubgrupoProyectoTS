import { PhoneNumber } from "./PhoneNumber";
import { Subscription } from "../Subscription/Subscription";
import { PaymentMechanism } from "../PaymentMechanism/PaymentMechanism";
import { Observer } from "../Observer/Observer";
import { Notifier } from "../Notifier/Notifier";

export class Patient implements Observer {
	//ATRIBUTOS
	private name: string;
	private age: number;
	private weight: number;
	private profession: string;
	private email: string;
	private phones: PhoneNumber[];
	private subscription: Subscription;

	constructor(
		name: string,
		age: number,
		weight: number,
		profession: string,
		email: string,
		phones: PhoneNumber
	) {
		this.name = name;
		this.age = age;
		this.weight = weight;
		this.profession = profession;
		this.email = email;
		this.phones = [phones];
	}

	//GETTERS Y SETTERS
	getName(): string {
		return this.name;
	}

	setName(name: string) {
		this.name = name;
	}

	getAge(): number {
		return this.age;
	}

	setAge(age: number) {
		this.age = age;
	}

	getWeight(): number {
		return this.weight;
	}

	setWeight(weight: number) {
		this.weight = weight;
	}

	getProfession(): string {
		return this.profession;
	}

	setProfession(profession: string) {
		this.profession = profession;
	}

	getEmail(): string {
		return this.email;
	}

	setEmail(email: string) {
		this.email = email;
	}

	getPhones(): PhoneNumber[] {
		return this.phones;
	}

	getSubscription(): Subscription {
		return this.subscription;
	}

	//METODOS
	addNumber(phoneNumber: PhoneNumber) {
		this.phones.push(phoneNumber);
	}

	paySubscription(payment: PaymentMechanism) {
		//	payment.pay();                      //SE PROCEDE AL PAGO
	}

	deleteNumber(phone: PhoneNumber) {
		this.phones.forEach((phoneNumber, index) => {
			if (phone == phoneNumber) this.phones.splice(index, 1);
		});
	}

	update(context: Notifier): void {
		context.send(this);
	}
}
