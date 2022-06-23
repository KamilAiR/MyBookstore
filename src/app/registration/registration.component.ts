import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username = "";
  password = "";
  email ="";

  constructor( private authorizationService : AuthorizationService) { }

  ngOnInit(): void {
  }

  register() {
    this.authorizationService.register(this.username, this.password, this.email)
  }

}
