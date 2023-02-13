import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../service/product.service";
import {Product} from "../../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = []
  temp: Product = {};

  constructor(private productService: ProductService) {
    this.getAll()
  }

  ngOnInit(): void {
  }

  getAll() {
    this.productService.getAll().subscribe(next =>{
      this.products = next
    })
  }

  deleteProduct() {
    if (this.temp.id != null) {
      this.productService.deleteProduct(this.temp.id).subscribe(next => {
        this.getAll();
        alert("xóa thành công");
      })
    }
  }
}
