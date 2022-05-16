export enum T {
  ANESTHESIOLOGIST,
  DENTIST,
  DERMATOLOGIST,
  GYNECOLOGIST,
  NEUROLOGIST,
  OBSTETRICIAN,
  ONCOLOGIST,
  OPHTHALMOLOGIST,
  PATHOLOGIST,
  PEDIATRICIAN,
  PSYCHIATRIST,
  RADIOLOGIST,
  SURGEON,
  TRAUMATOLOGIST,
  UROLOGIST,
}

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
