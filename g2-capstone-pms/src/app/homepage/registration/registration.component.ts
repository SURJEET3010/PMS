import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'app/class_files/user';
import { AuthenticationService } from 'app/authentication.service';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  title: String[] =[
    'Mr',
    'Mrs',
    'Miss',
  ];


  constructor(private registerUser: AuthenticationService, 
                private router: Router, 
                private user: User,
                private datePipe: DatePipe) {
  }

  convertDate(date: any): any {
    const formattedDate = this.datePipe.transform(date, 'yyyy-MM-dd');
    return formattedDate;
  }
  


  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'you must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;

  onSubmit(value: any): void {
    this.user.title = value.title;
    this.user.firstName = value.firstName;
    this.user.lastName = value.lastName;
    this.user.email = value.email;
    this.user.contact = value.contact;
    this.user.dob = this.convertDate(value.dob);
    this.user.gender = value.gender;
    this.user.password = value.password;
    this.user.address = value.address;
    this.registerUser.save(this.user).subscribe(result => {
      console.log(result);
      this.gotoUserList()
    });
  }
  gotoUserList() {
    this.router.navigate(['dashboard']);
}
}
