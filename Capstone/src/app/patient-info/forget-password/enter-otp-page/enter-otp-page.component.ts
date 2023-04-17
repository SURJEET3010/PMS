import { ForgetPasswordService } from 'src/app/services/forget-password.service';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-enter-otp-page',
  templateUrl: './enter-otp-page.component.html',
  styleUrls: ['./enter-otp-page.component.css']
})
export class EnterOtpPageComponent {

  constructor(private fb: FormBuilder,public service : ForgetPasswordService, private router: Router, private _snackBar: MatSnackBar){}

  numberForm!: FormGroup;

 

  
  openSnackBar(message:string) {
    this._snackBar.open(message);
  }

  ngOnInit() {
    this.numberForm = this.fb.group({
      otp: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{6}$')]),
      // otp: ['']
    });
  }  


  // getErrorMessage() {
  //   if (this.otp.hasError('required')) {
  //     console.log(this.otp);
  //     return 'You must enter a value';
  //   }

  //   return this.otp.hasError('otp') ? 'Not a valid  OTP' : '';
  // }

  VerifyOTP() {
    // console.log(this.numberForm.value)
    if (this.numberForm.valid){

      // console.log("otp "+this.numberForm.value['otp'])

      const data = this.numberForm.value

      console.log(data);

      console.log(JSON.stringify(data));
      

      this.service.OTPverfication(data).subscribe({
        next:(res)=>{
          console.log(res);
          if (res){

            console.log("correct otp");
            this.router.navigate(['./newPassword']);
            
          }else{
            this._snackBar.open("Wrong OTP", 'Dismiss', {
              duration: 2000,
            });
            
          }
          
          
        },
        error:(err)=>{
          console.log("In error");
          
          console.log(err);
          
        }
      })
      
    }
  }
}
