import { Memento } from "../../Memento/Memento";
import { Notifier } from "../../Notifier/Notifier";
import { Observable } from "../../Observer/Observable";
import { Observer } from "../../Observer/Observer";
import { Data } from "../data";
import { Field } from "../Field/Field";
import { FieldNames } from "../Field/FieldEnum";


export class History implements Data<Data<any,any>[],Data<any,any>>, Observable{
    //ATRIBUTOS
    private fields: Array<Data<any,any>>;
    private doctor: Observer;
    private patient: Observer;

    //CONSTRUCTOR
    constructor(){
        this.fields = new Array<Field<FieldNames,any>>();
    }

    //METODOS HEREDADO DE MEMENTO A TRAVES DE LA IMPLEMENTACION DE OBSERVABLE
    save(): Memento<any> {
        return new Memento(this,new Date());
    }

    //METODOS IMPLEMENTADOS DE OBSERVABLE

    add(doctor: Observer, patient:Observer): void {
        this.doctor = doctor;
        this.patient = patient;
    }

    notifyall(notifier: Notifier): void {
        this.patient.update(notifier);
    }

    //METODOS IMPLEMENTADOS DE DATA

    getValue(): Data<any,any>[] {
        return this.fields;
    }
 
    modifyValue(context: Data<any,any>): void {

        this.fields.forEach(element => {
            if (element.constructor.name == context.constructor.name){
                element.modifyValue(context.getValue())
            }
        });
    }

    //METODOS PROPIOS

    addField(field: Data<any,any>):void {
        this.fields.push(field);
    }
 

}