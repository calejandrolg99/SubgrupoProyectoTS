import { Field } from "./Field";
import { FieldNames } from "./FieldEnum";

export class BloodPleasure extends Field<FieldNames,number>{

    constructor(value: number){
        super(FieldNames.BloodPleasure,value);
    
    }

}
