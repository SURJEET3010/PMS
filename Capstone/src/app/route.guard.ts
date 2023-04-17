import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './homepage/login-form/login.service';
import { LoginFormComponent } from './homepage/login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private service:LoginService,private router: Router){}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.login.ispatientLoggedIn;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isLoggedIn = this.service.ispatientLoggedIn.value;
    if (isLoggedIn) {
     
      console.log("user logged in");
      // this.router.navigate(['/dashboard-p'])
       return true;
    } else {
      //  this.router.navigate(['/login-form'])
      return false;
    }
  }
}
