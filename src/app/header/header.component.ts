import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() logout = new EventEmitter(); 

  get isLoggedIn() {
    return this.authorizationService.isLoggedIn;
  }

  constructor( private authorizationService : AuthorizationService ) { }

  ngOnInit(): void {
  }

  onLogoutClicked() {
    this.logout.emit(null);
  }
}
