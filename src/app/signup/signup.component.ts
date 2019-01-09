import { Component, OnInit, ViewChild } from '@angular/core';
import { Registration } from '../shared/registration.interface';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('confirmPassword') confirmPassword: NgModel;
  @ViewChild('f') signupForm: NgForm;
  public registration: Registration; 

  ngOnInit() {
    this.registration = {
      lastName: '',
      firstName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  onSubmit(model: Registration, isValid: boolean) {
    // the "if code" below will prevent password and confirmPassword mismatch error
    // Without this code, we can input 1234567 for password, input 1234567 for confirm password
    // and change password to 12345678. Now the form is valid.
    // However the password is not matched with confirm password. 
    if (model.password != model.confirmPassword) {
      this.signupForm.form.controls['confirmPassword'].setErrors({'incorrect': true});
    }
    
  }

}
