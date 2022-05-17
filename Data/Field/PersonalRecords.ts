import { Field } from "./Field";
import { FieldNames } from "./FieldEnum";

export class PersonalRecords extends Field<FieldNames,string>{
    //CONSTRUCTOR
    constructor(value: string){
        super(FieldNames.PersonalRecords,value);
    
    }

}
