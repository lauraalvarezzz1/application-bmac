import {EducationModel} from "./education.model";
import {EmploymentModel} from "./employment.model";
import {InformationModel} from "./information.model";
import {MilitaryServiceModel} from "./military-service.model";
import {ReferencesModel} from "./references.model";
import {SignatureModel} from "./signature.model";

export class FormModel {
    education: EducationModel;
    employment: EmploymentModel;
    information: InformationModel;
    militaryService: MilitaryServiceModel;
    references: ReferencesModel;
    signature: SignatureModel;
  }