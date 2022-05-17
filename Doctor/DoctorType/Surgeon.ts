import { Appointment } from "../../Appointment/Appointment";
import { DataBuilder } from "../../Builder/DataBuilder";
import { Data } from "../../Data/Data";
import { SpecialitiesName } from "../../Specialty/SpecialitiesName";
import { Specialty } from "../../Specialty/Specialty";
import { Doctor } from "../Doctor";

export class Surgeon extends Doctor {
  //ATRIBUTOS
  protected appointments: Appointment[];

  //CONSTRUCTOR
  constructor(name: string, specialty: Specialty<SpecialitiesName>) {
    specialty = new Specialty<SpecialitiesName>(SpecialitiesName.Surgeon);
    super(name, specialty);
  }

  //METODOS ABSTRACTOS
  makeMedicalHistory(builder: DataBuilder): Data {
    throw new Error("Method not implemented."); ////////////////////////////////////////////////////////////
  }
}