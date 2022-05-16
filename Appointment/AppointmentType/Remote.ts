import { Appointment } from "../Appointment";
import { Observer } from "../../Observer/Observer";

export class Remote extends Appointment {
  //CONSTRUCTOR
  constructor(date: string, time: string, status: string, observer: Observer) {
    super(date, time, status, observer);
  }

  //METODO ABSTRACTO
  getData(): string {
    throw new Error("Method not implemented.");
  }
}
