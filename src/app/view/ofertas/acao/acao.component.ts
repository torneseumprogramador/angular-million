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

  constructor(
    private http:HttpClient,
    private router:Router) { 

    }

  ngOnInit(): void {
    this.acaoDestaque();
  }

  acao:Acao;
  acoes:Acao[];

  public acaoDestaque(){
    
    Acao.getAcao((acoes)=>{
      this.acoes = acoes
      this.acao = acoes[0]
    },this.http)      

  }

}
