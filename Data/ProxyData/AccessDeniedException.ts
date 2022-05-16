
export class AccessDeniedException extends Error {
    constructor(){
        super('No dispone de los privelegios para realizar esta solicitud');
        this.name = 'AccessDenied'
    }


}