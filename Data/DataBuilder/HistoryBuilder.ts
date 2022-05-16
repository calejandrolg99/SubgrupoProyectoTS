import { History } from "../History/History";
import { DataBuilder } from "./DataBuilder";

export interface HistoryBuilder extends DataBuilder {
    //METODOS DEFINIDOS EN EL CONTRATO
    getResult(): History
    buildHeartRate(value: number):void
    buildSaturation(value: number):void
    buildWeight(value: number):void
    buildHeight(value: number):void
    buildPersonalRecords(value: string):void

}