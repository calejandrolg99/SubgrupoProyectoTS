import { Appointment } from "../Appointment/Appointment";
import { DataBuilder } from ".../Builder/DataBuilder";
import { Data } from ".../Data/Data";
import { Specialty } from "../Specialty/Specialty";
import { T } from "../Specialty/Specialty";

export abstract class Doctor {
  //ATRIBUTOS
  protected name: string;
  protected appointment: Appointment; //////////////////////////////////
  protected specialty: Specialty<T>;

  //CONSTRUCTOR
  constructor(name: string, specialty: Specialty<T>) {
    this.name = name;
    this.specialty = specialty;
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
  setpecialty(specialty: Specialty<T>) {
    this.specialty = specialty;
  }

  //METODO ABSTRACTO
  abstract addAppointment(appointment: Appointment);
  abstract makeMedicalHistory(builder: DataBuilder): Data;
}
