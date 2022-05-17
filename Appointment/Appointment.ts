import { Memento } from "../Memento/Memento";
import { Notifier } from "../Notifier/Notifier";
import { Observable } from "../Observer/Observable";
import { Observer } from "../Observer/Observer";
import { Status } from "./Status";

export abstract class Appointment implements Observable {
  //ATRIBUTOS
  protected date: string;
  protected time: string;
  protected status: Status;
  protected patient: Observer;

  //CONSTRUCTOR
  constructor(date: string, time: string, status: Status, patient: Observer) {
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
  setStatus(status: Status) {
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

  notifyall(notifier: Notifier): void {
    this.patient.update(notifier);
  }

  //METODOS HEREDADO DE MEMENTO A TRAVES DE LA IMPLEMENTACION DE OBSERVABLE
  save(): Memento<any> {
      return new Memento(this,new Date());
  }


}
