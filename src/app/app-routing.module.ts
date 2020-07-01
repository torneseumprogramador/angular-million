import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './view/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { TesouroHomeComponent } from './view/tesouro-home/tesouro-home.component';
import { NaoEncontradoComponent } from './view/nao-encontrado/nao-encontrado.component';

import { FundoComponent } from './view/ofertas/fundo/fundo.component';
import { TesouroComponent} from './view/ofertas/tesouro/tesouro.component';
import { AcaoComponent } from './view/ofertas/acao/acao.component';
import { AcaoHomeComponent } from './view/acao-home/acao-home.component';
import { FundoHomeComponent } from './view/fundo-home/fundo-home.component';
import { CdbHomeComponent } from './view/cdb-home/cdb-home.component';
import { PerfilHomeComponent } from './view/perfil-home/perfil-home.component';


const routes: Routes = [
{ path : '', component: LoginComponent },
{ path : 'tesouroHome', component: TesouroHomeComponent },
{ path : 'home', component: HomeComponent },
{ path : 'acaoHome', component:AcaoHomeComponent},
{ path : 'fundoHome', component:FundoHomeComponent},
{ path : 'cdbHome', component:CdbHomeComponent},
{ path : 'perfilHome', component:PerfilHomeComponent},
{ path : '**', component: NaoEncontradoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
