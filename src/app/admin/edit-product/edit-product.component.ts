import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  file:any;
  listPro:any=[];
  listCate:any=[];
  preview:any;
  image:any;
  formPro=new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    category_id: new FormControl('')
  })
  constructor(private categoryService:CategoryService,private productServices:ProductsService,private router:Router,private activatedRouter: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param:any)=>{
      let id:any=param.get(['id']);
      this.productServices.find(id).subscribe((data)=>{
        this.listPro=data;
        this.getListCate()
        this.image=this.listPro.image; 
      })
    })
  }
  getListCate(){
    this.categoryService.getAll().subscribe((data)=>{
      this.listCate=data
      this.formPro.patchValue({
        category_id: this.listPro.category_id
      });
      console.log(this.listPro);
    })
  }
  selectFile(event:any){
    this.file= event.target.files[0];
    console.log(this.file);
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload=(e:any)=>{
      this.preview=e.target.result;
      this.image=this.preview;
    }
    
  }
  updateProduct(){
   
    let name:any;
    let price:any;
    let category_id:any=this.formPro.value.category_id;
    if(this.formPro.value.name==""){
      name=this.listPro.name;
    }else{
      name=this.formPro.value.name
    }
    if(this.formPro.value.price==""){
      price=this.listPro.price;
    }else{
      price=this.formPro.value.price
    }
    const formData=new FormData();
    if (this.file) {
      formData.append("image", this.file, this.file.name);
    } else {
      formData.append("image", this.image);
    }
    formData.append("name",name);
    formData.append("price",price);
    formData.append("category_id",category_id);
    console.log(formData);
    this.productServices.update(this.listPro.id,formData).subscribe(data=>{
      if(data){
        alert("Sửa thành công");
        this.router.navigate(["admin/product"])
      }
    })
  } 
}
