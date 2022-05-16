export class Memento<M> {
	//ATRIBUTOS
	protected state: M;
	protected date: Date;

	constructor(state: M, date: Date) {
		this.state = state;
		this.date = date;
	}

	//GETTERS Y SETTERS
	getState(): M {
		return this.state;
	}

	setState(state: M) {
		this.state = state;
	}

	getDate(): Date {
		return this.date;
	}

	setDate(date: Date) {
		this.date = date;
	}
}
