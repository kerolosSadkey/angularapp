import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthApiService } from 'src/app/Services/user-auth-api.service';

@Component({
  selector: 'app-side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.css']
})
export class SideLeftComponent implements OnInit {

  constructor(private router:Router,private authservice:UserAuthApiService ) { }

  ngOnInit(): void {
  }

  Logout(){
    this.authservice.logout()
    this.router.navigateByUrl("/login")
  }
}
