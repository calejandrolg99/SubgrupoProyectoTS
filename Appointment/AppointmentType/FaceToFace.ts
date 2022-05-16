import { Appointment } from "../Appointment";
import { Observer } from "../../Observer/Observer";

export class FaceToFace extends Appointment {
  //CONSTRUCTOR
  constructor(
    date: string,
    time: string,
    status: string,
    doctor: Observer,
    patient: Observer
  ) {
    super(date, time, status, doctor, patient);
  }

  //METODO ABSTRACTO
  getData(): string {
    throw new Error("Method not implemented.");
  }
}
