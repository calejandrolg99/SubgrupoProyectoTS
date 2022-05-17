export class Specialty<T> {
  //ATRIBUTOS
  protected nombre: T;

  //CONSTRUCTOR
  constructor(nombre: T) {
    this.nombre = nombre;
  }

  //GETTER Y SETTER
  public getSpecialty(): T {
    return this.nombre;
  }
  public setSpecialty(nombre: T) {
    this.nombre = nombre;
  }
}
