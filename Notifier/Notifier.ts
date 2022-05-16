import { Observer } from "../Observer/Observer";

export abstract class Notifier {
  //ATRIBUTOS
  protected notifier: Notifier;

  //CONSTRUCTOR
  public Notifier(notifier: Notifier) {
    this.notifier = notifier;
  }

  //GETTER Y SETTER
  public getNotifier() {
    return this.notifier;
  }
  
  public setNotifier(notifier: Notifier) {
    this.notifier = notifier
  }

  //METODO ABSTRACTO
  abstract send(observer: Observer): void;
}
