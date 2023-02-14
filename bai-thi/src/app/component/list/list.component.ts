import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../service/customer.service';
import {Customer} from '../../model/customer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  customerList: Customer[] = [];
  customers: Customer ={};

  constructor(private customerService: CustomerService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  private getAll() {
    this.customerService.getAllCustomer().subscribe(next =>{
      this.customerList = next;
    })
  }

  deleteProduct() {
    if (this.customers.id != null){
      this.customerService.deleteCustomer(this.customers.id).subscribe(next =>{
        this.getAll()
        alert("xoa thanh cong")
      })
    }

  }

  search(name: string) {
    this.customerService.searchCustomer(name).subscribe(next =>{
      this.customerList =next;
    })
  }
}
