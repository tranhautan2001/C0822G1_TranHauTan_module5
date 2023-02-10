import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] =[];

  temp: Product = {};
  constructor(private productService: ProductService) {
    this.getAll();
  }

  ngOnInit() {

  }

  getAll(){
    this.productService.getAll().subscribe(next =>{
      console.log(next);
      this.products = next;

    }, error => {

    }, () => {

    });
  }


  deleteProduct() {
    if (this.temp.id != null) {
      this.productService.deleteProduct(this.temp.id).subscribe(data => {
        this.getAll();
        alert("Delete success");
      }, error => {

      },()=>{

      })
    }
  }
}
