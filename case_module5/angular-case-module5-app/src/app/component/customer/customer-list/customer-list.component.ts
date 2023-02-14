import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer";
import {CustomerService} from "../../../service/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

customerList: Customer[] =[]
  delete: Customer = {};
  page: string | number;

  constructor(private customerService: CustomerService) {
  this.getAll();
  }

  ngOnInit(): void {
  }

   getAll() {
    this.customerService.getAll().subscribe(next =>{
      this.customerList = next;

    },error => {

    },() =>{

    })
  }

  deleteCustomer() {
    this.customerService.delete(this.delete.id).subscribe(next =>{
      this.getAll()
      alert("xóa thành công")
    })
  }
}
