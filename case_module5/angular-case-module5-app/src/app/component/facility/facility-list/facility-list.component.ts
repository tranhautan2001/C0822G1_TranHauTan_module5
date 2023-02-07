import { Component, OnInit } from '@angular/core';
import {Facility} from "../../../model/facility";

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
     facilityList: Facility[] = [
       {id :1, name:'Villa Beach Front', area : 25000, cost : 100000,maxPeople: 10, descriptionOtherConvenience: 'có hồ bơi', poolArea:'500',numberOfFloors: '4',facilityFree: 'bò húc'},
       {id :2, name:'Villa Beach Front', area : 25000, cost : 100000,maxPeople: 10, descriptionOtherConvenience: 'có hồ bơi', poolArea:'500',numberOfFloors: '4',facilityFree: 'bò húc'},
       {id :3, name:'Villa Beach Front', area : 25000, cost : 100000,maxPeople: 10, descriptionOtherConvenience: 'có hồ bơi', poolArea:'500',numberOfFloors: '4',facilityFree: 'bò húc'}
     ]
  constructor() { }

  ngOnInit(): void {
  }

}
