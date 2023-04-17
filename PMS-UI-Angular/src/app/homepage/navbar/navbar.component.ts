import { LoginFormComponent } from './../login-form/login-form.component';
import { Component, ElementRef, ViewChild, Renderer2, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { MatButton } from '@angular/material/button';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';

import { LoginService } from '../appointment-form/services/login.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navMenuButton')
  navMenuButton!: MatButton;
  @ViewChild('sidebarMenu')
  sidebarMenu!: ElementRef;
  @ViewChild('sidebarCloseButton')
  sidebarCloseButton!: MatButton;

  constructor(private elementRef: ElementRef, private renderer: Renderer2,
    private loginService: LoginService,
    @Inject(DOCUMENT) public document: Document, public auth: AuthService,private router: Router) { }

  patientCount = 40;
  doctorCount = 30;
  appointmentCount = 1000;
  nurseCount =50;
  longText = `Request appointments based on slots, date,consultation location. Know your Doctor to book confirmed doctor date Appointments.`;
   

  openForm() {
    this.router.navigate(['/login-form']);
  }
  // opendashboard(){
  //   this.router.navigate(['/home']);
  // }
  ngOnInit():void {
    // setInterval(() => {
    //   this.patientCount = Math.floor(Math.random() * 100);
    //   this.doctorCount = Math.floor(Math.random() * 20);
    //   this.appointmentCount = Math.floor(Math.random() * 50);
    //   this.nurseCount = Math.floor(Math.random() * 40);
    // }, 1000);

    this.auth.user$.subscribe({
      next: (res) => {
        console.log(res); // Log the entire response object to see its structure
    
        const role = res?.['role'];
        console.log(role);
    
        if (role == 'Doctor') {
          this.router.navigateByUrl("/physician-dashboard");
          console.log("Physician");
        } else if (role == 'Admin') {
          this.router.navigateByUrl("/dashboard");
          console.log("Admin");
        } else if (role == 'Nurse') {
          this.router.navigateByUrl("/nurse-home");
          console.log("Nurse"); // Log "Nurse" instead of "Admin"
        }
      },
      error: (err) => {
        console.log("Error getting user data:", err);
      }
    });
  

    }

  
    routeButton(){
      {
        this.auth.user$.subscribe({
          next: (res) => {
            console.log(res?.['role'][0]);
            if (res?.['role'][0] == 'Physician') {
              this.router.navigateByUrl("/physician");
              console.log("Physician");
            }
            else if (res?.['role'][0] == 'Admin') {
              this.router.navigateByUrl("/admin");
              console.log("Admin");
            }else if (res?.['role'][0] == 'Nurse') {
              this.router.navigateByUrl("/nurse");
              console.log("Admin");
            }
          }
        });
      }
    }


}


