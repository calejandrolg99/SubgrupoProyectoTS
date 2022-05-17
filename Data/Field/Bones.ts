import { Field } from "./Field";
import { FieldNames } from "./FieldEnum";

export class Bones extends Field<FieldNames,number>{
    //CONSTRUCTOR
    constructor(value: number){
        super(FieldNames.Bones,value);
    
    }

}
