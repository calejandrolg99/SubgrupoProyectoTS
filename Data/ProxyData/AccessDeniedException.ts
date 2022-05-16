
export class AccessDeniedException extends Error {
    //CONSTRUCTOR
    constructor(){
        super('No dispone de los privelegios para realizar esta solicitud');
        this.name = 'AccessDenied'
    }


}