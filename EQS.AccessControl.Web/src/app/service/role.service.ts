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
  constructor(private http: Http, ) { 
    this.apis = new ApiUrls();
  }

  getAll(): Observable<any[]> {
    return this.http.get(this.apis.role_get)
    .map(result => result.json());
  }

  getById(roleId:number): Observable<any[]>{
    return this.http.get(this.apis.role_get + roleId.toString())
    .map(result => result.json());
  }

}
