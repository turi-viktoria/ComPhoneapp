import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../model/cart.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  cart: Cart = { items: [ /* {
    prodName: 'Mobil XS',
    price: 1800,
    quantity: 1,
    id: 1,
    total: 0
  },
  {  prodName: 'Mobil S',
  price: 2500,
  quantity: 1,
  id: 2,
  total: 0
  },
  {
    prodName: 'Mobil M',
  price: 3000,
  quantity: 1,
  id: 3,
  total: 0
  },
  {
    prodName: 'Mobil L',
  price: 4000,
  quantity: 1,
  id: 4,
  total: 0
  },
  {
    prodName: '4 GB',
    price: 2000,
    quantity: 1,
    id: 5,
    total: 0
  },
  {  prodName: '10 GB',
  price: 3000,
  quantity: 1,
  id: 6,
  total: 0
  },
  {
    prodName: '40 GB',
  price: 4000,
  quantity: 1,
  id: 7,
  total: 0
  },
  {
    prodName: 'Gigaerős Korlátlan Internet',
  price: 5000,
  quantity: 1,
  id: 8,
  total: 0
  } */

]};


caart: Array<CartItem>;

dataSource: Array<CartItem> = [];
displayedColumns: Array<string> = [
  'prodName', 
  'price',
  'quantity',
  'id',
  'total',
  'action',
]
  cartService: any;

  constructor(private CartService: CartService){
    this.caart =JSON.parse(localStorage.getItem("webkert-products") ?? "[]") ;  
  }
  ngOnInit(): void{

    this.dataSource = this.cart.items;
  }

  getTotal(items: CartItem[]): number {
   return this.CartService.getTotal(items);
  }
  save(){    
    localStorage.setItem("webkert-products", JSON.stringify(this.caart))
  }

  load(){
    
    return JSON.parse(localStorage.getItem("webkert-products") ?? "[]") 

  }
  remove(item: CartItem){
    this.caart.splice(this.caart.indexOf(item), 1);    
    this.save();
  }


}
