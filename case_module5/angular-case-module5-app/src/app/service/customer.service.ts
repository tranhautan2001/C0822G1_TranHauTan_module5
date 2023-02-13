import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "../model/customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll() {
    return this.httpClient.get<Customer[]>("http://localhost:3000/customer");

  }

  /*  findById(id: number): Observable<Customer>{
      return this.httpClient.get<Customer>("http://localhost:3000/customer/"+id)
    }*/

  delete(id: number) {
    return this.httpClient.delete("http://localhost:3000/customer/" + id);
  }

  add(customer: Customer) {
    return this.httpClient.post("http://localhost:3000/customer", customer);
  }
}
