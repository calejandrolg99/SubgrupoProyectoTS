import { Appointment } from "../../Appointment/Appointment";
import { Criteria } from "../../Criteria/Criteria";
import { Data } from "../../Data/Data";
import { TraumatologistHistoryBuilder } from "../../Data/DataBuilder/TraumatologistHistoryBuilder";
import { FieldNames } from "../../Data/Field/FieldEnum";
import { SpecialitiesName } from "../../Specialty/SpecialitiesName";
import { Specialty } from "../../Specialty/Specialty";
import { Doctor } from "../Doctor";

export class Traumatologist extends Doctor {
  //ATRIBUTOS
  protected appointments: Appointment[];

  //CONSTRUCTOR
  constructor(name: string, specialty: Specialty<SpecialitiesName>) {
    specialty = new Specialty<SpecialitiesName>(
      SpecialitiesName.Traumatologist
    );
    super(name, specialty);
  }

  //METODOS ABSTRACTOS
  makeMedicalHistory(builder: TraumatologistHistoryBuilder, criteria: Criteria<FieldNames, any>): Data<any, any> {

    for (const key of criteria.getKeys()) {
      switch (key) {
        case FieldNames.BloodPleasure:
          builder.buildBloodPressure(criteria.getValue(key));
          break;
        case FieldNames.HeartRate:
          builder.buildHeartRate(criteria.getValue(key));
          break;
        case FieldNames.Height:
          builder.buildHeight(criteria.getValue(key));
          break;
        case FieldNames.Weight:
          builder.buildWeight(criteria.getValue(key));
          break;
        case FieldNames.PersonalRecords:
          builder.buildPersonalRecords(criteria.getValue(key));
          break;
        case FieldNames.Saturation:
          builder.buildSaturation(criteria.getValue(key));
          break;
        case FieldNames.Bones:
          builder.buildBones(criteria.getValue(key));
          break;
      }

    }

    return builder.getResult();

  }
  
}
