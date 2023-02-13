import {Component, OnInit} from "@angular/core";
import {Category} from "../../../model/category";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {ProductService} from "../../../service/product.service";


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  categoryList: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    category: new FormControl()
  })

  constructor(private categoryService: CategoryService,
              private router: Router,
              private productService: ProductService) {
    this.categoryService.getAllCategory().subscribe(next =>{
      this.categoryList = next;
    })
  }

  ngOnInit(): void {
  }

  createProduct(){
    this.productService.addProduct(this.productForm.value).subscribe(data =>{
      alert("thêm mới thành công");
      this.router.navigateByUrl("")
    })
  }
}
