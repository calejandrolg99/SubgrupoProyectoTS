import { Notifier } from "../Notifier/Notifier";

export interface Observer {
    //METODOS DEFINIDOS EN EL CONTRATO
    update(context:Notifier):void
    

}