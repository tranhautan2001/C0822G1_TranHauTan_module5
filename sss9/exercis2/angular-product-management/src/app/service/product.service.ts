import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  httpClient: HttpClient) {}
  getAll():Observable<Product[]> {
    return this.httpClient.get<Product[]>("http://localhost:3000/product");
  }

  addProduct(event: any){
    return this.httpClient.post("http://localhost:3000/product",event)
  }


  findById(id: number): Observable<Product>{
   return this.httpClient.get<Product>('http://localhost:3000/product' + `/` + id)
  }

  updateProduct(id:number, product:Product){
    return this.httpClient.put<Product>('http://localhost:3000/product' + `/` + id,product)
  }


  deleteProduct(id: number) {
    return this.httpClient.delete<Product>('http://localhost:3000/product' + `/` + id);
  }
}


