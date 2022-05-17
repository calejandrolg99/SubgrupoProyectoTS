import { Appointment } from "../Appointment";
import { Observer } from "../../Observer/Observer";

export class Remote extends Appointment {
  //ATRIBUTO
  protected via: string;
  protected link: string;

  //CONSTRUCTOR
  constructor(
    date: string,
    time: string,
    status: string,
    patient: Observer,
    via: string,
    link: string
  ) {
    super(date, time, status, patient);
    this.via = via;
    this.link = link;
  }

  //GETTER Y SETTER
  getVia() {
    return this.via;
  }
  setVia(via: string) {
    this.via = via;
  }

  getLink() {
    return this.link;
  }
  setLink(link: string) {
    this.link = link;
  }

  //METODO ABSTRACTO
  getData(): string[] {
    return new Array(this.date, this.time, this.status, this.via, this.link);
  }
}
