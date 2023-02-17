import {Class} from "./class";

export interface Student {
  id?: number;
  name?: string;
  dateOfBirth?: string;
  point?: string;
  email?: string;
  address?: string;
  Class?: Class;
}
