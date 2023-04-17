import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import { MatDialogRef } from '@angular/material/dialog';

import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  today: any;

  title: String[] = ['Mr', 'Mrs', 'Miss'];

  patientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private service: RegisterService,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<RegistrationFormComponent>,
    private _snackBar: MatSnackBar
  ) {
    this.today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  // dob!:Date|any;

  // selectedDate!:any;
  // formatDate() {
  //   this.dob = this.datePipe.transform(this.selectedDate, 'dd-MM-yyyy');
  //   console.log(this.dob);

  // }

  dobFormatted!: any;
  formattedDate($event: any) {
    this.dobFormatted = this.datePipe.transform(
      $event.target.value,
      'dd-MM-yyyy'
    );
  }

  ngOnInit() {
    this.patientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: [this.formattedDate, Validators.required],
      contactNumber: ['', Validators.required], //Validators.pattern('^[6-9]{10}$')],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      gender: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.root.get('password');
    const confirmPassword = control.value;
    if (password && confirmPassword && password.value !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }

  // onSubmit() {
  //   this.http.post('http://localhost:9004/patient/register', this.patientForm.value)
  //     .subscribe(
  //       response => console.log('Form data submitted successfully'),
  //       error => console.log('An error occurred while submitting the form data')
  //     );
  // }

  registerForm() {
    this.patientForm.value.dob = this.dobFormatted;

    console.log(this.patientForm.value);

    if (this.patientForm.valid) {
      this.service.postRegister(this.patientForm.value).subscribe({
        next: (res) => {
          alert('user registered successfully');
          // this.openSnackBar('Registration Succesful');
          this._snackBar.open('Registration Succesful', '', {
            duration: 2000,
          });
          // console.log("user registered succesfully");
          this.patientForm.reset();
          this.dialogRef.close();
        },
        error: (err) => {
          console.log('error registering user');
          // this.openSnackBar('Registration failed ');
          this._snackBar.open('Registration failed', '', {
            duration: 2000,
          });
        },
      });
    }
  }
  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}
