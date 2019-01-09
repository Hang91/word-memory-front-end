import { Component, OnInit, ViewChild } from '@angular/core';
import { Signin } from '../shared/signin.interface';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signinForm: NgForm;
  
  public signIn: Signin;
  public signInSuccess: boolean;
  constructor() { }

  ngOnInit() {
    this.signIn = {
      email: '',
      password: ''
    }
    this.signInSuccess = true;
  }

  onSubmit(model: Signin) {
    this.signInSuccess = false;
    console.log(model);
  }

}
