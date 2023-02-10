import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {ContractListComponent} from "./component/contract/contract-list/contract-list.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'facility-list', component: FacilityListComponent},
  {path: 'facility-edit', component: FacilityEditComponent},
  {path: 'facility-create', component: FacilityCreateComponent},
  {path: 'customer-list', component: CustomerListComponent},
  {path: 'customer-edit', component: CustomerEditComponent},
  {path: 'customer-create', component: CustomerCreateComponent},
  {path: 'contract-list', component: ContractListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
