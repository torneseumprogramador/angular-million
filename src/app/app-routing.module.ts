import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { TesouroHomeComponent } from './view/tesouro-home/tesouro-home.component';
import { NaoEncontradoComponent } from './view/nao-encontrado/nao-encontrado.component';


const routes: Routes = [
{ path : '', component: LoginComponent },
{ path : 'home', component: HomeComponent },
{ path : 'tesouro', component: TesouroHomeComponent },
{ path : '**', component: NaoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
