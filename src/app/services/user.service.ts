import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  register(user:any){

    return this.http.post('http://localhost:4000/users/register',user)
    //json format
    .pipe(map((res:any) => res.json()))
  }

  login(user:any){
    // from the nodejs link in app.js
    return this.http.post('http://localhost:4000/users/login',user)
    //json format
    .pipe(map((res:any) => res.json()))
  }
}
