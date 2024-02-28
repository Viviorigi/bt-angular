import { Component,OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormControl,FormGroup } from '@angular/forms';
declare  var $:any;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements  OnInit  {
  listCate:any;
  cate:any={};
  title='pagination';
  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes:any=[5,10,15,20];
  cateform= new FormGroup({
    name: new FormControl(''),
  })
  formsearch= new FormGroup({
    keyword: new FormControl(''),
  })
  constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
   this.getList();
  }
  getList(){
    this.categoryService.getAll().subscribe((data)=>{
      this.listCate=data
    })
  }
  listDataChange(event:any){
    this.page=event;
    this.getList();
  }
  tableSizeChange(event:any):void{
    this.tableSize=event.target.value;
    this.page=1;
    this.getList();
  }
  addCate():void{   
    this.categoryService.add(this.cateform.value).subscribe((data)=>{
      this.getList()   
    }) 
  }
  delete(id:any):void{
    if(confirm('Bạn có chắc chắn muốn xóa danh mục này'))
    this.categoryService.delete(id).subscribe((data)=>{
      this.getList()
    })
  }

  edit(id:any){    
    $('#modelId').modal('show')
    this.categoryService.find(id).subscribe((data)=>{
      this.cate=data;
      console.log(data);
      
    })
  }
  updateCate():void{  
    console.log(this.cate.id);
    
    this.categoryService.update(this.cate.id,this.cateform.value).subscribe((data)=>{
      $('#modelId').modal('hide') 
      this.getList()
    })
  }
  search():any{
    this.categoryService.search(this.formsearch.value.keyword).subscribe((data)=>{  
      this.listCate=data
      console.log(this.listCate);
      
      if(this.listCate==''){
        this.getList() 
      }
    })
  }

}
