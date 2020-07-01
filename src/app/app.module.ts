import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { ClientesComponent } from './view/clientes/clientes.component';
import { CdbComponent } from './view/ofertas/cdb/cdb.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { AcaoComponent } from './view/ofertas/acao/acao.component';
import { TesouroComponent } from './view/ofertas/tesouro/tesouro.component';
import { FundoComponent } from './view/ofertas/fundo/fundo.component';
import { OfertasComponent } from './view/ofertas/ofertas.component';
import { InformativoComponent } from './view/informativo/informativo.component';
import { TesouroHomeComponent } from './view/tesouro-home/tesouro-home.component';
import { NaoEncontradoComponent } from './view/nao-encontrado/nao-encontrado.component';
import { AcaoHomeComponent } from './view/acao-home/acao-home.component';
import { FundoHomeComponent } from './view/fundo-home/fundo-home.component';
import { CdbHomeComponent } from './view/cdb-home/cdb-home.component';
import { PerfilHomeComponent } from './view/perfil-home/perfil-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ClientesComponent,
    CdbComponent,
    HeaderComponent,
    FooterComponent,
    AcaoComponent,
    TesouroComponent,
    FundoComponent,
    OfertasComponent,
    InformativoComponent,
    TesouroHomeComponent,
    NaoEncontradoComponent,
    AcaoHomeComponent,
    FundoHomeComponent,
    CdbHomeComponent,
    PerfilHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
