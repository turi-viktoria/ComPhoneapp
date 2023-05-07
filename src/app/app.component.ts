import { AuthService } from './services/auth.service';
import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatMenu } from '@angular/material/menu';
import { CartService } from './cart.service';
import { Cart, CartItem } from './model/cart.model';
import { CartComponent } from './cart/cart.component';
import * as firebase from 'firebase/compat';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-angular-project';
  private _cart: Cart = { items: [] } ;
  itemsQuantity = 0;
  loggedInUser?: firebase.default.User | null;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, curent) => prev + curent, 0);
  }

  

  @ViewChild('MatSidenav', { static: true }) sidenav!: MatSidenav;
  
  @ViewChild(MatMenu) menu!: MatMenu;

  constructor(private CartService: CartService, private AuthService: AuthService){}

ngOnInit(){
  this.CartService.cart.subscribe((_cart) => {
    this.cart= _cart;
 
  })

  this.AuthService.isUserLoggedIn().subscribe(user=> {
    console.log(user);
    this.loggedInUser = user;
    localStorage.setItem('user', JSON.stringify(this.loggedInUser)); 
  }, error => {
    console.log(error);
    localStorage.setItem('user', JSON.stringify('null'));
  }
  )
}
async logout() {
  try {
    this.AuthService.logout();
    console.log('Sikeres a kiejelentkezés');
  } catch(error) {
    console.error(error);
  }
}



}
