import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAll(){
    return this.httpClient.get<Product[]>("http://localhost:3000/product")
  }
  deleteProduct(id: number){
    return this.httpClient.delete("http://localhost:3000/product/"+id)
  }

  addProduct(product: Product) {
    return this.httpClient.post<Product[]>("http://localhost:3000/product",product)
  }
  findById(id: number): Observable<Product>{
    return this.httpClient.get<Product>("http://localhost:3000/product/"+id)
  }
  updateProduct(id:number, product: Product){
    return this.httpClient.put<Product[]>("http://localhost:3000/product/"+id, product)
  }
}
