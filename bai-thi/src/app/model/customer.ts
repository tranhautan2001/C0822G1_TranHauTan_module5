import {CustomerType} from './customer-type';

export interface Customer {
  id?: number,
  name?: string,
  area?: string,
  cost?: string,
  maxPeople?: string,
  poolArea?: string,
  customerType?: CustomerType
}
