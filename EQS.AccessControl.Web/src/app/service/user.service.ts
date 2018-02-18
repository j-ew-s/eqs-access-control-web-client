import { User } from './../shared/classes/user';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { ApiUrls } from './../shared/constants/api';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  apis: ApiUrls;
  constructor(private http: Http ) { 
    this.apis = new ApiUrls();
  }
  
  getAll(): Observable<any[]> {
    return this.http.get(this.apis.role_base)
    .map(result => result.json());
  }

  getById(userId:number): Observable<any[]>{
    return this.http.get(this.apis.role_base + userId.toString())
    .map(result => result.json());
  }

  create(user : User): Observable<any[]>{
    console.log("SAVE ROLE >> ", user);
    return this.http.post(this.apis.role_base, user)
    .map(result => result.json());
  }

  update(user : User): Observable<any[]>{
    return this.http.put(this.apis.role_base, user )
    .map(result => result.json());
  }
}
