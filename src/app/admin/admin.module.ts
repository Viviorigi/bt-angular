import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MasterviewadminComponent } from './masterviewadmin/masterviewadmin.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    MasterviewadminComponent,
    CategoryComponent,
    ProductComponent,
    AddproductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
