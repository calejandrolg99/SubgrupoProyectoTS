import { Data } from "../data";

export abstract class ProxyData implements Data<Data<any,any>[],any[]> {
    //PROPIEDADES
    private data:Data<any,any>;

    constructor(data: Data<any,any>){
        this.data = data;
    }


    //METODOS
    getValue():Data<any,any>[] {
        return this.data.getValue();
    }

    modifyValue(context: any[]): void {
        if (this.checkAccess(context.pop())) {
            this.data.modifyValue(context.pop());
        }
    }

    abstract checkAccess(context: object):boolean

}