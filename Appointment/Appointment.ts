import { Notifier } from "../Notifier/Notifier";
import { Observable } from "../Observer/Observable";
import { Observer } from "../Observer/Observer";

export abstract class Appointment implements Observable {
  //ATRIBUTOS
  protected date: string;
  protected time: string;
  protected status: string;
  protected doctor: Observer;
  protected patient: Observer;

  //CONSTRUCTOR
  constructor(
    date: string,
    time: string,
    status: string,
    doctor: Observer,
    patient: Observer
  ) {
    this.date = date;
    this.time = time;
    this.status = status;
    this.doctor = doctor;
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

  getDoctor() {
    return this.doctor;
  }
  setDoctor(doctor: Observer) {
    this.doctor = doctor;
  }

  getPatient() {
    return this.patient;
  }
  setPatient(patient: Observer) {
    this.patient = patient;
  }

  //METODO ABSTRACTO
  abstract getData(): string;

  //METODOS IMPLEMENTADOS DE OBSERVABLE

  add(doctor: Observer, patient: Observer): void {
    this.doctor = doctor;
    this.patient = patient;
  }

  notifyAll(notifier: Notifier): void {
    this.patient.update(notifier);
  }
}
