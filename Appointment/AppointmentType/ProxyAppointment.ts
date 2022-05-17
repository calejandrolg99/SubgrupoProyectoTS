import { Appointment } from "../Appointment";
import { Observer } from "../../Observer/Observer";

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
  getData(): string {
    throw new Error("Method not implemented.");
  }

  //METODO
  CheckAccess(): boolean {
    return; //Chequeo de accso
  }
}

function AccesDeniedException() {}
