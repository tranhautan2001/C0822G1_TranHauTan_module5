import { Component, OnInit } from '@angular/core';
import {ClassService} from "../../service/class.service";
import {StudentService} from "../../service/student.service";
import {Router} from "@angular/router";
import {Class} from "../../model/class";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  classList: Class [] = [];

  studentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    point: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    Class: new FormControl(),
  })

  constructor(private classService:ClassService,
              private studentService: StudentService,
              private router: Router) {
 this.classService.getAllClass().subscribe(data =>{
   this.classList = data;
 })
  }

  ngOnInit(): void {
  }
  createStudent(){
    if (this.studentForm.valid){
      this.studentService.addStudent(this.studentForm.value).subscribe(data =>{
        alert("thêm mới thành công")
        this.router.navigateByUrl('');
      })
    }
  }

}
