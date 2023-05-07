import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingCard } from './shopping-card';
import { Product } from '../model/product.model';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent {
  public mobilCsomagok: ShoppingCard[];
  public internetCsomagok: ShoppingCard[];
  @Input() fullWidthMode=false;
  product: Product | undefined = {
    
      id: 1,
      title: 'Mobil XS',
      price: 1800
  
  };
 @Output() addToCart = new EventEmitter();

 ngOnInit(){

 }

  constructor(private cartService: CartService){
    this.mobilCsomagok=[
      //amennyiben nincs megjelenítendő mobilcsomag, akkor azt kiírja --> ezek kikommentezésére ki is írja 
      new ShoppingCard(0, "Mobil XS","40 perc vagy SMS" , "Felhasználható belföldön vagy EU roaming helyzetben, alapdíjas irányba" , 1800 ),
      new ShoppingCard(1, "Mobil S","100 perc vagy SMS" , "Felhasználható belföldön vagy EU roaming helyzetben, alapdíjas irányba" , 2500 ),
      new ShoppingCard(2, "Mobil M","ComPhone hálózaton belül korlátlan, 30 perc vagy SMS bármely más belföldi és EU-s hálózatba " , "Korlátlan hívás és SMS belföldön, ComPhone mobil- és otthoni alapdíjas számok irányába" , 3000 ),
      new ShoppingCard(3, "Mobil L","Korlátlan hívás és SMS belföldön, és EU irányba korlátlan hívás" , "Korlátlan beszélgetés és SMS belföldi alapdíjas irányba, belföldről és az EU-ból is, illetve 10000 db SMS", 4000 )
    ]
    this.internetCsomagok=[
      //amennyiben nincs megjelenítendő mobilcsomag, akkor azt kiírja --> ezek kikommentezésére ki is írja 
      new ShoppingCard(4, "4 GB díjcsomag","4 GB mobilinternet belföldön és az EU-ban" , "A becsült maximális letöltési sebesség, belföldön 4G hálózaton 300 Mbit/s. A becsült maximális feltöltési sebesség 4G hálózaton 50 Mbit/s." , 2000 ),
      new ShoppingCard(5, "10 GB díjcsomag ","10 GB mobilinternet belföldön és EU-ban" , "A becsült maximális letöltési sebesség, belföldön 4G hálózaton 300 Mbit/s. A becsült maximális feltöltési sebesség 4G hálózaton 50 Mbit/s." , 3000 ),
      new ShoppingCard(6, "40 GB díjcsomag","40 GB mobilinternet belföldön és EU-ban" , "A netcsomagban foglalt 50 GB-ból 24 GB az EU-ban is felhasználható. A becsült maximális letöltési sebesség, belföldön 4G hálózaton 300 Mbit/s." , 4000 ),
      new ShoppingCard(7, "Gigaerős Korlátlan Internet","Korlátlan internet belföldön, 5G képesség" , "Ezzel a díjcsomaggal az 5G használatához szükséged van még: 5G képes eszközre és 5G lefedettségre. ", 5000 )
    ]
  }


  onAddToCart(product: Product): void{
    this.cartService.addToCart({
      prodName: product.title,
      id: product.id,
      price: product.price,
      quantity: 1,
      total: product.price
    });
    console.log("service add")
  
  }

}
export class CardOverviewExample {}