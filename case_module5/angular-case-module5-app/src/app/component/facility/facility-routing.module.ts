import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule, Routes} from "@angular/router";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityEditComponent} from "./facility-edit/facility-edit.component";
import {FacilityCreateComponent} from "./facility-create/facility-create.component";

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo:'facility-list'},
  {path: 'facility-list',component: FacilityListComponent},
  {path: 'facility-edit', component: FacilityEditComponent},
  {path: 'facility-create', component: FacilityCreateComponent},

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class FacilityRoutingModule {

}
