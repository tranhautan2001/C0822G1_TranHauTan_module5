import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../service/customer.service";
import {CustomerTypeService} from "../../../service/customer-type.service";
import {Router} from "@angular/router";
import {CustomerType} from "../../../model/customer-type";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  CustomerTypeList: CustomerType[] = [];

  customerForm: FormGroup = new FormGroup({
    id: new FormControl(),
    customerCode: new FormControl(),
    customerType: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    idCard: new FormControl(),
    phoneNumber: new FormControl(),
    gender: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
  })

  constructor(private customerService: CustomerService,
              private customerTypeService:CustomerTypeService,
              private router: Router) {
    this.customerTypeService.getAllCustomerType().subscribe(next =>{
      this.CustomerTypeList = next;
    })

  }

  ngOnInit(): void {
  }
  createCustomer(){

      this.customerService.add(this.customerForm.value).subscribe(data =>{
        console.log(data)
        alert("thêm mới thành công")
        this.router.navigateByUrl("customer-list");
      });



  }

}
