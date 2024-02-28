import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterviewadminComponent } from './masterviewadmin/masterviewadmin.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path:'',component:MasterviewadminComponent,children:[
    {path:'category',component:CategoryComponent},
    {path:'product',component:ProductComponent},
    {path:'add-product',component:AddproductComponent },
    {path:'edit-product/:id',component:EditProductComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
