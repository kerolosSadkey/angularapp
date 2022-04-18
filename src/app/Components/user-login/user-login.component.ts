import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserAuthApiService } from 'src/app/Services/user-auth-api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

 islogged:boolean=false
 userform:FormGroup;
  constructor(private authservice:UserAuthApiService,private router:Router) { 
       this.userform=new FormGroup({
          email:new FormControl('',[Validators.required]),
          password:new FormControl('',[Validators.required])
       })
  }

  ngOnInit(): void {
  }

notmatch!:string;
 Login(){
  let email= this.userform.get("email")?.value
  let password= this.userform.get("password")?.value
   this.authservice.Login(email,password)
   this.islogged=this.authservice.IsUserLogged();
   if(this.islogged){
     this.router.navigateByUrl("/order")
     return;
   }
   else{
     this.notmatch="email and password is not vaild";
   }
 }
 Logout(){
  this.authservice.logout()
  this.islogged=this.authservice.IsUserLogged();
 }
}
