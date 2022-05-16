import { Observer } from "../../Observer/Observer";
import { Notifier } from "../Notifier";
import { Observer } from "../../Observer/Observer";

export class SMSNotifier extends Notifier {
  //CONSTRUCTOR
  constructor(notifier: Notifier) {
    super();
    this.notifier;
  }

  //METODO
  send(observer: Observer): void {
    //Enviar mensaje automatico
  }
}
