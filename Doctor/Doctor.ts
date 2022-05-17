import { Appointment } from "../Appointment/Appointment";
import { Observer } from "../Observer/Observer";
import { DataBuilder } from "../Builder/DataBuilder";
import { Data } from "../Data/Data";
import { Notifier } from "../Notifier/Notifier";
import { Specialty } from "../Specialty/Specialty";
import { SpecialitiesName } from "../Specialty/SpecialitiesName";
import { Memento } from "../Memento/Memento";

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

  //METODO
  addAppointment(appointment: Appointment) {}

  //METODO ABSTRACTO
  abstract makeMedicalHistory(builder: DataBuilder): Data<any, any>;

  //METODOS HEREDADO DE MEMENTO A TRAVES DE LA IMPLEMENTACION DE OBSERVABLE
  save(): Memento<any> {
    return new Memento(this, new Date());
  }

  //METODO DE INTERFACE OBSERVER
  update(notifier: Notifier) {
    throw new Error("Method not implemented.");
  }
}
