import { Appointment } from "../Appointment";
import { Observer } from "../../Observer/Observer";

export class FaceToFace extends Appointment {
  //ATRIBUTOS
  protected direccion: string;

  //CONSTRUCTOR
  constructor(
    date: string,
    time: string,
    status: string,
    patient: Observer,
    direccion: string
  ) {
    super(date, time, status, patient);
    this.direccion = direccion;
  }

  //METODO ABSTRACTO
  getData(): string[] {
    return new Array(this.date, this.time, this.status, this.direccion);
  }
}
