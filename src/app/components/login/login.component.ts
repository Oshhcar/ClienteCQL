import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user.interface';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private router: Router) {
      document.body.className = "bg-dark";
  }

  public user : UserInterface = {
    usuario:'',
    clave:''
  };

  error = '';

  ngOnInit() {
    this.titleService.setTitle("Iniciar Sesión - CQL Teacher");

    let user: UserInterface = this.authService.getUser();
    if(!isNullOrUndefined(user)){
      this.router.navigate(['/inicio']);
    }
  }

  onLogin(f: NgForm): void {
    this.error = '';

    if(f.valid){
      this.authService.loginUser(this.user.usuario, this.user.clave)
      .subscribe( data => {
        if(data.error == null){
          console.log(data);
          //this.authService.setUser(data.user);
          this.router.navigate(['/inicio']);
        }
        else{
          this.error = "Error de conexión, inténtelo de nuevo.";
        }
      },
      error => {
        console.log(error);
        this.error = "Error de conexión, inténtelo de nuevo.";
      });
    }
    else {
      this.error = "Complete el formulario por favor."
    }
  }

}
