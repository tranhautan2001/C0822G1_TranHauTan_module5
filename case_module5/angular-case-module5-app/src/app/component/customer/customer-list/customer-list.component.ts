import { Component, OnInit } from '@angular/core';
import {Customer} from "../../../model/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

customerList: Customer[] =[
  {id: 1, name:'Nguyễn Thị Hào' ,dateOfBirth:"1970-11-07",email:'thihao07@gmail.com',idCard: "643431213" ,gender:"1" ,phoneNumber:'0945423362',address:"23 Nguyễn Hoàng, Đà Nẵng"},
  {id: 2, name:'Nguyễn Thị Hào' ,dateOfBirth:"1970-11-07",email:'thihao07@gmail.com',idCard: "643431213" ,gender:"1" ,phoneNumber:'0945423362',address:"23 Nguyễn Hoàng, Đà Nẵng"},
  {id: 3, name:'Nguyễn Thị Hào' ,dateOfBirth:"1970-11-07",email:'thihao07@gmail.com',idCard: "643431213" ,gender:"1" ,phoneNumber:'0945423362',address:"23 Nguyễn Hoàng, Đà Nẵng"},
  {id: 4, name:'Nguyễn Thị Hào' ,dateOfBirth:"1970-11-07",email:'thihao07@gmail.com',idCard: "643431213" ,gender:"1" ,phoneNumber:'0945423362',address:"23 Nguyễn Hoàng, Đà Nẵng"},
]

  constructor() { }

  ngOnInit(): void {
  }

}
