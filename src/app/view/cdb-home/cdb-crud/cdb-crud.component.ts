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
      this.erro = e.error
    }
  }

  limpar(){
    this.cdb = new Cdb()
  }

  async buscarTodos(){
    this.cdbs = await Cdb.todosCdb(this.http)
  }

  // build(de, para){
  //   for(let pPara of Object.keys(para)){
  //     if(pPara === "http") continue
  //     for(let pDe of Object.keys(de)){
  //       if(pDe === pPara){
  //         para[pPara] = de[pDe]
  //       }
  //     }
  //   }
  // }

  async editar(cdb:Cdb){

    // @ts-ignore
    // cdbGlobal = cdb

    // localStorage.setItem("cdb", JSON.stringify(cdb))

    // this.build(cdb, this.cdb)
    this.cdb._id = cdb._id
    this.cdb.nome = cdb.nome
    this.cdb.valor_taxa = cdb.valor_taxa
    this.cdb.data_compra = new Date(cdb.data_compra)
    this.cdb.vencimento = new Date(cdb.vencimento)
  }

  async excluir(cdb){
    if(confirm("Confirma?")){
      this.cdb._id = cdb._id
      await this.cdb.excluir(this.http)
      this.buscarTodos()
    }
  }


}
