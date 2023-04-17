import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css'],
})
export class ConfirmPasswordComponent {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}
  patientForm!: FormGroup;
  ngOnInit() {
    this.patientForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.root.get('password');
    const confirmPassword = control.value;
    if (password && confirmPassword && password.value !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.patientForm.value['password']);
    this.http
      .post(
        'http://localhost:9004/api/v1/change-password',
        this.patientForm.value['password'],
        { withCredentials: true }
      )
      .subscribe({
        next: (res) => {
          // console.log("password changed successfully");
          this._snackBar.open('Password changed successfully', '', {
            duration: 2000,
          });
          this.router.navigate(['/login-form']);
        },
        error: (err) => {
          console.log('Error occured');
        },
      });
  }
}
