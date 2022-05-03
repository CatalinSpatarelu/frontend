import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import { LoginComponent } from './component/login/login.component';
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './component/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './component/admin/admin.component';
import { ProductComponent } from './component/product/product.component';
import { NewproductComponent } from './component/newproduct/newproduct.component';
import { ClientComponent } from './component/client/client.component';
import { UpdateProductComponent } from './component/updateproduct/updateProduct.component';
import { ShopCartComponent } from './component/shop-cart/shop-cart.component';
import { UserComponent } from './component/user/user.component';
import { UserProductComponent } from './component/user-product/user-product.component';
import { FavoriteItemComponent } from './component/favorite-item/favorite-item.component';
import { LogoutComponent } from './component/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ProductComponent,
    NewproductComponent,
    ClientComponent,
    UpdateProductComponent,
    ShopCartComponent,
    UserComponent,
    UserProductComponent,
    FavoriteItemComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
