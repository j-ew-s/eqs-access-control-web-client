import { Role } from './../shared/classes/role';
import { Injectable } from '@angular/core';
import { Http, HttpModule,RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ApiUrls } from './../shared/constants/api';

@Injectable()
export class RoleService {

  apis: ApiUrls;
  constructor(private http: Http ) { 
    this.apis = new ApiUrls();
  }

  getAll(): Observable<any[]> {
    return this.http.get(this.apis.role_base)
    .map(result => result.json());
  }

  getById(roleId:number): Observable<any[]>{
    return this.http.get(this.apis.role_base + roleId.toString())
    .map(result => result.json());
  }

  create(role : Role): Observable<any[]>{
    console.log("SAVE ROLE >> ", role);
    return this.http.post(this.apis.role_base, role)
    .map(result => result.json());
  }

  update(role : Role): Observable<any[]>{
    return this.http.put(this.apis.role_base, role )
    .map(result => result.json());
  }

}
