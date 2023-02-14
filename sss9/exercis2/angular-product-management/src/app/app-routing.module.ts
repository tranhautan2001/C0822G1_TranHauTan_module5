
import {ProductListComponent} from './product/product-list/product-list.component';
import {ProductCreateComponent} from './product/product-create/product-create.component';
import {ProductEditComponent} from "./product/product-edit/product-edit.component";


class Routes {
}

const routes: Routes = [{
  path: '',
  component: ProductListComponent
}, {
  path: 'create',
  component: ProductCreateComponent
}, {
  path: 'edit/:id',
  component: ProductEditComponent
}
];

// @ts-ignore
let RouterModule;

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
