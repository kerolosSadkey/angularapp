import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Iuser } from '../Models/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private httpoption={}
  constructor(private httpclient:HttpClient) {
    this.httpoption={
      headers:new HttpHeaders({"Content-Type":'application/json' })
    }
   }


  getAllproduct():Observable<Iuser[]>{
    return this.httpclient.get<Iuser[]>(`${environment.ApiUrl}/user`);
  }

 

  getproductbyId(id:number):Observable<Iuser>{
 
    return this.httpclient.get<Iuser>(`${environment.ApiUrl}/user/${id}`);
    
  }
  adduser(product:Iuser):Observable<Iuser>{
    console.log((product));
    
  return  this.httpclient.post<Iuser>(`${environment.ApiUrl}/user`,JSON.stringify(product),this.httpoption)
  }

  updateuser(product:Iuser):Observable<Iuser>{
    return  this.httpclient.put<Iuser>(`${environment.ApiUrl}/user/${product.id}`,JSON.stringify(product),this.httpoption)
    }

    Deleteuser(id:number):Observable<Iuser>{
       return this.httpclient.delete<Iuser>(`${environment.ApiUrl}/user/${id}`,this.httpoption);
      }
}
