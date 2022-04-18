import { Component, OnInit } from '@angular/core';
import { ICatogry } from 'src/app/Models/icatogry';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  catList:Array<ICatogry>;
  selectedCatID:number = 0;
  recivedTotalprice:number=0
  constructor() { 
    this.catList=[
      {id:1,Name:"Mobiles"},
      {id:2,Name:"TV"},
      {id:3,Name:"Laptops"}
    ]

  }

  ngOnInit(): void {
  }
  tochangetotalprice(totalprice:number){
    this.recivedTotalprice=totalprice;
  }
}
