import { Component } from '@angular/core';
import { AuthorizationService } from './authorization.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyBookstore';
  
  get isLoggedIn() { 
    return this.authorizationService.isLoggedIn;
  }

  onLogout() {
    this.authorizationService.logout()
  }

  constructor( private authorizationService : AuthorizationService) {} 
  
}
