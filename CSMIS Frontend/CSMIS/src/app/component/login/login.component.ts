import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  staffId: string = '';
  password: string = '';
 
  onSubmit(form: NgForm) {
    if (form.valid) {
      // Handle the form submission logic here
      console.log('Form Submitted', form.value);
    }
  }
 
}