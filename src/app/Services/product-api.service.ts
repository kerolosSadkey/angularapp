import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private httpoption={}
  constructor(private httpclient:HttpClient) { 
     this.httpoption={
       headers:new HttpHeaders({'Content-Type':'application/json'})
     }
  }

  getAllproduct():Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.ApiUrl}/product`);
  }

  getAllproductbyCatId(id:number):Observable<Iproduct[]>{
    return this.httpclient.get<Iproduct[]>(`${environment.ApiUrl}/product?CateogryID=${id}`);
  }

  getproductbyId(id:number):Observable<Iproduct>{
 
    return this.httpclient.get<Iproduct>(`${environment.ApiUrl}/product/${id}`);
    
  }
  addproduct(product:Iproduct):Observable<Iproduct>{
    console.log((product));
    
  return  this.httpclient.post<Iproduct>(`${environment.ApiUrl}/product`,JSON.stringify(product),this.httpoption)
  }

  updateproduct(product:Iproduct):Observable<Iproduct>{
    return  this.httpclient.put<Iproduct>(`${environment.ApiUrl}/product/${product.id}`,JSON.stringify(product),this.httpoption)
    }

    Deleteproduct(id:number):Observable<Iproduct>{
       return this.httpclient.delete<Iproduct>(`${environment.ApiUrl}/product/${id}`,this.httpoption);
      }
}
