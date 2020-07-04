import { Component, OnInit } from '@angular/core';
import { Cdb } from 'src/app/models/cdb';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cdb-crud',
  templateUrl: './cdb-crud.component.html',
  styleUrls: ['./cdb-crud.component.css']
})
export class CdbCrudComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.cdb = new Cdb()
  }
  
  cdb:Cdb
  sucesso:string
  erro:string

  async salvar(){
    try{
      await this.cdb.salvar(this.http)
      this.sucesso = 'criiiiiiiiiiado com sucessssssssssssssssssssssssssssssssssssso'
      this.erro = ''
    }
    catch(e){
      this.sucesso = ''
      this.erro = e.message
    }
  }

}
