import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserInterface } from 'src/app/models/user.interface';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

const parserLUP = require('../../parser/parserLup');

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,
    private router:Router) { }

  user: UserInterface;
  toggled: boolean;
  usuario: string;
  errorModal: string;

  ngOnInit() {
    this.user = this.authService.getUser();

    if(!isNullOrUndefined(this.user)){
      this.usuario = this.user.usuario.charAt(0).toUpperCase() + this.user.usuario.slice(1);
    }
    this.errorModal = "";
  }
  
  onLogout(): void {
    this.errorModal = "";

    this.authService.logoutUser(this.user.usuario)
    .subscribe(data => {
      if(data.error == null){
        console.log(data.toString());

        const ast = parserLUP.parse(data.toString());

        if(!isNullOrUndefined(ast)){
          let res = ast.getLogout();
          if(res){
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('struc');
            this.router.navigate(['/ingresar']);
          } else {
            this.errorModal = 'El usuario no coincide.';
            console.log(this.errorModal);
          }
        }
      }
      else{
        this.errorModal = "Error de conexión, inténtelo de nuevo.";
        console.log(this.errorModal);

      }
    },
    error => {
      console.log(error);
      this.errorModal = "Error de conexión, inténtelo de nuevo.";
      console.log(this.errorModal);

    });
  }

  goPageTop(): void{
    window.scroll(0,0);
  }

  sidebarCollapse(): void{
    if(this.toggled){
      let element = document.getElementById('wrapper');
      let elementClase = element.className.replace(" toggled","");
      element.className = elementClase.toString();
      let clase = document.body.className.replace(" navbar2","");
      document.body.className = clase.toString();
      this.toggled = false;
    } else {
      let element = document.getElementById('wrapper');
      let elementClase = element.className.concat(" toggled");
      element.className = elementClase.toString();
      let clase = document.body.className.concat(" navbar2");
      document.body.className = clase.toString();
      this.toggled = true;
    }
    
  }

}
