import { PhoneNumber } from "./PhoneNumber";
import { VenezuelanNumber } from "./Numbers/VenezuelanNumber";

export class Patient {
	private name: string;
	private age: number;
	private weight: number;
	private profession: string;
	private email: string;
	private phones: PhoneNumber[];

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

	addNumber(phoneNumber: PhoneNumber) {
		this.phones.push(phoneNumber);
	}

	deleteNumber(phone: PhoneNumber) {
		this.phones.forEach((phoneNumber, index) => {
			if (phone == phoneNumber) this.phones.splice(index, 1);
		});
	}
}
