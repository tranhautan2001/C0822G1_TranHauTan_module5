import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }
  getAllCustomer(){
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer")
  }
  deleteCustomer(id: number){
    return this.httpClient.delete<Customer>("http://localhost:3000/customer/" +id)
  }
  addCustomer(customer: Customer){
    return this.httpClient.post("http://localhost:3000/customer",customer)

  }

  searchCustomer(name: string) {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer?name_like="+name)
  }
}
