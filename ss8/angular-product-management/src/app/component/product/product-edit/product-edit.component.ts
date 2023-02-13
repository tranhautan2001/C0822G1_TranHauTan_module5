import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../../model/category";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../../service/category.service";
import {ProductService} from "../../../service/product.service";


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: number;
  categoryList: Category[] = [];
  public compareWith(object1: Category, object2: Category): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) {
    this.productForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      category: new FormControl(),
    });
    this.activatedRoute.paramMap.subscribe(data => {
      const id = +data.get('id');
      if (id != null) {
        this.getProduct(id)
      }
    });
  }
  ngOnInit(){
    this.categoryService.getAllCategory().subscribe(next =>{
      this.categoryList= next;
    })
  }
  getProduct(id: number) {
    return this.productService.findById(id).subscribe(next =>{
      this.productForm.patchValue(next);
    })
  }
  updateProduct(){
    const product = this.productForm.value;
    this.productService.updateProduct(product.id, product).subscribe(next =>{
      this.router.navigateByUrl("");
      alert("edit thành công")
    })
  }
}
