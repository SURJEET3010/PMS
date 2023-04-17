import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/homepage/login-form/login.service';

@Component({
  selector: 'app-patient-side-bar',
  templateUrl: './patient-side-bar.component.html',
  styleUrls: ['./patient-side-bar.component.css']
})
export class PatientSideBarComponent implements OnInit{
  constructor(private loginService: LoginService, private router:Router) { }

//  userString = sessionStorage.getItem("user");
name!:any;
user: any;

email!:any

 getPatientInfo(){
  console.log(this.user)
      console.log(this.user.email);
      
 }


  ngOnInit(): void {
    const userString = sessionStorage.getItem("user");
    if (userString) {
      const user = JSON.parse(userString);
      this.email = user.email;
      this.name = user.firstName+" "+user.lastName
      console.log(user)
      console.log(user.email);
      console.log(user.firstName);
    } else {
      console.log("No user found in sessionStorage.");
    }
  }

  loggedOut(){
    this.loginService.ispatientLoggedIn.next(false);
    console.log("loggedout");
    sessionStorage.removeItem('user')
    this.router.navigate(['/'])
  }

}
