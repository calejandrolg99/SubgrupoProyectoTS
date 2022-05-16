import { Notifier } from "../Notifier/Notifier";
import { Observer } from "./Observer";

export interface Observable {
    //METODOS DEFINIDOS EN EL CONTRATO
    add(...observer:Observer[]):void
    notifyall(notifier:Notifier):void

}