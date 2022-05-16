import { Observer } from "../../Observer/Observer";
import { Notifier } from "../Notifier";

export class SMSNotifier extends Notifier {
  //CONSTRUCTOR
  constructor() {
    super();
  }

  //METODO
  send(observer: Observer): void {
    //Enviar mensaje automatico
  }
}
