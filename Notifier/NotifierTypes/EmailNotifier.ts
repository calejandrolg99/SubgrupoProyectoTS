import { Notifier } from "../Notifier";
import { Observer } from "../../Observer/Observer";

export class EmailNotifier extends Notifier {
  //CONSTRUCTOR
  constructor(notifier: Notifier) {
    super();
    this.notifier;
  }

  //METODO
  send(observer: Observer): void {
    //Enviar email automatico
  }
}
