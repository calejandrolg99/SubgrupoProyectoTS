import { Observer } from "../Observer/Observer";

export abstract class Notifier {
  //ATRIBUTOS
  protected notifier: Notifier;

  //CONSTRUCTOR
  //constructor() {} POSIBLE SOLUCION(?)
  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  //GETTER Y SETTER
  getNotifier() {
    return this.notifier;
  }
  setNotifier(notifier: Notifier) {
    this.notifier = notifier;
  }

  //METODO ABSTRACTO
  abstract send(observer: Observer): void;
}
