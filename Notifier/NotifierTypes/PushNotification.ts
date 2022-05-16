import { Notifier } from "../Notifier";
import { Observer } from "../Observer";

export class PushNotification extends Notifier {
  //CONSTRUCTOR
  constructor(notifier: Notifier) {
    super(notifier);
    this.notifier;
  }

  //METODO
  send(observer: Observer): void {
    //Envia notificacion push
  }
}
