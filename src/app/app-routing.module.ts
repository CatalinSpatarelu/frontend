import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {AdminComponent} from "./component/admin/admin.component";
import {ProductComponent} from "./component/product/product.component";
import {NewproductComponent} from "./component/newproduct/newproduct.component";
import {ClientComponent} from "./component/client/client.component";
import {UpdateProductComponent} from "./component/updateproduct/updateProduct.component";
import {UserComponent} from "./component/user/user.component";
import {UserProductComponent} from "./component/user-product/user-product.component";
import {ShopCartComponent} from "./component/shop-cart/shop-cart.component";
import {FavoriteItemComponent} from "./component/favorite-item/favorite-item.component";
import {LogoutComponent} from "./component/logout/logout.component";
import {AuthCheckServiceForUser} from "./service/auth-check-service-for-user.service";
import {AuthCheckServiceForAdmin} from "./service/auth-check-service-for-admin.service";



const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: "registerClient",
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path: 'admin',
    component: AdminComponent,canActivate:[AuthCheckServiceForAdmin]
  },
  {
    path: 'products',
    component: ProductComponent,canActivate:[AuthCheckServiceForAdmin]
  },
  {
    path:"newProduct",
    component:NewproductComponent,canActivate:[AuthCheckServiceForAdmin]
  },
  {
    path:"clients",
    component:ClientComponent,canActivate:[AuthCheckServiceForAdmin]
  },
  {
    path:"product/:productId",
    component:UpdateProductComponent,canActivate:[AuthCheckServiceForUser]
  },
  {
    path:'user',
    component:UserComponent,canActivate:[AuthCheckServiceForUser]
  },
  {
    path:'userProducts',
    component:UserProductComponent,canActivate:[AuthCheckServiceForUser]
  },
  {
    path:'shopCart',
    component:ShopCartComponent,canActivate:[AuthCheckServiceForUser]
  },
  {
    path:'favoriteItem',
    component:FavoriteItemComponent,canActivate:[AuthCheckServiceForUser]
  }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
