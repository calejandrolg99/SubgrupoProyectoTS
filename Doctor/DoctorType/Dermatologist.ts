import { Appointment } from "../../Appointment/Appointment";
import { Data } from "../../Data/Data";
import { DataBuilder } from "../../Data/DataBuilder/DataBuilder";
import { SpecialitiesName } from "../../Specialty/SpecialitiesName";
import { Specialty } from "../../Specialty/Specialty";
import { Doctor } from "../Doctor";

export class Dermatologist extends Doctor {
  //ATRIBUTOS
  protected appointments: Appointment[];

  //CONSTRUCTOR
  constructor(name: string, specialty: Specialty<SpecialitiesName>) {
    specialty = new Specialty<SpecialitiesName>(SpecialitiesName.Dermatologist);
    super(name, specialty);
  }

  //METODOS ABSTRACTOS
  makeMedicalHistory(builder: DataBuilder): Data<any,any> {
    throw new Error("Method not implemented."); ////////////////////////////////////////////////////////////
  }
}
