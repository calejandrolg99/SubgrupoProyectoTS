import { Memento } from "../Memento";

class HistoryMemento extends Memento<any> {
	//ATRIBUTOS
	private access: string;

	constructor(state: Data, date: Date, access: string) {
		super(state, date);
		this.access = access;
	}

	//GETTERS Y SETTERS
	getAccess(): string {
		return this.access;
	}

	setAccess(access: string) {
		this.access = access;
	}
}
