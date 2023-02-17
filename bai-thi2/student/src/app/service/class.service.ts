import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Class} from "../model/class";


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private httpClient: HttpClient) { }
  getAllClass(){
    return this.httpClient.get<Class[]>("http://localhost:3000/Class")
  }

}
