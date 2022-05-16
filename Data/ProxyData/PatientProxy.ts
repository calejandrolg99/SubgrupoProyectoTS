import { Data } from "../Data";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProxyData } from "./ProxyData";


export class PatientProxy extends ProxyData {

    getValue(): Data<any, any>[] {
        return this.data.getValue();
    }


    modifyValue(context: Data<any, any>): void {
        this.checkAccess();
    }
    
    //METODOS
    checkAccess(): boolean {
        throw new AccessDeniedException();
        
    }
        
}