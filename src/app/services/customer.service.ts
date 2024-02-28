import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }
  
  register(acc:any):Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/register-customer',acc);
  }
  login(acc:any):Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/login-customer',acc)
  }
}
