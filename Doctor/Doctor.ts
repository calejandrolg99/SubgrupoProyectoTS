import { Appointment } from "../Appointment/Appointment";
import { Specialty } from "../Specialty/Specialty";
import { SpecialitiesName } from "../Specialty/SpecialitiesName";
import { Observer } from "../Observer/Observer";
import { DataBuilder } from "../Builder/DataBuilder";
import { Data } from "../Data/Data";
import { Notifier } from "../Notifier/Notifier";

export abstract class Doctor implements Observer {
  //ATRIBUTOS
  protected name: string;
  protected appointment: Appointment[];
  protected specialty: Specialty<SpecialitiesName>[];

  //CONSTRUCTOR
  constructor(name: string, specialty: Specialty<SpecialitiesName>) {
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
  setSpecialty(specialty: Specialty<SpecialitiesName>) {
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
