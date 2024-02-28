import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../customer/about-product/productdata';
const urlAPI = 'http://localhost:3000/api/products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }
  //lay all
  getAll():Observable<any>{
    return this.httpClient.get(urlAPI)
  }
  //lay theo danh muc
  getProid(id:any):Observable<any>{
    return this.httpClient.get('http://localhost:3000/api/products/cate'+'/'+id)
  }
  //them san pham
  add(product:any):Observable<any>{
    return this.httpClient.post(urlAPI,product);
  }
  //xoa san pham
  delete(id:any):Observable<any>{
    return this.httpClient.delete(urlAPI+'/'+id);
  }
  //tim san pham de sua
  find(id:any):Observable<any>{
    return this.httpClient.get(`${urlAPI}/${id}`)
  }
  //cap nhat san pham
  update(id:any,product:any):Observable<any>{
    return this.httpClient.put(urlAPI+'/'+id,product)
  }
  //them gio hang vao localstorage 
  cartData=new EventEmitter<any>
  localAddToCart(data:product){
    let cartData=[];
    let localCart= localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart',JSON.stringify([data]))
    }else{
      cartData= JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart',JSON.stringify(cartData))
    }
    this.cartData.emit(cartData)
  }
  //xoa theo id san pham  gio hang
  removeItemFromCart(id:any){
    let cartData=localStorage.getItem('localCart');
    if(cartData){
      let items:product[]=JSON.parse(cartData)
      items=items.filter((item:any)=>id!==item.id)
      localStorage.setItem('localCart',JSON.stringify(items))
      this.cartData.emit(items)
    }
   
  }
}
