import { Data } from "./data";
import { Field } from "./Field/Field";
import { FieldNames } from "./Field/FieldEnum";


export class History implements Data<Array<Field<FieldNames,any>>,Field<FieldNames,any>>{

    private fields: Array<Field<FieldNames,any>>;

    constructor(){
        this.fields = new Array<Field<FieldNames,any>>();
    }

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

    addField(field: Field<FieldNames,any>):void {
        this.fields.push(field);
    }
 

}