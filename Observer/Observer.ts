import { Notifier } from "../Notifier/Notifier";

export interface Observer {

    update(context:Notifier):void
    

}