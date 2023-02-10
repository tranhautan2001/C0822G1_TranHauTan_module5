import { Component, OnInit } from '@angular/core';
import {Contract} from "../../../model/contract";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contractList: Contract[] = [
    {id:1 , startDate:'27-02-2001', endDate: '25-12-2023', deposit: 'thân thiện'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
