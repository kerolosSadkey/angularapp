import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatogry } from 'src/app/Models/icatogry';
import { Iproduct } from 'src/app/Models/iproduct';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  catlist!:ICatogry[];
  constructor( private route:Router,private acvtiveRout:ActivatedRoute,
    private productapi:ProductApiService,private categoryApi:CategoryApiService) { 
    this.categoryApi.getAllcategory().subscribe(cat=>{
       this.catlist=cat;
    })
    

  }

  ngOnInit(): void {
    let  snapid:number=(this.acvtiveRout.snapshot.paramMap.get("id")) ? Number( this.acvtiveRout.snapshot.paramMap.get("id")):0;
    this.productapi.getproductbyId(snapid).subscribe(prodList=>{
      this.product=prodList;
    })
  }
  img!:string;
  product:Iproduct={
    id:0,
    Name:"",
    Quantity:0,
    Price:0,
    Img:"",
    CateogryID:0
  };
  hadelUpload(e:any){
    this.img=e.target.value
  }
   
  
  Updateproduct(id:number, name:string,quantity:number,price:number,catid:number){
       this.product.id=id;
       this.product.Name=name;
       this.product.Quantity=quantity;
       this.product.Price=price;
       this.product.CateogryID=catid;
       this.product.Img=this.img;
       this.productapi.updateproduct(this.product).subscribe({
        next:(pro)=>{
          this.route.navigateByUrl("/order");
        }
       });
      
         
       this.route.navigateByUrl("/order");
        
  }
}
