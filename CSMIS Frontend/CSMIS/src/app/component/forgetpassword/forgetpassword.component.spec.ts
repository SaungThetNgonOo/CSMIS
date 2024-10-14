import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './forgetpassword.component';

describe('ForgetPasswordComponent', () => {
  let component: ForgetPasswordComponent;
  let fixture: ComponentFixture<ForgetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgetPasswordComponent],
      imports: [ReactiveFormsModule]  // Import necessary modules
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // trigger initial data binding
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    const forgetPasswordForm = component.forgetPasswordForm;
    const formValues = forgetPasswordForm.value;
    expect(formValues).toEqual({
      email: '',
      oldPassword: '',
      newPassword: ''
    });
  });

  it('should mark form invalid when empty', () => {
    const forgetPasswordForm = component.forgetPasswordForm;
    expect(forgetPasswordForm.valid).toBeFalsy(); // Form should be invalid initially
  });

  it('should validate email field as required', () => {
    const emailControl = component.email;
    expect(emailControl?.valid).toBeFalsy();  // Initially invalid
    expect(emailControl?.errors?.['required']).toBeTruthy(); // Should have required error

    // Set an invalid email and check validation
    emailControl?.setValue('invalid-email');
    expect(emailControl?.errors?.['email']).toBeTruthy();

    // Set a valid email and check validation
    emailControl?.setValue('test@example.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('should require the old password', () => {
    const oldPasswordControl = component.oldPassword;
    expect(oldPasswordControl?.valid).toBeFalsy(); // Initially invalid
    expect(oldPasswordControl?.errors?.['required']).toBeTruthy(); // Should have required error

    // Set a value to old password and check validity
    oldPasswordControl?.setValue('oldpassword');
    expect(oldPasswordControl?.valid).toBeTruthy();
  });

  it('should require the new password', () => {
    const newPasswordControl = component.newPassword;
    expect(newPasswordControl?.valid).toBeFalsy();  // Initially invalid
    expect(newPasswordControl?.errors?.['required']).toBeTruthy(); // Should have required error

    // Set a valid new password and check validity
    newPasswordControl?.setValue('newpassword123');
    expect(newPasswordControl?.valid).toBeTruthy();
  });

  it('should mark form valid when all fields are filled with valid data', () => {
    const forgetPasswordForm = component.forgetPasswordForm;

    forgetPasswordForm.controls['email'].setValue('test@example.com');
    forgetPasswordForm.controls['oldPassword'].setValue('oldpassword');
    forgetPasswordForm.controls['newPassword'].setValue('newpassword123');

    expect(forgetPasswordForm.valid).toBeTruthy();  // Form should be valid now
  });

  it('should log form data when form is valid and submitted', () => {
    spyOn(console, 'log');  // Spy on console.log to check output

    // Set valid values for the form fields
    component.forgetPasswordForm.controls['email'].setValue('test@example.com');
    component.forgetPasswordForm.controls['oldPassword'].setValue('oldpassword');
    component.forgetPasswordForm.controls['newPassword'].setValue('newpassword123');

    component.onSubmit();  // Trigger form submission

    expect(console.log).toHaveBeenCalledWith('Form Data:', {
      email: 'test@example.com',
      oldPassword: 'oldpassword',
      newPassword: 'newpassword123'
    });
  });

  it('should log "Form is invalid" when form is invalid and submitted', () => {
    spyOn(console, 'log');  // Spy on console.log to check output

    component.forgetPasswordForm.controls['email'].setValue('');  // Invalid email
    component.onSubmit();  // Trigger form submission

    expect(console.log).toHaveBeenCalledWith('Form is invalid');
  });
});
