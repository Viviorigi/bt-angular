import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-masterview',
  templateUrl: './masterview.component.html',
  styleUrls: ['./masterview.component.css']
})
export class MasterviewComponent  {
  acc:boolean=false;
  customer:any=localStorage.getItem('customeracc')
  cartItems=0;
  constructor(private product:ProductsService){}
  ngOnInit(): void {
    if(!this.customer){
      this.acc= false;
   }else{
    this.acc=true
   }
   this.updatedata()
  }
  updatedata(){
    let cartData=localStorage.getItem('localCart');
    if(cartData){
     this.cartItems=JSON.parse(cartData).length
     this.product.cartData.subscribe((data)=>{
      this.cartItems=data.length
     })
    }
  }
  logout(){
      localStorage.removeItem('customeracc');
      window.location.href=""
  }

}
