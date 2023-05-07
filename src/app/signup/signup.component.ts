
import { AuthService } from './../services/auth.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private location: Location, private AuthService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.signUpForm.value);
    const email = this.signUpForm.get('email')?.value as string;
    const password = this.signUpForm.get('password')?.value as string;
    this.AuthService.signup(email, password).then(cred => {
      console.log(cred);
      const userEmail = this.signUpForm.get('email')?.value;
      const username = userEmail ? userEmail.split('@')[0] : '';

    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }

}