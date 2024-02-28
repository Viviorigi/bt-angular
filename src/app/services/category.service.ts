import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const urlAPI = 'http://localhost:3000/api/categories';
const urlAPI1='http://localhost:3000/api/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<any>{
    return this.httpClient.get(urlAPI)
  }
  add(product:any):Observable<any>{
    return this.httpClient.post(urlAPI,product);
  }
  delete(id:any):Observable<any>{
    return this.httpClient.delete(urlAPI+'/'+id);
  }

  find(id:any):Observable<any>{
    console.log(id);
    
    return this.httpClient.get(urlAPI1+'/'+id)
  }
  update(id:any,product:any):Observable<any>{
    return this.httpClient.put(urlAPI1+'/'+id,product)
  }

  search(keyword:any):Observable<any>{
    
    return this.httpClient.get(urlAPI+'/'+keyword);
  }
}
