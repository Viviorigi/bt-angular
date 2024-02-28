import { Component,OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  implements  OnInit {
  listPro:any;
  title='pagination';
  page:number=1;
  count:number=0;
  tableSize:number=5;
  tableSizes:any=[5,10,15,20];
  constructor(private productServices:ProductsService){}
  ngOnInit(): void {
   this.getList();
  }
  getList():void{
    this.productServices.getAll().subscribe((data)=>{
      this.listPro=data;
    })
  }
  delete(id:any):void{
    if(confirm('Bạn có chắc chắn muốn xóa sản phẩm này'))
    this.productServices.delete(id).subscribe((data)=>{
      this.getList()
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
}
