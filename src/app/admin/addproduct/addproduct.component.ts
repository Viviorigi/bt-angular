import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  file:any;
  listCate:any=[];
  preview:any;
  formPro=new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category_id: new FormControl('')
  })
  constructor(private categoryService:CategoryService,private productServices:ProductsService,private router:Router){}
  ngOnInit(): void {
   this.getListCate();
  }
  //lay danh muc 
  getListCate(){
    this.categoryService.getAll().subscribe((data)=>{
      this.listCate=data
    })
  }
  //chon file va demo anh
  selectFile(event:any){
    this.file= event.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload=(e:any)=>{
      this.preview=e.target.result;
    }
  }
  //them moi du lieu vao formdata va gui len server
  addProduct(){
    const name:any=this.formPro.value.name;
    const price:any=this.formPro.value.price;
    const category_id:any=this.formPro.value.category_id;
    console.log(this.formPro.value);
    const formData=new FormData();
    formData.append("name",name);
    formData.append("price",price);
    formData.append("category_id",category_id);
    formData.append("image",this.file,this.file.name)
    this.productServices.add(formData).subscribe(data=>{
      if(data){
        alert("thêm mới thành công");
        this.router.navigate(["admin/product"])
      }
    })
  }
}
