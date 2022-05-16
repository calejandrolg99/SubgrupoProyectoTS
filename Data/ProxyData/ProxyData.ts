import { Data } from "../data";

export abstract class ProxyData implements Data<Data<any,any>[],Data<any,any>> {
    //ATRIBUTOS
    protected data:Data<any,any>;


    //CONSTRUCTOR
    constructor(data: Data<any,any>){
        this.data = data;
    }

    //METODOS
    abstract getValue():Data<any,any>[]

    abstract modifyValue(context: Data<any,any>): void

    abstract checkAccess():boolean

}