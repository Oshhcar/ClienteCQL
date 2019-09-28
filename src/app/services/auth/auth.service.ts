import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { UserInterface } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost/api/Codigo';
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginUser(usuario: string, clave: string) : Observable<any>{
    let contenido = "[+LOGIN][+USER]"+usuario+"[-USER][+PASS]"+clave+"[-PASS][-LOGIN]";
    return this.http
    .post(this.baseUrl, {contenido}, {headers: this.headers})
    .pipe(map(data => data));
  }

  setUser (user: UserInterface) {
    let user_string = JSON.stringify(user);
    sessionStorage.setItem('user', user_string);
  }

  getUser (): UserInterface {
    let user_string = sessionStorage.getItem('user');

    if (!isNullOrUndefined(user_string)){
      let user: UserInterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser() {
    sessionStorage.removeItem('user');
  }
}
