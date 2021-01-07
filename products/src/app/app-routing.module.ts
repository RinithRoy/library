import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditDeleteProductComponent } from './edit-delete-product/edit-delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = 
      [
        {path:'',component:ProductListComponent},
        {path:'add',component:NewProductComponent},
        {path:'signup',component:SignupComponent},
        {path:'login',component:LoginComponent},
        {path:'edit',component:EditDeleteProductComponent},
        {path:'update/:id',component:UpdateProductComponent}
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
