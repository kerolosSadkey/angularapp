import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Components/product/product.component';
import { OrderComponent } from './Components/order/order.component';
import { HeaderComponent } from './Components/header/header.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CreatproductComponent } from './Components/creatproduct/creatproduct.component';
import { DetailsproductComponent } from './Components/detailsproduct/detailsproduct.component';

import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';
import { AuthGuard } from './Guards/auth.guard';
import { AdminModule } from './admin/admin.module';


const routes:Routes =[

  {
    path:"admin",
   loadChildren : () => import(`./admin/admin.module`).then(m=>m.AdminModule)
  },
 { path:"product", component:ProductComponent,canActivate:[AuthGuard]},
 { path:"Addproduct", component:CreatproductComponent},
 {path:"product/:id",component:DetailsproductComponent},
 {path:"updateproduct/:id",component:CreatproductComponent},
 { path:"order", component:OrderComponent,canActivate:[AuthGuard]},
 {path:"register",component:UserRegisterComponent}, 
 {path:"login",component:UserLoginComponent},
 {path:"header", component:HeaderComponent},
 {path:"**", component:NotFoundComponent},

]
@NgModule({
  declarations: [],
  imports: [  RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
