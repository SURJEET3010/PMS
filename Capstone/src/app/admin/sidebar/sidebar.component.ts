import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
    constructor(@Inject(DOCUMENT) public document: Document,public auth: AuthService){}
    
    ngOnInit():void {
  
      this.auth.user$.subscribe({
        next: (res) => {
          console.log(res); 
        },
        error: (err) => {
          console.log("Error getting user data:", err);
        }
      });
    
  
      }
}
