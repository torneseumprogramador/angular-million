import { Component, OnInit } from '@angular/core';
import { Acao } from 'src/app/models/acao';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {

  acaoDestaque:Acao;

  constructor(
    private http:HttpClient,
    private router:Router) { 

    }

  ngOnInit(): void {
    //this.acaoDestaque();
    this.loadAcoes();
  }

  
/* Modo feito com Callback
  public acaoDestaque(){
    
    acao:Acao;
    acoes:Acao[];
    
    Acao.getAcao((acoes)=>{
      this.acoes = acoes
      this.acao = acoes[0]
    },this.http)      

  }
*/
/*Modo feito com Async Await */
public async loadAcoes(){
  const acoes:Acao[]=await Acao.todos(this.http);
  if(acoes.length>0)
  this.acaoDestaque = acoes[0];
}

}
