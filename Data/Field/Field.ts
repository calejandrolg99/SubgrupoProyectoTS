import { Data } from "../Data";

export class Field<E,F> implements Data<F,F>{
    //ATRIBUTOS
    protected readonly name: E
    private value:F

    //CONSTRUCTOR
    protected constructor(name:E , value: F){
        this.value = value;
        this.name = name;
    }

    //METODOS IMPLEMENTADOS DE DATA
    getValue(): F {
        return this.value;
    }

    modifyValue(context: F): void {
        this.value = context;
    }

    // GETTER DE LA PROPIEDAD NAME
    getname(): E {
        return this.name;
    }

}
