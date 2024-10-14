import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  userForm: FormGroup;
  submissionSuccess: boolean = false;
  submissionError: string | null = null; // To hold error messages
  loading: boolean = false; // For loading state

  constructor(private fb: FormBuilder) {
    // Initialize the form with validators
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid) {
      this.loading = true; // Start loading
      console.log(this.userForm.value);
      // Simulating a service call, replace with actual service
      setTimeout(() => {
        this.loading = false; // Stop loading
        this.submissionSuccess = true; // Mark success
        this.submissionError = null; // Clear previous error
        this.userForm.reset(); // Reset the form after successful submission
      }, 1000);
    } else {
      this.submissionError = 'Form is invalid. Please correct the errors and try again.';
      console.log(this.submissionError);
    }
  }
}
