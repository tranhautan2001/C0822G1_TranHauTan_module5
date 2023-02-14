import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contract} from "../model/contract";

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) { }
  getAllContract(){
    return this.httpClient.get<Contract[]>("http://localhost:3000/contract")
  }
}
