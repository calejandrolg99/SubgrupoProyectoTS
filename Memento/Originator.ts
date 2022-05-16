import { Memento } from "./Memento";

export interface Originator {
	//CONTRATOS
	save(): Memento<any>;
}
