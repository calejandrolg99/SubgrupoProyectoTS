import { Data } from "../Data";

export interface DataBuilder {
    //METODOS DEFINIDOS EN EL CONTRATO
    getResult():Data<any,any>

}