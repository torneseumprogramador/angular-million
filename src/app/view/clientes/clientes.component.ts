import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

   //headers_token = new HttpHeaders();
   
   constructor( private http:HttpClient) { 
    //this.headers_token.append("Content-Type","application/json");
    //this.headers_token.append("Authorization","123456");
  }
  
  private rest_api_server = "https://service-clientes-stat.herokuapp.com/cliente";
  
  public clientes = []

  ngOnInit(): void {
    this.http.get(this.rest_api_server,{ headers: new HttpHeaders({'token':'123456'})}).subscribe((data: any[])=>{
      this.clientes = data;
    })

  }

}
