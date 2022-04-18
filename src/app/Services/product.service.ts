import { EventEmitter, Injectable, Output } from '@angular/core';
import { ICatogry } from '../Models/icatogry';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
productList:Iproduct[] ;
productListOfcatid: Array<Iproduct> =[] ; 
productListOfcard: Array<Iproduct> =[] ; 
catList:ICatogry[];

  constructor() { 

    this.catList=[
      {id:1,Name:"Mobiles"},
      {id:2,Name:"TV"},
      {id:3,Name:"Laptops"}
    ]
    this.productList=  [
      {id:1,Name:"Samsung A10s", Quantity:7,Price:2500, Img:"https://sp.yimg.com/ib/th?id=OP.FqsjR1UOSmPMnQ474C474&o=5&pid=21.1", CateogryID:this.catList[0].id},
      {id:2, Name:"Samsung A50s", Quantity:5,Price:3500, Img:"https://sp.yimg.com/ib/th?id=OP.D0%2bYK%2bBtTA2Rfw474C474&o=5&pid=21.1",CateogryID:this.catList[0].id},
      {id:3, Name:"Huwhui", Quantity:4,Price:5000, Img:"https://tse4.mm.bing.net/th?id=OIP.Hb71ePBDRpFv3ZJxztvGAQHaHa&pid=Api&P=0&w=158&h=158",CateogryID:this.catList[0].id},
      {id:4,Name:"LG", Quantity:6,Price:3500, Img:"https://sp.yimg.com/ib/th?id=OP.437pWZpaLM14vg474C474&o=5&pid=21.1&bw=0&bc=FFFFFF", CateogryID:this.catList[1].id},
      {id:5, Name:"Toshipa", Quantity:10,Price:5500, Img:"https://sp.yimg.com/ib/th?id=OP.5GtqH%2bmc%2bphgJw474C474&o=5&pid=21.1&bw=0&bc=FFFFFF",CateogryID:this.catList[1].id},
      {id:6, Name:"Dell", Quantity:16,Price:10500, Img:"https://tse3.mm.bing.net/th?id=OIP.0T_iBUdN3gUpSy_DaXQ3OQHaGL&pid=Api&P=0&w=214&h=179",CateogryID:this.catList[2].id},
      {id:7, Name:"HP", Quantity:9,Price:9500, Img:"https://tse3.mm.bing.net/th?id=OIP.VB1Abf4lWnLsPr_4-HzoggHaGS&pid=Api&P=0&w=187&h=159",CateogryID:this.catList[2].id},
      {id:8,Name:"Lenovo", Quantity:4,Price:8500, Img:"https://tse1.mm.bing.net/th?id=OIP.GSegk4mlFwz1lk3etVMHKQHaHa&pid=Api&P=0&w=150&h=150", CateogryID:this.catList[2].id},
      {id:9, Name:"Apple", Quantity:9,Price:20500, Img:"https://sp.yimg.com/ib/th?id=OP.pB8aSvLzlFc9%2bA474C474&o=5&pid=21.1",CateogryID:this.catList[2].id}
    ]

    this.totalpriceCard=new EventEmitter<number>();
  }

  getAllProduct():Iproduct[]{
       return this.productList;
  }

  getAllproductByCatid(catid:number):Iproduct[]{
    
    if(catid==0){
      return this.productList
    }

    return this.productList.filter(p=>p.CateogryID==catid);
  }

  getproductbyPid(pid:number):Iproduct{
          return this.productList.find(p=>p.id==pid)!;
  }

  addProduct(product:Iproduct):void{
    this.productList.push(product)
  }


  UpdateProduct(product:Iproduct):void{
    this.productList.find(p=>p.id==product.id)!.Name=product.Name;
    this.productList.find(p=>p.id==product.id)!.Quantity=product.Quantity;
    this.productList.find(p=>p.id==product.id)!.Price=product.Price;
    this.productList.find(p=>p.id==product.id)!.CateogryID=product.CateogryID;
  }

 Deletproduct(id:number){
   this.productList=this.productList.filter(p=>p.id != id);
 }

  ordertotalprice:number=0
@Output() totalpriceCard:EventEmitter<number> ;


gitListidproduct():number[]{

  return  this.productList.map(p=>p.id);
}

serach(name:string){
  name = name.toLocaleLowerCase();

   this.productList= this.productList.filter(it => {
       it.Name.toLocaleLowerCase().includes(name);
    });

    if(this.productList){
      return
    }

  this.productList=this.getAllProduct();
}

prod:Iproduct | undefined;
addtocart(id:number,countnum:any):Iproduct[]{
 this.prod=this.productList.find(p=>p.id==id)!;

 if(this.productListOfcard.find(p=>p.id==this.prod?.id)){
  
  this.productListOfcard.find(p=>p.id==this.prod?.id)!.count! += parseInt(countnum);
  this.ordertotalprice += this.prod.Price * countnum;
 this.totalpriceCard.emit(this.ordertotalprice);
  return this.productListOfcard;
 }
 this.prod.count=parseInt(countnum);
 this.ordertotalprice += this.prod.Price * countnum;
 this.totalpriceCard.emit(this.ordertotalprice);
 this.productListOfcard.push( this.prod);

return this.productListOfcard;

}

getTotalprice():EventEmitter<number>
{
  return this.totalpriceCard;
}
checkout:string="";
checkOut(prod:Iproduct[]){
   
  for(let i of prod){
    console.log(i.id);
    if(this.productList.find(p=>p.id==i.id))
         this.productList.find(p=>p.id==i.id)!.Quantity -= i.count!;
  }
  this.checkout="checkoutSuccsfully"
  this.productListOfcard=[]

return this.checkout;
}


}

