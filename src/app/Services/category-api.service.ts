import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { ICatogry } from '../Models/icatogry';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private httpclient:HttpClient) { }
 
  getAllcategory():Observable<ICatogry[]>{
    return this.httpclient.get<ICatogry[]>(`${environment.ApiUrl}/category`);
  }

  

  getcategorybyId(id:number):Observable<ICatogry>{
    return this.httpclient.get<ICatogry>(`${environment.ApiUrl}/category/${id}`);
  }
  addcategory(category:ICatogry):Observable<ICatogry>{
  return  this.httpclient.post<ICatogry>(`${environment.ApiUrl}/category`,JSON.stringify(category))
  }
}
