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

  showError = false; 

  constructor( private authorizationService : AuthorizationService, private router :Router ) { }

  closeErrorMessage()
  {
    this.showError = false;
  }

  ngOnInit(): void {
  }

  register() {
    if( this.username=="" || this.email == "")
    {
      this.showError = true; 
    }
    else{
      this.authorizationService.register(this.username, this.password, this.email).subscribe (p => {
        this.router.navigate(['/login']);
        this.showError = false;
      });
    }
  }
}
