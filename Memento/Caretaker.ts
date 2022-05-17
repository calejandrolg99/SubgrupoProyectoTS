import { Memento } from "./Memento";

class Caretaker {
	//ATRIBUTOS
	private mementos: Memento<any>[];

	constructor(mementos: Memento<any>) {
		this.mementos = [mementos];
	}

	//GETTERS Y SETTERS
	getMementos(): Memento<any>[] {
		return this.mementos;
	}

	//METODOS
	getVersion(date: Date): Memento<any> {
		let i = -1;
		this.mementos.forEach((memento, index) => {
			if (date.toISOString() == memento.getDate().toISOString()) i = index;
		});
		if (i != -1) return this.mementos[i];
		else return null;
	}

	addMementos(memento: Memento<any>) {
		this.mementos.push(memento);
	}
}
