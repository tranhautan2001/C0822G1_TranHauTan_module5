import {ContractDetail} from "./contract-detail";
import {AttachFacility} from "./attach-facility";

export interface Contract {
  id?: number;
  startDate?: string,
  endDate?: string,
  deposit?: string,
  ContractDetail?: ContractDetail;
  AttachFacility?: AttachFacility;
}
