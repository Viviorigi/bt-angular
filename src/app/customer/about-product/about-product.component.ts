import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { product } from './productdata';

@Component({
  selector: 'app-about-product',
  templateUrl: './about-product.component.html',
  styleUrls: ['./about-product.component.css']
})
export class AboutProductComponent {
  listPro:any=[];
  productQuantity:any=1;
  productData:any|product
  constructor(private product:ProductsService,private router:Router,private activatedRouter: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param:any)=>{
      let id:any=param.get(['id']);
      this.product.find(id).subscribe((data)=>{
        this.listPro=data;     
        this.productData=data
      })
    })
 }
   handleQuantity(val:string){
    if(this.productQuantity<20 &&val==='plus'){
      this.productQuantity+=1
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity-=1
    }
   }

   addToCart(){
    if(this.productData){
      this.productData.quantity=this.productQuantity;
      if(!localStorage.getItem('user')){
        this.product.localAddToCart(this.productData)
        let  router:Router;
        this.router.navigate(['/cart'])
      }
    }  
   }

}
