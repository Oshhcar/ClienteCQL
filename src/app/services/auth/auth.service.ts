import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';

import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

import { UserInterface } from '../../models/user.interface';
import { NodeInterface } from '../../models/node.interface';

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

  logoutUser(usuario: string) : Observable<any> {
    let contenido = "[+LOGOUT][+USER]"+usuario+"[-USER][-LOGOUT]";
    return this.http
    .post(this.baseUrl, {contenido}, {headers: this.headers})
    .pipe(map(data => data));
  }

  rollback() : Observable<any> {
    let contenido = "[+QUERY][+USER]admin[-USER][+DATA]rollback;[-DATA][-QUERY]";
    return this.http
    .post(this.baseUrl, {contenido}, {headers: this.headers})
    .pipe(map(data => data));
  }

  generarStruc(usuario: string) : Observable<any> {
    let contenido = "[+STRUC][+USER]"+usuario+"[-USER][-STRUC]";
    return this.http
    .post(this.baseUrl, {contenido}, {headers: this.headers})
    .pipe(map(data => data));
  }

  setStruc (struc: NodeInterface) {
    if(!isNullOrUndefined(struc)){
      let struc_string = JSON.stringify(struc);
      sessionStorage.setItem('struc', struc_string);
    }
  }

  getStruc (): NodeInterface [] {
    let struc_string = sessionStorage.getItem('struc');

    if (!isNullOrUndefined(struc_string)){
      let struc: NodeInterface = JSON.parse(struc_string);
      if(!isNullOrUndefined(struc.children)){
        return struc.children;
      }
      return [{name:"Empty"}];
    }
    return [{name:"Empty"}];
  }

  ejecutarQuery(contenido: string) : Observable<any>{
    //console.log(contenido);
    return this.http
    .post(this.baseUrl, {contenido}, {headers: this.headers})
    .pipe(map(data => data));
  }
}
