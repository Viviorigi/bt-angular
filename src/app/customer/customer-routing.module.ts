import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterviewComponent } from './masterview/masterview.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BanhSinhNhatComponent } from './banh-sinh-nhat/banh-sinh-nhat.component';
import { AboutProductComponent } from './about-product/about-product.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path:'',component:MasterviewComponent,children:[
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path:'login-customer',component:LoginComponent},
    {path:'banh-sinh-nhat/:id',component:BanhSinhNhatComponent},
    {path:'about-product/:id',component:AboutProductComponent},
    {path:'cart',component:CartComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
