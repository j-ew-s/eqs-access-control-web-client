import { AuthenticationService } from './../authentication.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthAdmin implements CanActivate {
  
    constructor(private service: AuthenticationService, private route: Router) { }
  
    canActivate() {
      if (this.service.isAdmin()) {
        return true;
      }
  
      this.route.navigate(['/login']);
      return false;
  
    }
  }
  