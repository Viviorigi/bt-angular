import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./customer/customer.module').then((m)=>m.CustomerModule)},
  {path:'admin',canActivate:[authGuard],loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)},
  {path:'login',component:LoginComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
