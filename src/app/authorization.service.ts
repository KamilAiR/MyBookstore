import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  logged = true; 
  
  get isLoggedIn() : boolean {
    return this.logged;
  }

  login(email : string, password : string) {
    console.log(email, password);
    this.logged = true;
    this.router.navigate(['/home']);
    }

  logout() {
    this.logged = false; 
    this.router.navigate(['/login']);
  }

  constructor(private router : Router) { }
}
