import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavagationComponent } from './Components/navagation/navagation.component';
import { SideLeftComponent } from './Components/side-left/side-left.component';
import { ProductComponent } from './Components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Dirctives/product-card.directive';
import { ShopingCartComponent } from './Components/shoping-cart/shoping-cart.component';
import { NationalPipePipe } from './Pipes/national-pipe.pipe';
import { CardNumberPipe } from './Pipes/card-number.pipe';
import { OrderComponent } from './Components/order/order.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CreatproductComponent } from './Components/creatproduct/creatproduct.component';
import { DetailsproductComponent } from './Components/detailsproduct/detailsproduct.component';
import { UpdateproductComponent } from './Components/updateproduct/updateproduct.component';
import { CategoryComponent } from './Components/category/category.component';
import { AddcategoryComponent } from './Components/addcategory/addcategory.component';
import { UserComponent } from './Components/user/user.component';
import { UserRegisterComponent } from './Components/user-register/user-register.component';
import { UserLoginComponent } from './Components/user-login/user-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavagationComponent,
    SideLeftComponent,
    ProductComponent,
    ProductCardDirective,
    ShopingCartComponent,
    NationalPipePipe,
    CardNumberPipe,
    OrderComponent,
    NotFoundComponent,
    CreatproductComponent,
    DetailsproductComponent,
    UpdateproductComponent,
    CategoryComponent,
    AddcategoryComponent,
    UserComponent,
    UserRegisterComponent,
    UserLoginComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
