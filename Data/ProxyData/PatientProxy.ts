import { ProxyData } from "./ProxyData";


export class PatientProxy extends ProxyData {
    
    //METODOS
    checkAccess(acceser: {name:string}): boolean {
        if(acceser.name == 'Paciente'){
            return false;
        }
    }

}