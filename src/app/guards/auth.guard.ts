import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth/auth.service';
import { UserInterface } from '../models/user.interface';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{

  constructor(private authService: AuthService, private router: Router){}
  
  canActivate(){
    let user: UserInterface = this.authService.getUser();

    if(!isNullOrUndefined(user)){
      return true;
    }
    this.router.navigate(['/ingresar']);
    return false;
  }
  
}
