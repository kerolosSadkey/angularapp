import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserApiService } from './user-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthApiService {
  private IsLogged:BehaviorSubject<boolean>;
  constructor(private userservice:UserApiService) { 
    this.IsLogged=new BehaviorSubject<boolean>(this.IsUserLogged())
  }

  Login(email:string,password:string){
   
    this.userservice.getAllproduct().subscribe(prod=>{
     if( prod.find(u=>u.email==email && u.password==password)){
      this.IsLogged.next(true)
      let usertoken=prod.find(u=>u.email==email && u.password==password)?.email;
       localStorage.setItem("token",usertoken!)
     }
     
    })
    
   
  }

  logout(){
    localStorage.removeItem("token");
    this.IsLogged.next(false)
  }
  IsUserLogged():boolean
  {
       return localStorage.getItem("token") ? true : false;
  }
}
