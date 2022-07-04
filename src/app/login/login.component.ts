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

  showError = false; 

  constructor( private authorizationService : AuthorizationService) { }

  closeErrorMessage()
  {
    this.showError = false;
  }

  ngOnInit(): void {
  }

  login() {
    if( this.username =="" || this.password=="")
    {
      this.showError = true; 
    }
    else{
      this.authorizationService.login(this.username, this.password)
      this.showError = false; 
    }
  }

}
