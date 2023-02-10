import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";
import {Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-product-create',
  templateUrl:'./product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categoryList: Category[] = []

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  })



  constructor(private productService: ProductService,
              private router: Router,
  private categoryService: CategoryService) {
        this.categoryService.getAll().subscribe(next =>{
          this.categoryList = next;
        })
  }

  ngOnInit(): void {
  }
 submit(){

 }
 createProduct(){
    this.productService.addProduct(this.productForm.value).subscribe(data => {
      alert("thêm mới thành công");
      this.router.navigate([""])
    })
 }
}
