import { Notifier } from "../Notifier";
import { Observer } from "../Observer";

export class AutomaticCall extends Notifier {
  //CONSTRUCTOR
  constructor(notifier: Notifier) {
    super(notifier);
    this.notifier;
  }

  //METODO
  send(observer: Observer): void {
    //lHacer llamada automatica
  }
}
