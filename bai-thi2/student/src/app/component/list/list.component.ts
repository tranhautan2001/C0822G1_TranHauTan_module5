import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {Student} from "../../model/student";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  studentList: Student[] = [];
  temp: Student = {};
  page: any;
  constructor(private studentService: StudentService,) {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll() {
     this.studentService.getAllStudent().subscribe(next =>{
       this.studentList = next;
     })
  }

  deleteStudent() {
    this.studentService.delete(this.temp.id).subscribe(data =>{
      this.getAll()
      alert("xóa học sinh thành công")

    })
  }

  search(name: string) {
    this.studentService.searchStudent(name).subscribe(data =>{
      this.studentList = data;
    })

  }
}
