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
    this.buscarTodos()
  }
  
  cdb:Cdb
  cdbs:Cdb[]
  sucesso:string
  erro:string

  async salvar(){
    try{
       debugger
      await this.cdb.salvar(this.http)
      if(!this.cdb._id){
        this.sucesso = 'Criado com sucesso'
      }else{
        this.sucesso = 'Alterado com sucesso'
      }

        this.erro = ''
       
        this.buscarTodos()
        
    }
    catch(e){
      this.sucesso = ''
      this.erro = e.message
    }
  }

    async buscarTodos(){

      this.cdbs = await  Cdb.todosCdb(this.http)
    }
  

    async editar(cdb:Cdb){

      this.cdb = cdb
    }

    async excluir(cdb){
      if(confirm("Confirma?")){

      await  this.cdb.excluir(this.http)
      }
    }


}
