import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { MasterviewComponent } from './masterview/masterview.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CarouselModule } from 'ngx-owl-carousel-o'

import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BanhSinhNhatComponent } from './banh-sinh-nhat/banh-sinh-nhat.component';
import { AboutProductComponent } from './about-product/about-product.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    MasterviewComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BanhSinhNhatComponent,
    AboutProductComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    CarouselModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ]
})
export class CustomerModule { }
