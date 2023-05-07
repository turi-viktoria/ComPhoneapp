import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './services/auth.guard';
import { AfterLoginSideComponent } from './after-login-side/after-login-side.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'contacts', component: ContactsComponent, },
  { path: 'shipping', component: ShippingComponent, canActivate: [AuthGuard]},
  { path: 'shopping', component: ShoppingComponent, },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'after-login-side', component: AfterLoginSideComponent,   canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






























