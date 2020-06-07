import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Component({
  selector: 'app-cdb',
  templateUrl: './cdb.component.html',
  styleUrls: ['./cdb.component.css']
})
export class CdbComponent implements OnInit {

  constructor(private http:HttpClient) {}

  private rest_api_server = "https://cdb-service.herokuapp.com/cdb.json";
  
  public cdbs = []

  ngOnInit(): void {

    this.http.get(this.rest_api_server,{ headers: new HttpHeaders({'token':'123456'})}).subscribe((data: any[])=>{
      this.cdbs = data;
    })

  }

}



