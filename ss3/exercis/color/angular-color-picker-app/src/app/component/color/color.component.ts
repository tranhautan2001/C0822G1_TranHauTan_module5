import { Component, OnInit } from '@angular/core';
import {color} from "../model/color";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  color: color = {id: 5 , name: "tân" , color: "blue"  }

  constructor() { }

  ngOnInit(): void {
  }


  changerColorOfStudent(target: any) {
    this.color.name = target.value


  }
}
