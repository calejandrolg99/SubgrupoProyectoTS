import { Notifier } from "../Notifier";
import { Observer } from "../Observer";

export class SMSNotifier extends Notifier {
  //CONSTRUCTOR
  constructor(notifier: Notifier) {
    super(notifier);
    this.notifier;
  }

  //METODO
  send(observer: Observer): void {
    //Enviar mensaje automatico
  }
}
