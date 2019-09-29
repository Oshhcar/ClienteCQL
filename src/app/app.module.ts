import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { Title } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatTreeModule, MatIconModule, MatButtonModule } from '@angular/material'

import { NgxBlocklyModule } from 'ngx-blockly';

//Services
import { AuthService } from './services/auth/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Page404Component } from './components/page404/page404.component';
import { AvanzadoComponent } from './components/avanzado/avanzado.component';
import { IntermedioComponent } from './components/intermedio/intermedio.component';
import { PrincipianteComponent } from './components/principiante/principiante.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorComponent } from './components/editor/editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    Page404Component,
    AvanzadoComponent,
    IntermedioComponent,
    PrincipianteComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    NgxBlocklyModule
  ],
  providers: [
    Title,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
