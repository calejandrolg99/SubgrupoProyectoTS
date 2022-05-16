import { Appointment } from "../../Appointment/Appointment";
import { DataBuilder } from "../../Builder/DataBuilder";
import { Data } from "../../Data/Data";
import { T } from "../../Specialty/Enum";
import { Specialty } from "../../Specialty/Specialty";
import { Doctor } from "../Doctor";

export class Dermatologist extends Doctor {
  //ATRIBUTOS
  protected appointments: Appointment[];

  //CONSTRUCTOR
  constructor(name: string, specialty: Specialty<T>) {
    super(name, specialty);
  }

  //METODOS ABSTRACTOS
  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }
  makeMedicalHistory(builder: DataBuilder): Data {
    throw new Error("Method not implemented."); ////////////////////////////////////////////////////////////
  }
}
