import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { PrincipianteComponent } from './components/principiante/principiante.component';
import { IntermedioComponent } from './components/intermedio/intermedio.component';
import { AvanzadoComponent } from './components/avanzado/avanzado.component';


const routes: Routes = [
  {path: 'ingresar', component: LoginComponent},

  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'inicio', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'principiante', component: PrincipianteComponent, canActivate: [AuthGuard]},
  {path: 'intermedio', component: IntermedioComponent, canActivate: [AuthGuard]},
  {path: 'avanzado', component: AvanzadoComponent, canActivate: [AuthGuard]},

  {path: '**', component: Page404Component, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
