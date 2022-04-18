import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Iproduct } from 'src/app/Models/iproduct';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-detailsproduct',
  templateUrl: './detailsproduct.component.html',
  styleUrls: ['./detailsproduct.component.css']
})
export class DetailsproductComponent implements OnInit {

   product!:Iproduct
   productListId!:number[] ;
   currentId:number=0;
   currentIndex:number=0

  constructor(private productservice:ProductService,private acvtiveRout:ActivatedRoute
    ,private productApi:ProductApiService,private location:Location,private router:Router) { 


  }
 
  ngOnInit(): void {
   
  //  let  snapid:number=(this.acvtiveRout.snapshot.paramMap.get("id")) ? Number( this.acvtiveRout.snapshot.paramMap.get("id")):0;
  //   this.product=this.productservice.getproductbyPid(snapid)
  //   console.log(snapid)


    this.acvtiveRout.paramMap.subscribe(paramMap=>{
      this.currentId=(paramMap.get('id'))?Number(this.acvtiveRout.snapshot.paramMap.get('id')):0;
      console.log(this.currentId)
      let foundPrdID;
      this.productApi.getproductbyId(this.currentId).subscribe(prodlist=>{
         this.product=prodlist });
     
      
        console.log(this.product)
  
      })
      this.productListId =this.productservice.gitListidproduct();
  }

  Goback(){
    this.location.back();
  }

  previousProduct(){
    this.currentIndex=this.productListId.findIndex((item)=>item== this.currentId);

    this.router.navigate(['/product',this.productListId[--this.currentIndex]])

  }

  NextProduct(){
    this.currentIndex=this.productListId.findIndex((item)=>item==this.currentId);
    this.router.navigate(['/product',this.productListId[++this.currentIndex]])
  }
  
}
