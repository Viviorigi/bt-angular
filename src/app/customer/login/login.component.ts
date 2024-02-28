import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  accForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email,Validators.minLength(2),Validators.maxLength(30)]),
    password:new FormControl('',Validators.required)
  })
  constructor(private customerServices:CustomerService){}
  //gui email mk dang nhap
  submit(){
    if(this.accForm.invalid){
      {return}
    }
    this.customerServices.login(this.accForm.value).subscribe((data)=>{
      if(data){
        localStorage.setItem("customeracc",data.name);
        window.location.href="/";
      }
    },(err)=>{
      console.log(err);
        alert("Sai thong tin dang nhap")
    })
  }

}
