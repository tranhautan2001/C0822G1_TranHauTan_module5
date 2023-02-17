import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BenhAn} from '../model/benh-an';

@Injectable({
  providedIn: 'root'
})
export class BenhAnService {

  constructor(private httpClient: HttpClient) { }
  getAllBenhAn(){
    return this.httpClient.get<BenhAn[]>("http://localhost:8080/BenhAn")
  }

  delete(id: number){
    return this.httpClient.delete<BenhAn>("http://localhost:8080/BenhAn/"+id)
  }

  findById(id: number) {
    return this.httpClient.get<BenhAn[]>("http://localhost:3000/BenhAn/"+id)
  }

  update(id: number,benhAn:BenhAn ) {
    return this.httpClient.put("http://localhost:8080/BenhAn/"+id,benhAn)
  }
}
