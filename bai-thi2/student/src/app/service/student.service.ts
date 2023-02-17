import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient:HttpClient) { }
  getAllStudent(){
    return this.httpClient.get<Student[]>("http://localhost:3000/student")
  }
  delete(id: number){
    return this.httpClient.delete<Student>("http://localhost:3000/student/"+id)
  }
  addStudent(student: Student) {
    return this.httpClient.post("http://localhost:3000/student",student);
  }
  findById(id: number){
    return this.httpClient.get<Student>("http://localhost:3000/student/"+id)
  }
  updateStudent(id: number , student: Student){
    return this.httpClient.put("http://localhost:3000/student/"+id,student)
  }

  searchStudent(name: string) {
    return this.httpClient.get<Student[]>("http://localhost:3000/student?name_like="+name)
  }
}
