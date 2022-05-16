import { SpecialitiesName } from "./SpecialitiesName";

export class Specialty<SpecialitiesName> {
  //ATRIBUTOS
  protected nombre: SpecialitiesName;

  //CONSTRUCTOR
  constructor(nombre: SpecialitiesName) {
    this.nombre = nombre;
  }

  //GETTER Y SETTER
  public getSpecialty(): SpecialitiesName {
    return this.nombre;
  }
  public setSpecialty(nombre: SpecialitiesName) {
    this.nombre = nombre;
  }
}
