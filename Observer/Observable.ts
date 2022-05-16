import { Notifier } from "../Notifier/Notifier";
import { Observer } from "./Observer";

export interface Observable {

    add(...observer:Observer[]):void
    notifyall(notifier:Notifier):void

}