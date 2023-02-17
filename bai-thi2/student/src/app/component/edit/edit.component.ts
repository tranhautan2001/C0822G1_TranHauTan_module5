import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../service/student.service";
import {ClassService} from "../../service/class.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Class} from "../../model/class";
import {FormControl, FormGroup} from "@angular/forms";
import {Student} from "../../model/student";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  classList: Class[] = [];



  public compareWith(object1: Student , object2: Student):boolean{
    return object1&& object2? object1.id === object2.id: object1 ===object2
  }

  studentForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    point: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    Class: new FormControl(),
  })

  constructor(private studentService: StudentService,
              private classService: ClassService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
     this.activatedRoute.paramMap.subscribe(data =>{
       const id = +data.get('id');
       if (id != null){
         this.getAll(id);
       }
     })

  }

  ngOnInit(){
    this.classService.getAllClass().subscribe(data =>{
      this.classList = data;
    })

  }


   getAll(id: number) {
    this.studentService.findById(id).subscribe(data =>{
      this.studentForm.patchValue(data);
    })
  }

  updateStudent(){
    if (this.studentForm.valid){
    const student = this.studentForm.value;
    this.studentService.updateStudent(student.id, student).subscribe(data =>{
      alert("chỉnh sửa thành công")
      this.router.navigateByUrl('')
    })
  }
  }
}
