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

  get currentUser(): any {
    return JSON.parse(localStorage.getItem('currentUser') || '{}' );
  }

  login(username : string, password : string) {
    // console.log(email, password);
    // this.logged = true;
    // this.router.navigate(['/home']);
    console.log(username, password);
    this.httpClient.post(environment.apiUrl + '/api/auth/login', { username: username, password: password})
    .subscribe(response => {
      console.log(response);
      localStorage.setItem('currentUser', JSON.stringify(response));
      this.logged = true;
      this.router.navigate(['/home']);
    });
    }

  logout() {
    this.logged = false; 
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  register(username : string , password : string , email : string) {
    this.httpClient.post(environment.apiUrl + '/api/auth/register', { username: username, password: password, email: email})
    this.router.navigate(['/login']);
  }

  constructor(private router : Router, private httpClient : HttpClient) { 
    const user = localStorage.getItem('currentUser');
    if(user)
    {
      this.logged = true; 
    }
  }
}
