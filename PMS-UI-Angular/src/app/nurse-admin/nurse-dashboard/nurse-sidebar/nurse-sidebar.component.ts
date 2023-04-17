import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nurse-sidebar',
  templateUrl: './nurse-sidebar.component.html',
  styleUrls: ['./nurse-sidebar.component.css']
})
export class NurseSidebarComponent {

  constructor(
    @Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
}
