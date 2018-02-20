import { SearchObject } from './../shared/classes/search-object';
import { SpecificErrorHandler } from './handler/error/SpecificErrorHandler';
import { BadInput } from './../shared/common/error/bad-input-error';
import { NotFoundError } from './../shared/common/error/notfound-error';
import { Role } from './../shared/classes/role';
import { Injectable } from '@angular/core';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'
import { JwtHelper, tokenNotExpired } from "angular2-jwt";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { ApiUrls } from './../shared/constants/api';
import { AppError } from '../shared/common/error/base/app-error';

@Injectable()
export class RoleService {

  apis: ApiUrls;
  errorHandler : SpecificErrorHandler;
  constructor(private http: Http) {
    this.apis = new ApiUrls();
    this.errorHandler = new SpecificErrorHandler();
  }

  getAll(): Observable<any[]> {
    return this.http.get(this.apis.role_base)
      .map(result => result.json())
      .catch(this.errorHandler.handleError);
  }

  getById(roleId: number): Observable<any[]> {
    return this.http.get(this.apis.role_base + roleId.toString())
      .map(result => result.json())
      .catch(this.errorHandler.handleError);
  }

  getAllFilter(searchObject : SearchObject): Observable<any[]>{
    debugger;
    return this.http.post(this.apis.role_filterSearch, searchObject)
    .map(result => result.json())
    .catch(this.errorHandler.handleError);
  }

  create(role: Role) {
    return this.http.post(this.apis.role_base, role)
      .map(result => result.json())
      .catch(this.errorHandler.handleError);
  }

  update(role: Role): Observable<any[]> {
    return this.http.put(this.apis.role_base, role)
      .map(result => result.json())
      .catch(this.errorHandler.handleError);
  }

}
