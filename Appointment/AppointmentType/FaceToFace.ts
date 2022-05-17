import { Appointment } from "../Appointment";
import { Observer } from "../../Observer/Observer";
import { Status } from "../Status";

export class FaceToFace extends Appointment {
  //ATRIBUTOS
  protected direccion: string;

  //CONSTRUCTOR
  constructor(
    date: string,
    time: string,
    status: Status,
    patient: Observer,
    direccion: string
  ) {
    super(date, time, status, patient);
    this.direccion = direccion;
  }

  //GETTER Y SETTER
  getDireccion() {
    return this.direccion;
  }
  setDireccion(direccion: string) {
    this.direccion = direccion;
  }

  //METODO ABSTRACTO
  getData(): string[] {
    return new Array(this.date, this.time, this.direccion);
  }
}
