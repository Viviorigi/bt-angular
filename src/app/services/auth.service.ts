import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }
  login(acc:any):Observable<any>{
    return this.httpClient.post('http://localhost:3000/api/login',acc);
  }
}
