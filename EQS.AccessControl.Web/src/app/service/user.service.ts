import { SearchObject } from './../shared/classes/search-object';
import { SpecificErrorHandler } from './handler/error/SpecificErrorHandler';
import { User } from './../shared/classes/user';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ApiUrls } from './../shared/constants/api';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserService {

  apis: ApiUrls;
  errorHandler : SpecificErrorHandler;
  
  constructor(private http: Http ) { 
    this.apis = new ApiUrls();
    this.errorHandler = new SpecificErrorHandler();    
  }
  
  getAll(): Observable<any[]> {
    return this.http.get(this.apis.register_getAll)
    .map(result => result.json())
    .catch(this.errorHandler.handleError);
  }

  getAllFilter(searchObject : SearchObject): Observable<any[]>{
    return this.http.post(this.apis.register_filterSearch, searchObject)
    .map(result => result.json())
    .catch(this.errorHandler.handleError);
  }

  getById(userId:number): Observable<any[]>{
    return this.http.get(this.apis.register_base + userId)
    .map(result => result.json())
    .catch(this.errorHandler.handleError);
  }

  create(user : User): Observable<any[]>{
    return this.http.post(this.apis.register_base, user)
    .map(result => result.json())
    .catch(this.errorHandler.handleError);
  }

  update(user : User): Observable<any[]>{
    return this.http.put(this.apis.register_base, user )
    .map(result => result.json())
    .catch(this.errorHandler.handleError);
  }

  delete(roleId : number): Observable<any[]>{
    return this.http.delete(this.apis.register_base + roleId)
    .map(result => result.json())
    .catch(this.errorHandler.handleError);
  }
}
