import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isSignUpMode: boolean = false; // Tracks if it's sign-up/forget password mode

  // Sign-in model
  signIn = {
    username: '',
    password: ''
  };

  // Forget password model
  forgetPassword = {
    email: '',
    oldPassword: '',
    newPassword: ''
  };

  // Toggle between sign-in and forget password forms
  toggleSignUpMode() {
    this.isSignUpMode = true;
  }

  toggleSignInMode() {
    this.isSignUpMode = false;
  }

  // Handle sign-in form submission
  onSignIn(form: any) {
    if (form.valid) {
      console.log('Sign-in form data:', this.signIn);
      // Handle sign-in logic here
    }
  }

  // Handle forget password form submission
  onForgetPassword(form: any) {
    if (form.valid) {
      console.log('Forget password form data:', this.forgetPassword);
      // Handle password change logic here
    }
  }
}
