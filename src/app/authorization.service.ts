import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  logged = false; 
  
  get isLoggedIn() : boolean {
    return this.logged;
  }

  login(email : string, password : string) {
    // console.log(email, password);
    // this.logged = true;
    // this.router.navigate(['/home']);
    console.log(email, password);
    this.httpClient.post(environment.apiUrl + '/api/auth/login', { username: email, password: password})
    .subscribe(response => {
      console.log(response);
      this.logged = true;
      this.router.navigate(['/home']);
    }, err => {
      console.log(err);
    });

    this.logged = true;
    this.router.navigate(['/home']);
    }

  logout() {
    this.logged = false; 
    this.router.navigate(['/login']);
  }

  constructor(private router : Router, private httpClient : HttpClient) { }
}
