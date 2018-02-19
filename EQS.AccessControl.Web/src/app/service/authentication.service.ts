import { Http, HttpModule,RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ApiUrls } from './../shared/constants/api';
import { TokenEnum } from './../shared/enum/tokenEnum';


@Injectable()
export class AuthenticationService {
  apis: ApiUrls;
  areaPermissions: any[] = [];
  constructor(private http: Http, ) { 
    this.apis = new ApiUrls();
    this.areaPermissions = [
      { 'area': 'Users', 'permissions': ["Admin", "RH"] },
      { 'area': 'Roles', 'permissions': ["Admin", "RH"] }
    ];
  }
  
    login(credentials): Observable<any[]> {
      return this.http.post(this.apis.login_url, credentials)
      .map(result => 
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
      return  tokenNotExpired();   
    }
  
    getCurrentUser(){
      debugger;
      let token = localStorage.getItem('token');
  
      if(!token) return false;
  
      let jwt = new JwtHelper().decodeToken(token);
      return jwt;
    }
  
    getCurrentUserRoles(){
      let token = localStorage.getItem('token');
      if(!token) return false;
      let jwt = new JwtHelper().decodeToken(token);
      return jwt[TokenEnum.role];
    }

    isAdmin(){
      let roles : any = this.getCurrentUserRoles();
      return roles == "Admin";
    }

}
