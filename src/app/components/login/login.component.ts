import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/models/user.interface';
import { isNullOrUndefined } from 'util';
import { NgForm } from '@angular/forms';

const parserLUP = require('../../parser/parserLup');

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

    this.authService.rollback()
    .subscribe(data =>{
      if(data.error!=null){
        console.log("Error de conexión, rollback.");
      }
      else {
        console.log("Rollback ok.");
      }
    },
    error => {
      console.log(error);
    });
  }

  onLogin(f: NgForm): void {
    this.error = '';

    if(f.valid){
      this.authService.loginUser(this.user.usuario, this.user.clave)
      .subscribe( data => {
        if(data.error == null){
          console.log(data.toString());

          const ast = parserLUP.parse(data.toString());

          if(!isNullOrUndefined(ast)){
            let res = ast.getLogin();
            if(res){

              this.authService.generarStruc(this.user.usuario)
              .subscribe(data => {
                if(data.error == null){
                  let cad = data.toString().split('$').join('');
                  console.log(cad);
                
                  const ast = parserLUP.parse(data.toString());
                  
                  if(!isNullOrUndefined(ast)){
                    let struc = ast.getStruc();
                    this.authService.setStruc(struc);
                  }

                }
              },
              error =>{
                console.log(error);
              });

              this.authService.setUser(this.user);
              this.router.navigate(['/']);
              //window.location.href = "/inicio";
            } else {
              this.error = 'El usuario y la contraseña no coinciden.';
            }
          }

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
