import { ProxyData } from "./ProxyData";


export class DoctorProxy extends ProxyData {

    //METODOS
    checkAccess(conditions: {ownerSource:string, acceser:string}): boolean {

        if(conditions.ownerSource == conditions.acceser){
            return true;
        }
        return false;
    }

}