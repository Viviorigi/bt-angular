import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  listPro:any;
  listCate:any;
  fashop=faShoppingCart
  constructor(private homelist:ProductsService,private cate:CategoryService){}
  ngOnInit(): void {
    this.getList();
    this.getCate();
   }
   //lay danh muc
   getCate():void{
    this.cate.getAll().subscribe((data)=>{
      this.listCate=data;
    })
  }
//lay full san pham
   getList():void{
     this.homelist.getAll().subscribe((data)=>{
       this.listPro=data;
     })
   }
}

