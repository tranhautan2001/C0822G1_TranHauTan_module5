import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup(
      {
        email: new FormControl("", [Validators.required,Validators.email]),
        password: new FormControl("", [Validators.required,Validators.minLength(6)]),
        confirmPassword: new FormControl("", [Validators.required]),
        country: new FormControl("",[Validators.required]),
        age: new FormControl("",[Validators.required,Validators.min(18)]),
        gender: new FormControl("",[Validators.required]),
        phone: new FormControl("",[Validators.required]),

      }
    )
  }

  ngOnInit(): void {
  }


  onSubmit() {

  }
}
