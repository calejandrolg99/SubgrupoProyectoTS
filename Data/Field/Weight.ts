import { Field } from "./Field";
import { FieldNames } from "./FieldEnum";

export class Weight extends Field<FieldNames,number>{
    //CONSTRUCTOR
    constructor(value: number){
        super(FieldNames.Weight,value);
    
    }

}
