import { Notifier } from "../Notifier";
import { Observer } from "../../Observer/Observer";

export class AutomaticCall extends Notifier {
  //CONSTRUCTOR
  constructor(notifier: Notifier) {
    super();
    this.notifier;
  }

  //METODO
  send(observer: Observer): void {
    //lHacer llamada automatica
  }
}
