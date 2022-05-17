import { Appointment } from "../../Appointment";
import { Observer } from "../../../Observer/Observer";
import { AccessDeniedException } from "./AccesDeniedException";

export class ProxyAppointment extends Appointment implements Appointment {
  //ATRIBUTOS
  protected appointment: Appointment;

  //CONSTRUCTOR
  constructor(
    date: string,
    time: string,
    status: string,
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
    return new Array(this.date, this.time, this.status);
  }

  //METODO
  CheckAccess(): boolean {
    //Chequeo de acceso a la cita
    throw new AccessDeniedException();
  }
}
