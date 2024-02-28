import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword } from './matchpassword.validator';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private customerServices:CustomerService){}
  accForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(2)]),
    email:new FormControl('',[Validators.required,Validators.email,Validators.minLength(2),Validators.maxLength(30)]),
    password:new FormControl('',Validators.required),
    repassword:new FormControl('',Validators.required)
  },{validators:matchpassword})
  //gui thong tin dang ki len server
  Submit(){
    this.customerServices.register(this.accForm.value).subscribe((data)=>{
      alert("dang ky thanh cong");
      window.location.href="login-customer";
    })
  }
}
