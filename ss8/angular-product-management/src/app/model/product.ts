import {Category} from "./category";

export interface Product {
  id?: number;
  name?: string;
  email?: string;
  address?: string;
  category?: Category;
}
