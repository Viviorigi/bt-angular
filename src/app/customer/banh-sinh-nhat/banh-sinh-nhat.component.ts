import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-banh-sinh-nhat',
  templateUrl: './banh-sinh-nhat.component.html',
  styleUrls: ['./banh-sinh-nhat.component.css']
})
export class BanhSinhNhatComponent {
  listCate:any;
  listPro:any;
  nameCate:any=[];
  fashop=faShoppingCart

  constructor(private categoryService:CategoryService,private productServices:ProductsService,private router:Router,private activatedRouter: ActivatedRoute){}

  ngOnInit(): void {
    //lay san pham theo danh muc
    this.getCate() 
    this.activatedRouter.paramMap.subscribe((param:any)=>{
      let id:any=param.get(['id']);
      this.productServices.getProid(id).subscribe((data)=>{
        this.listPro=data;       
      })
      this.categoryService.find(id).subscribe((data)=>{
        this.nameCate=data;
      })
      
    })
   }
   //lay danh muc
   getCate():void{
    this.categoryService.getAll().subscribe((data)=>{
      this.listCate=data;
    })
  }
}
