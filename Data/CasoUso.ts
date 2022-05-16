import { BloodPleasure } from "./Field/BloodPressure";
import { HeartRate } from "./Field/HeartRate";
import { PersonalRecords } from "./Field/PersonalRecords";
import { Saturation } from "./Field/Saturation";
import { History } from "./History";
import { PatientProxy } from "./ProxyData/PatientProxy";


var field1 = new BloodPleasure(5);
var field2 = new HeartRate(45);
var field3 = new Saturation(10);
var field4 = new PersonalRecords('Registros Personales')
var field5 = new Saturation(5);
var history = new History();
history.addField(field1);
history.addField(field2);
history.addField(field3);
history.addField(field4);


var proxy = new PatientProxy(history);
proxy.modifyValue([field5,{name:'d'}]);
console.log(proxy.getValue());
