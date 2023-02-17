import { Component, OnInit } from '@angular/core';
import {BenhAnService} from '../../service/benh-an.service';
import {BenhAn} from '../../model/benh-an';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  benhAnList: BenhAn [] = [];
  temp: BenhAn = {};
  constructor(private benhAnService: BenhAnService) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
    this.benhAnService.getAllBenhAn().subscribe(data =>{
      this.benhAnList = data;
    })
  }

  deleteBenhAn() {
  this.benhAnService.delete(this.temp.id).subscribe(data =>{
    this.getAll()
    alert("xóa thành công")

  })
  }
}
