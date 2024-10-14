import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    // Initialize the form with validation rules
    this.forgetPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  // Form submission handler
  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      const formData = this.forgetPasswordForm.value;
      console.log('Form Data:', formData);
      // Implement your password change logic here
    } else {
      console.log('Form is invalid');
    }
  }

  // Getter methods for easier access to form controls in the template
  get email() {
    return this.forgetPasswordForm.get('email');
  }

  get oldPassword() {
    return this.forgetPasswordForm.get('oldPassword');
  }

  get newPassword() {
    return this.forgetPasswordForm.get('newPassword');
  }
}
