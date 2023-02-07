import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-edit', component: FacilityEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
