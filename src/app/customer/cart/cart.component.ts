import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
   cartData:any;
    listPro:any;
    constructor(private product:ProductsService, private router:Router){}
   ngOnInit(): void {
    this.getlist();
    console.log(this.cartData);
    console.log(this.listPro);
  }
  getlist(){
    this.cartData=localStorage.getItem("localCart")
    this.listPro=JSON.parse(this.cartData)
  }

  removeItem(id:any){
    if(confirm('Bạn chắc chắn muốn xóa khỏi giỏ hàng')){
      this.product.removeItemFromCart(id);
      this.getlist();
        this.router.navigate(['/cart'])
    }
 }
}
