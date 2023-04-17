import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

import { TypeEmailService } from 'src/app/services/type-email.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-type-email',
  templateUrl: './type-email.component.html',
  styleUrls: ['./type-email.component.css']
})
export class TypeEmailComponent {

  constructor(private fb: FormBuilder,public service : TypeEmailService, private router: Router, private _snackBar: MatSnackBar){}

  emailForm!: FormGroup;

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });


  }

    

  sendotp() {
  
      console.log(this.emailForm.value);
      if (this.emailForm.valid){
      this.service.postLogin(this.emailForm.value).subscribe({
        next:(res) => {

          console.log("Result : " +res);
          
          if (res){
          this.router.navigate(['/verifyOTP']);
          this._snackBar.open("OTP Sent", 'Dismiss', {
            duration: 3000,
          });
          }
        },
        error:(err) =>{
          this._snackBar.open(err.error.message, 'Dismiss', {
            duration: 2000,
          });
          
        }
      });

    }


  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email not valid';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  openSnackBar(message:string) {
    this._snackBar.open(message);
  }

}
