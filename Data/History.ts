import { Notifier } from "../Notifier/Notifier";
import { Observable } from "../Observer/Observable";
import { Observer } from "../Observer/Observer";
import { Data } from "./data";
import { Field } from "./Field/Field";
import { FieldNames } from "./Field/FieldEnum";


export class History implements Data<Array<Field<FieldNames,any>>,Field<FieldNames,any>>, Observable{

    private fields: Array<Field<FieldNames,any>>;
    private doctor: Observer;
    private patient: Observer;


    constructor(){
        this.fields = new Array<Field<FieldNames,any>>();
    }


    //----COMPORTAMIENTO AGREGADO DE OBSERVABLE-------------------------------

    add(doctor: Observer, patient:Observer): void {
        this.doctor = doctor;
        this.patient = patient;
    }

    notifyall(notifier: Notifier): void {
        this.patient.update(notifier);
    }

    //----COMPORTAMIENTO AGREGADO DE DATA-------------------------------

    getValue(): Field<FieldNames,any>[] {
        return this.fields;
    }
 
    modifyValue(context: Field<FieldNames,any>): void {

        this.fields.forEach(element => {
            if (element.getname() == context.getname()){
                element.modifyValue(context.getValue())
            }
        });
    }

    //----COMPORTAMIENTO PROPIO-------------------------------

    addField(field: Field<FieldNames,any>):void {
        this.fields.push(field);
    }
 

}