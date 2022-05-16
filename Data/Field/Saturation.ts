import { Field } from "./Field";
import { FieldNames } from "./FieldEnum";

export class Saturation extends Field<FieldNames,number>{
    //CONSTRUCTOR
    constructor(value: number){
        super(FieldNames.Saturation,value);
    
    }

}
