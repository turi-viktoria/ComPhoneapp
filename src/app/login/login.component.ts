import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  loadingSubscription?: Subscription;
  loadingObservation?: Observable<boolean>;

  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      this.loading = true;
      if (this.email.value != null && this.password.value != null) {
        const cred = this.authService.login(this.email.value, this.password.value);
        console.log(cred);
        this.router.navigateByUrl('/shopping');
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.loading = false;
    }
  }

  ngOnDestroy() {
    this.loadingSubscription?.unsubscribe();
  }

}