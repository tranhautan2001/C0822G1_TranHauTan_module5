import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customerTypeList: CustomerType [] = [];
  public compareWith(object1: CustomerType, object2: CustomerType): boolean {
    return object1 && object2 ? object1.id === object2.id : object1 === object2;
  }

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl("",[Validators.required]),
    area: new FormControl("",[Validators.required]),
    cost: new FormControl("",[Validators.required]),
    maxPeople: new FormControl("",[Validators.required]),
    poolArea: new FormControl("",[Validators.required]),
    customerType: new FormControl("",[Validators.required]),
  })

  constructor(private customerService: CustomerService,
              private customerTypeService:CustomerTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
      this.activatedRoute.paramMap.subscribe(next =>{
        const id = +next.get('id')
        if (id != null){
          this.getCustomer(id);
        }
      })

  }

  ngOnInit() {
    this.customerTypeService.getAllCustomerType().subscribe(next =>{
      this.customerTypeList = next;
    })
  }


   getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(next=>{
      this.customerForm.patchValue(next);
    })

  }
  updateCustomer(){
    const customer = this.customerForm.value;
    this.customerService.updateCustomer(customer.id, customer).subscribe(next =>{
      this.router.navigateByUrl('');
      alert("sua thanh cong");
    })
  }
}
