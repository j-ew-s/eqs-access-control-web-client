import { Http, HttpModule,RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ApiUrls } from './../shared/constants/api';

@Injectable()
export class AuthenticationService {
  apis: ApiUrls;
  constructor(private http: Http, ) { 
    this.apis = new ApiUrls();
  }
  
    login(credentials): Observable<any[]> {
      return this.http.post(this.apis.login_url, 
        {
          "username": credentials.username,
          "password": credentials.password
        }
      ).map(result => 
        result.json()
      );
    }
  
    addToLocalStorage(token){
       localStorage.setItem('token', token);
    }
  
    removeFromLocalStorage(){
      localStorage.removeItem('token');
    }
  
    isTokenNotExpired(){
      return tokenNotExpired();
    }
  
    getCurrentUser(){
      let token = localStorage.getItem('token');
  
      if(!token) return false;
  
      let jwt = new JwtHelper().decodeToken(token);
      return jwt;
    }
  
    getCurrentUserRoles(){
      let token = localStorage.getItem('token');
  
      if(!token) return false;
  
      let jwt = new JwtHelper().decodeToken(token);
      return jwt.role;
    }

}
