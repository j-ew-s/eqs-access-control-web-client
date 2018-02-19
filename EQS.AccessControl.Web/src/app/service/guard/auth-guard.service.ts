import { AuthenticationService } from './../authentication.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private service: AuthenticationService, private route: Router) { }

  canActivate() {
    if (this.service.isTokenNotExpired()) {
      return true;
    }

    this.route.navigate(['/login']);
    return false;

  }
}
