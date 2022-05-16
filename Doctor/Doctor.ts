import { Appointment } from "../Appointment/Appointment";
import { Specialty } from "../Specialty/Specialty";
import { T } from "../Specialty/Enum";
import { Observer } from "../Observer/Observer";
import { DataBuilder } from "../Builder/DataBuilder";
import { Data } from "../Data/Data";
import { Notifier } from "../Notifier/Notifier";

export abstract class Doctor implements Observer {
  //ATRIBUTOS
  protected name: string;
  protected appointment: Appointment[];
  protected specialty: Specialty<T>[];

  //CONSTRUCTOR
  constructor(name: string, specialty: Specialty<T>) {
    this.name = name;
    this.specialty = [specialty];
  }

  //GETTER Y SETTER
  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }

  getSpecialty() {
    return this.specialty;
  }
  setSpecialty(specialty: Specialty<T>) {
    this.specialty.push(specialty);
  }

  getAppointment() {
    return this.appointment;
  }

  //METODO ABSTRACTO
  abstract addAppointment(appointment: Appointment);
  abstract makeMedicalHistory(builder: DataBuilder): Data;

  //METODO DE INTERFACE OBSERVER
  update(notifier: Notifier) {
    throw new Error("Method not implemented.");
  }
}
