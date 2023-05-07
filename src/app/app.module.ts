import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ContactsComponent } from './contacts/contacts.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SignupComponent } from './signup/signup.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input'; //loginban
import { MatFormFieldModule } from '@angular/material/form-field';  //loginban 
import { MatBadge, MatBadgeModule } from '@angular/material/badge';
import { CartComponent } from './cart/cart.component';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule} from '@angular/fire/compat';
import { AfterLoginSideComponent } from './after-login-side/after-login-side.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import { Valuta } from './valuta';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ShippingComponent,
    ShoppingComponent, 
   SignupComponent, LoginComponent, CartComponent, AfterLoginSideComponent, Valuta
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule, 
    MatListModule,
    MatGridListModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule, 
    MatInputModule,
    FlexLayoutModule,
    MatBadgeModule, // app.componentben
    MatTableModule, //Cartcomponentben 
    MatSnackBarModule, 
    AngularFireModule.initializeApp(environment.firebase),
    // provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
