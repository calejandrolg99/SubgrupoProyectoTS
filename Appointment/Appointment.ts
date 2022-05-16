import { Observable } from "../Observer/Observable";
import { Observer } from "../Observer/Observer";

export abstract class Appointment implements Observable {
  //ATRIBUTOS
  protected date: string;
  protected time: string;
  protected status: string;
  protected observer: Observer;

  //CONSTRUCTOR
  constructor(date: string, time: string, status: string, observer: Observer) {
    this.date = date;
    this.time = time;
    this.status = status;
    this.observer = observer;
  }

  //GETTER Y SETTER
  getDate() {
    return this.date;
  }
  setDate(date: string) {
    this.date = date;
  }

  getTime() {
    return this.time;
  }
  setTime(time: string) {
    this.time = time;
  }

  getStatus() {
    return this.status;
  }
  setStatus(status: string) {
    this.status = status;
  }

  getObserver() {
    return this.observer;
  }
  setObserver(observer: Observer) {
    this.observer = observer;
  }

  //METODO ABSTRACTO
  abstract getData(): string;

  //METODOS DE INTERFACE OBSERVABLE
  add(...observer: Observer[]): void {
    throw new Error("Method not implemented.");
  }

  notifyAll(): void {
    throw new Error("Method not implemented.");
  }
}
