import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AccountComponent } from './account/account.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { ElecroinicsComponent } from './elecroinics/elecroinics.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerSignUpComponent } from './seller-sign-up/seller-sign-up.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [{path:"",component:ProductComponent}, 
{path:"ct",component:CartComponent},
{path:"ac",component:AccountComponent},
{path:"sb",component:SubCategoryComponent},
{path:"el",component:ElecroinicsComponent},
{path:"con",component:ContactusComponent},
{path:"sb/ct",component:CartComponent},
{path:"el/ct",component:CartComponent},
{path:"login",component:LoginComponent},
{path:"slogin",component:SellerLoginComponent},
{path:"signup",component: SignUpComponent},
{path:"sb/ct/cko",component: CheckOutComponent},
{path:"sellersign",component:SellerSignUpComponent},
{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
