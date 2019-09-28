import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.router.url.toString() == '/inicio'){
      this.inicio = true;
      //this.calendario = false;
    } else if(this.router.url.toString() == '/calendario'){
      //this.inicio = false;
      this.calendario = true;
    } else if(this.router.url.toString() == '/plan-tratamiento'){
      this.planes = true;
    }else {
      this.administrar = true;
    }
  }

  inicio: boolean;
  calendario: boolean;
  administrar: boolean;
  planes: boolean;
  toggled2: boolean;

  sidebarCollapse2(): void{
    if(this.toggled2){
      let element = document.getElementById('wrapper');
      element.className = '';
      let clase = document.body.className.replace(" sidebar2","");
      document.body.className = clase.toString();
      this.toggled2 = false;
    } else {
      let element = document.getElementById('wrapper');
      element.className = 'toggled2';
      let clase = document.body.className.concat(" sidebar2");
      document.body.className = clase.toString();
      this.toggled2 = true;
    }
    
  }
}
