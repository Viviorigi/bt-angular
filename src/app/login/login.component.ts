import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(private authServices:AuthService){}

  onSubmit(){
    if(this.accForm.invalid){
      {return}
    }
    this.authServices.login(this.accForm.value).subscribe((data)=>{
      if(data){
        localStorage.setItem("auth",data.email);
        window.location.href="admin";
      }
    },(err)=>{
      console.log(err);
        alert("Sai thong tin dang nhap")
    })
  }

}
