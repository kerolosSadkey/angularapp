import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserApiService } from 'src/app/Services/user-api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userform:FormGroup; 
  
  constructor(private userapi:UserApiService,private router:Router ,private formbulider:FormBuilder) { 
//     this.userform=new FormGroup({
//       Name:new FormControl('',[Validators.required,Validators.minLength(5)]),
//       email:new FormControl('',[Validators.required,Validators.email]),
//       phone: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),

//       address:new FormGroup({
//         city:new FormControl('',[Validators.required,Validators.minLength(5)]),
//         postalcode:new FormControl('',[Validators.required,Validators.minLength(5)]),
//         street:new FormControl('',[Validators.required,Validators.minLength(5)]),

//       }),
//       password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('')]),
//       cpassword:new FormControl('',[Validators.required,Validators.minLength(6)]),
//       Delivery:new FormControl('',[Validators.required,Validators.minLength(5)]),
// },
 
// );
  this.userform=this.formbulider.group({
    Name:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,Validators.email]],
    phone:this.formbulider.array(
    [ formbulider.control('')],[Validators.required,Validators.maxLength(11)]
    
    ),
    
     address:this.formbulider.group({
                city:['',[Validators.required,Validators.minLength(5)]],
                postalcode:['',[Validators.required,Validators.minLength(5)]],
                street:['',[Validators.required,Validators.minLength(5)]],
    
          }),
   password:['',[Validators.required,Validators.minLength(6),Validators.pattern(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}`) ]],
   cpassword:['',[Validators.required]],
   Delivery:['',[Validators.required,Validators.minLength(5)]]

  },{Validator:this.passwordMatch("password","cpassword")})
  }

  get Name(){return this.userform.get("Name")}
  get phone(){ return this.userform.get("phone") as FormArray }
  get email(){return this.userform.get("email") }
  get password(){return this.userform.get("password") }
  get cpassword(){return this.userform.get("cpassword") }


  passwordMatch(password:string,cpassword:string){
   
     (fb:FormGroup)=>{
         let p=fb.controls[password];
         let cp=fb.controls[cpassword];
         if(p.value !== cp.value){
     
          cp.setErrors({notEquivalent:true})
              
         }else{
           
         cp.setErrors(null)
         }
    }
   
  }
  ngOnInit(): void {
  }
  Register(){
       this.userapi.adduser(this.userform.value).subscribe({
         next:(u)=>{
                this.router.navigateByUrl("/order")
         }
       })
  }

  addphone(){
    
    this.phone.push(this.formbulider.control(''))
  }

  deletephone(i:number){
   this.phone.removeAt(i);
  }
}
