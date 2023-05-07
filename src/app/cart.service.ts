import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from './model/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  isUserLoggedIn() {
    throw new Error('Method not implemented.');
  }
  cart=new BehaviorSubject<Cart>({items: []});
  caart: Array<CartItem>;
  
  constructor(private _snackBar: MatSnackBar) {
    this.caart = this.load()
   }

   addToCart(item: CartItem): void{
    //const items = [...this.cart.value.items];

    let caart = this.load() as Array<CartItem>;
    const itemInCart=caart.find((_item) => _item.id == item.id);
    if(itemInCart){
      itemInCart.quantity += 1;
    }else{
      caart.push(item);
    }  
    this.save(caart)

    //this.cart.next({items});
    this._snackBar.open('1 elem hozzáadásra került a kosárba', 'Szupi!', {duration: 3000});
    //console.log(this.cart.value);
   }
   
  getTotal(items: CartItem[]): number {
    return items.map((item) => item.price * item.quantity)
    .reduce((prev: number, current: number) => prev + current, 0);
  }

  save(caart: any){    
    localStorage.setItem("webkert-products", JSON.stringify(caart))
  }

  load(){
    return JSON.parse(localStorage.getItem("webkert-products") ?? "[]") 
  }

  listCart() {
    return this.caart;
  }


}
