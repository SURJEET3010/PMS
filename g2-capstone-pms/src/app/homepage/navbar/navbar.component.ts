import { LoginFormComponent } from '../login-form/login-form.component';
import { RegistrationComponent } from './../registration/registration.component';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {

  // isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  //   .pipe(
  //     map(result => result.matches),
  //     shareReplay()
  //   );

  openAddEditEmpForm() {
    this._dialog.open(RegistrationComponent);
  }
  
  
  openLoginPage(){
    this._dialog.open(LoginFormComponent);
  }


  constructor(private breakpointObserver: BreakpointObserver,
     private _dialog: MatDialog,
      @Inject(DOCUMENT) public document: Document,
      public auth: AuthService) {



    window.addEventListener('scroll', function(){
      var mattoolbar:any = document.querySelector("mat-toolbar");
      mattoolbar.classList.toggle("sticky", window.scrollY > 0);
    }
    )
  }

  ngOnInit(): void {
  }


}
