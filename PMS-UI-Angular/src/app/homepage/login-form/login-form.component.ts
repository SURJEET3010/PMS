
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm!: FormGroup;
  patientData: any;
  // ispatientLoggedIn=new BehaviorSubject<boolean>(false)
  constructor(private router:Router,private http:HttpClient,private fb: FormBuilder,private service:LoginService,
    private dialog:MatDialog,private _snackBar: MatSnackBar){}


  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    this.reloadLoginForm();
  }


  openRegistrationForm(){

    this.dialog.open(RegistrationFormComponent)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  login() {
   if (this.loginForm.valid){
    console.log(this.loginForm.value)

    this.service.postLogin(this.loginForm.value).subscribe({
      next:(res) => {
        this.service.ispatientLoggedIn.next(true);
        sessionStorage.setItem("user",JSON.stringify(res));
        this.router.navigate(['/dashboard-p']);
      },
      error:(err) =>{

        this._snackBar.open("Invalid Email or Password", 'Dismiss', {
          duration: 2000,
        });
        console.log("error occured "+err);
        
      }
    });
   }
  }
  reloadLoginForm(){
    const userData = sessionStorage.getItem("user");
    if (userData) {
      console.log(userData);
      const user = JSON.parse(userData);
      this.service.ispatientLoggedIn.next(true);
      this.patientData = user;
      this.router.navigate(['/dashboard-p']);
    }
  }
}

