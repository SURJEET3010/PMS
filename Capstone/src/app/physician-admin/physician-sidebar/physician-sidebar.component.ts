import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-physician-sidebar',
  templateUrl: './physician-sidebar.component.html',
  styleUrls: ['./physician-sidebar.component.css']
})
export class PhysicianSidebarComponent {

  constructor(
    @Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

}
