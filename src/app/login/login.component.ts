import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  username = "";
  password = "";

  constructor( private authorizationService : AuthorizationService) { }

  ngOnInit(): void {
  }

  login() {
    this.authorizationService.login(this.username, this.password)
  }

}
