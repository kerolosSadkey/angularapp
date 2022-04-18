import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICatogry } from 'src/app/Models/icatogry';
import { Iproduct } from 'src/app/Models/iproduct';
import { CategoryApiService } from 'src/app/Services/category-api.service';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-creatproduct',
  templateUrl: './creatproduct.component.html',
  styleUrls: ['./creatproduct.component.css']
})
export class CreatproductComponent implements OnInit {

  catlist!:ICatogry[];
  
  constructor( private route:Router,
     private productApi:ProductApiService,private categoryApi:CategoryApiService,private acvtiveRout:ActivatedRoute ) { 
   
    categoryApi.getAllcategory().subscribe(clist=>{
      this.catlist=clist;
    });

  }
  img!:string;
  product:Iproduct={} as Iproduct;
  hadelUpload(e:any){
    this.img=e.target.value
  }
   
  
  addproduct(){
      
       this.productApi.addproduct(this.product).subscribe({
         next:(prod)=>{
          this.route.navigateByUrl("/order");
         }
       })
     
  }
  ngOnInit(): void {
    let  snapid:number=(this.acvtiveRout.snapshot.paramMap.get("id")) ? Number( this.acvtiveRout.snapshot.paramMap.get("id")):0;
    this.productApi.getproductbyId(snapid).subscribe(prodList=>{
      this.product=prodList;
    })
  }

  Updateproduct(){
   
    this.productApi.updateproduct(this.product).subscribe({
     next:(pro)=>{
       this.route.navigateByUrl("/order");
     }
    });
   
      
    this.route.navigateByUrl("/order");
     
}
  

}
