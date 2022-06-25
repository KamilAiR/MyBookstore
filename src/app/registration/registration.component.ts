import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  username = "";
  password = "";
  email ="";

  constructor( private authorizationService : AuthorizationService, private router :Router ) { }

  ngOnInit(): void {
  }

  register() {
    this.authorizationService.register(this.username, this.password, this.email).subscribe (p => {
      this.router.navigate(['/login']);
    });
    
  }

}
