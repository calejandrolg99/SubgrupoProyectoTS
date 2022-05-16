import { Notifier } from "../Notifier";
import { Observer } from "../Observer";

export class EmailNotifier extends Notifier {
  //CONSTRUCTOR
  constructor(notifier: Notifier) {
    super(notifier);
    this.notifier;
  }

  //METODO
  send(observer: Observer): void {
    //Enviar email automatico
  }
}
