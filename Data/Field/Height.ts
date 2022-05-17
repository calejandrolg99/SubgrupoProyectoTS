import { Field } from "./Field";
import { FieldNames } from "./FieldEnum";

export class Height extends Field<FieldNames,number>{
    //CONSTRUCTOR
    constructor(value: number){
        super(FieldNames.Height,value);
    
    }

}
