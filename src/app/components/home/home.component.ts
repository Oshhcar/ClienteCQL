import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private titleService: Title) { 
    document.body.id ="page-top";
    document.body.className ="bg-light";
  }

  ngOnInit() {
    if(this.router.url.toString() == '/'){
      this.router.navigate(['/inicio']);
    }
    this.titleService.setTitle("Inicio - CQL Teacher");
  }

}
