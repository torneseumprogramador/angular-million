import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tesouro } from 'src/app/models/tesouro';

@Component({
  selector: 'app-tesouro',
  templateUrl: './tesouro.component.html',
  styleUrls: ['./tesouro.component.css']
})
export class TesouroComponent implements OnInit {

  tesouroDestaque:Tesouro;

  constructor( private http:HttpClient) { }

  ngOnInit(): void {
    this.loadTesouros();
  }

  public async loadTesouros(){

    const tesouros:Tesouro[]= await Tesouro.todosTesouro(this.http);
    if(tesouros.length > 0 )
      this.tesouroDestaque = tesouros[0];

  }
 

}
