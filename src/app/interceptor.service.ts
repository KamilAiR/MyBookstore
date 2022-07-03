import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  constructor( private authorizationService :AuthorizationService) { }

  intercept( request: HttpRequest<any>, next: HttpHandler ) {
    const currentUser = this.authorizationService.currentUser;

    if (currentUser && currentUser.token) {
      request = request.clone( {
        setHeaders : {
          Authorization : `Bearer ${currentUser.token}`
        }
      })
    }
    return next.handle(request);
  }
}
