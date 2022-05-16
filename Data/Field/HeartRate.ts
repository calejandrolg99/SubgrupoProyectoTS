import { Field } from "./Field";
import { FieldNames } from "./FieldEnum";

export class HeartRate extends Field<FieldNames,number>{

    constructor(value: number){
        super(FieldNames.HeartRate,value);
    
    }

}
