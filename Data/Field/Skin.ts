import { Field } from "./Field";
import { FieldNames } from "./FieldEnum";

export class Skin extends Field<FieldNames,string>{
    //CONSTRUCTOR
    constructor(value: string){
        super(FieldNames.Skin,value);
    
    }

}
