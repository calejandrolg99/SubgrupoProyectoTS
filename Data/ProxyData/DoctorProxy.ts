import { Data } from "../Data";
import { AccessDeniedException } from "./AccessDeniedException";
import { ProxyData } from "./ProxyData";


export class DoctorProxy extends ProxyData {

    //METODOS HEREDADOS
    getValue(): Data<any, any>[] {
        if(this.checkAccess()){
            return this.data.getValue();
        }
    }

    modifyValue(context: Data<any, any>): void {
        if(this.checkAccess()){
            this.data.modifyValue(context)
        }
    }

    checkAccess(): boolean {
        //AQUI VALIDA SI EL DOCTOR PUEDE ACCEDER A LA HISTORIA
        throw new AccessDeniedException();
    }


}