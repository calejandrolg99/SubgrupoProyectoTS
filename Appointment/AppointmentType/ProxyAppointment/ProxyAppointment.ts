import { Appointment } from "../../Appointment";
import { Observer } from "../../../Observer/Observer";
import { AccessDeniedException } from "./AccesDeniedException";
import { Status } from "../../Status";

export class ProxyAppointment extends Appointment {
  //ATRIBUTOS
  protected appointment: Appointment;

  //CONSTRUCTOR
  constructor(
    date: string,
    time: string,
    status: Status,
    observer: Observer,
    appointment: Appointment
  ) {
    super(date, time, status, observer);
    this.appointment = appointment;
  }

  //GETTER
  getAppointment() {
    return this.appointment;
  }

  //METODO ABSTRACTO
  getData(): string[] {
    return new Array(this.date, this.time);
  }

  //METODO
  CheckAccess(): boolean {
    //Chequeo de acceso a la cita
    throw new AccessDeniedException();
  }
}
