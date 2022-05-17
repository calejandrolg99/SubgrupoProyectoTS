import { Appointment } from "../Appointment";
import { Observer } from "../../Observer/Observer";
import { Status } from "../Status";

export class FaceToFace extends Appointment {
  //ATRIBUTOS
  protected address: string;

  //CONSTRUCTOR
  constructor(
    date: string,
    time: string,
    status: Status,
    patient: Observer,
    address: string
  ) {
    super(date, time, status, patient);
    this.address = address;
  }

  //GETTER Y SETTER
  getAddress() {
    return this.address;
  }
  setAddress(address: string) {
    this.address = address;
  }

  //METODO ABSTRACTO
  getData(): string[] {
    return new Array(this.date, this.time, this.address);
  }
}
