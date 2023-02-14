import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  customerTypeList: CustomerType[] = [];

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
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerTypeService.getAllCustomerType().subscribe(next =>{
      this.customerTypeList = next;
    })
  }

  ngOnInit(): void {
  }
  createCustomer(){
    if (this.customerForm.valid){
      this.customerService.addCustomer(this.customerForm.value).subscribe(data =>{
        alert("them moi thanh cong")
        this.router.navigateByUrl('')
      })
    }

  }

}
