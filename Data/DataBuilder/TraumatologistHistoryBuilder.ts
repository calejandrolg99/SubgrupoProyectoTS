import { BloodPleasure } from "../Field/BloodPressure";
import { Bones } from "../Field/Bones";
import { HeartRate } from "../Field/HeartRate";
import { Height } from "../Field/Height";
import { PersonalRecords } from "../Field/PersonalRecords";
import { Saturation } from "../Field/Saturation";
import { Weight } from "../Field/Weight";
import { History } from "../History/History";
import { HistoryBuilder } from "./HistoryBuilder";

export class TraumatologistHistoryBuilder implements HistoryBuilder {
    //ATRIBUTOS
    private history: History

    constructor(){
        this.history = new History();
    }


    //METODOS IMPLEMENTADOS DE LA INTERFACE HISTORYBUILDER
    getResult(): History {
        return this.history;
    }

    buildHeartRate(value:number): void {
        this.history.addField(new HeartRate(value));
    }

    buildSaturation(value:number): void {
        this.history.addField(new Saturation(value))
    }

    buildWeight(value:number): void {
        this.history.addField(new Weight(value));
    }

    buildHeight(value:number): void {
        this.history.addField(new Height(value));
    }

    buildPersonalRecords(value:string): void {
        this.history.addField(new PersonalRecords(value));
    }
    
    buildBloodPressure(value: number): void {
        this.history.addField(new BloodPleasure(value));
    }

    //METODOS PROPIOS
    buildBones(value:number): void {
        this.history.addField(new Bones(value));
    }




}