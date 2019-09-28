import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  {path: 'ingresar', component: LoginComponent},

  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'inicio', component: HomeComponent, canActivate: [AuthGuard]},

  {path: '**', component: Page404Component, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
