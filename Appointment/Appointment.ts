import { Notifier } from "../Notifier/Notifier";
import { Observable } from "../Observer/Observable";
import { Observer } from "../Observer/Observer";

export abstract class Appointment implements Observable {
  //ATRIBUTOS
  protected date: string;
  protected time: string;
  protected status: string;
  protected patient: Observer;

  //CONSTRUCTOR
  constructor(date: string, time: string, status: string, patient: Observer) {
    this.date = date;
    this.time = time;
    this.status = status;
    this.patient = patient;
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

  getPatient() {
    return this.patient;
  }
  setPatient(patient: Observer) {
    this.patient = patient;
  }

  //METODO ABSTRACTO
  abstract getData(): string[];

  //METODOS IMPLEMENTADOS DE OBSERVABLE

  add(patient: Observer): void {
    this.patient = patient;
  }

  notifyAll(notifier: Notifier): void {
    this.patient.update(notifier);
  }
}
