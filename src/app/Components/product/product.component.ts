import { Component, OnChanges,Input, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountOffers } from 'src/app/Models/discount-offers';

import { Iproduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { ProductApiService } from 'src/app/Services/product-api.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']


})
export class ProductComponent implements OnInit,OnChanges {

  Discount:DiscountOffers=DiscountOffers['15%'];
  //  ClientName:string="kerolos"; 
  //  IsPurshased  :boolean=false;

  
 
  store:Store={
    Name:"ComputerShop",
    branches:["sohag","Assuit","Qena"],
    Logo:"http://www.stock-it.co.uk/wp-content/uploads/2013/04/IMG_1930.jpg"
  }

  // catList:Array<ICatogry>;
  // product: Array<Iproduct> =[] ;
  productListOfcatId: Array<Iproduct> =[] ; 
  productListOfcard: Array<Iproduct> =[] ; 
  selectedCatID:number = 0;
  @Input() recivedCatID:number=0 ;
  // NationalId:string = "";
  // CardNumber:string = "";
  constructor(private prodservice:ProductService,private route:Router,private productapi:ProductApiService) {
    // this.totalpriceCard=new EventEmitter<number>();
    
    // this.catList=[
    //   {ID:1,Name:"Mobiles"},
    //   {ID:2,Name:"TV"},
    //   {ID:3,Name:"Laptops"}
    // ]

    // this.product=  [
    //   {ID:1,Name:"Samsung A10s", Quantity:7,Price:2500, Img:"https://sp.yimg.com/ib/th?id=OP.FqsjR1UOSmPMnQ474C474&o=5&pid=21.1", CateogryID:this.catList[0].ID},
    //   {ID:2, Name:"Samsung A50s", Quantity:5,Price:3500, Img:"https://sp.yimg.com/ib/th?id=OP.D0%2bYK%2bBtTA2Rfw474C474&o=5&pid=21.1",CateogryID:this.catList[0].ID},
    //   {ID:3, Name:"Huwhui", Quantity:4,Price:5000, Img:"https://tse4.mm.bing.net/th?id=OIP.Hb71ePBDRpFv3ZJxztvGAQHaHa&pid=Api&P=0&w=158&h=158",CateogryID:this.catList[0].ID},
    //   {ID:4,Name:"LG", Quantity:6,Price:3500, Img:"https://sp.yimg.com/ib/th?id=OP.437pWZpaLM14vg474C474&o=5&pid=21.1&bw=0&bc=FFFFFF", CateogryID:this.catList[1].ID},
    //   {ID:5, Name:"Toshipa", Quantity:10,Price:5500, Img:"https://sp.yimg.com/ib/th?id=OP.5GtqH%2bmc%2bphgJw474C474&o=5&pid=21.1&bw=0&bc=FFFFFF",CateogryID:this.catList[1].ID},
    //   {ID:6, Name:"Dell", Quantity:16,Price:10500, Img:"https://tse3.mm.bing.net/th?id=OIP.0T_iBUdN3gUpSy_DaXQ3OQHaGL&pid=Api&P=0&w=214&h=179",CateogryID:this.catList[2].ID},
    //   {ID:7, Name:"HP", Quantity:9,Price:9500, Img:"https://tse3.mm.bing.net/th?id=OIP.VB1Abf4lWnLsPr_4-HzoggHaGS&pid=Api&P=0&w=187&h=159",CateogryID:this.catList[2].ID},
    //   {ID:8,Name:"Lenovo", Quantity:4,Price:8500, Img:"https://tse1.mm.bing.net/th?id=OIP.GSegk4mlFwz1lk3etVMHKQHaHa&pid=Api&P=0&w=150&h=150", CateogryID:this.catList[2].ID},
    //   {ID:9, Name:"Apple", Quantity:9,Price:20500, Img:"https://sp.yimg.com/ib/th?id=OP.pB8aSvLzlFc9%2bA474C474&o=5&pid=21.1",CateogryID:this.catList[2].ID}
    // ]
    
   }
  ngOnChanges(changes: SimpleChanges): void {
    this.productapi.getAllproductbyCatId(this.recivedCatID).subscribe(prodList=>{
      this.productListOfcatId=prodList;
    })
  }

   today:Date=new Date();
  ngOnInit(): void {
    //this.productListOfcatId= this.prodservice.getAllproductByCatId(this.recivedCatID);
   this.productapi.getAllproduct().subscribe(prodList=>{
     this.productListOfcatId=prodList;
   })
  }

ordertotalprice:number=0
 @Output() totalpriceCard:EventEmitter<number>=this.prodservice.getTotalprice() ;


// prod:Iproduct | undefined;
addtocart(id:number,countnum:any){
  
  this.productListOfcard=this.prodservice.addtocart(id,countnum)
 }
//   this.ordertotalprice += this.prod.Price * countnum;
//  this.totalpriceCard.emit(this.ordertotalprice);
//   return
//  }
//  this.prod.count=parseInt(countnum);
//  this.ordertotalprice += this.prod.Price * countnum;
//  this.totalpriceCard.emit(this.ordertotalprice);
//  this.productListOfcard.push( this.prod);



// }
 checkout:string="";
checkOut(prod:Iproduct[]){
   
 this.checkout= this.prodservice.checkOut(prod);
 this.productListOfcard=[];
}

productDetails(ID:number){
  this.route.navigate(["product",ID])
}



updateproduct(ID:number){
  this.route.navigate(["updateproduct",ID])
}


Deleteproduct(ID:number){
  console.log(ID)
  this.productapi.Deleteproduct(ID).subscribe( {
    next:(pro)=>{
    location.reload();
  }
  });

}

}




