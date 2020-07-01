import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Cdb } from 'src/app/models/cdb';

@Component({
selector: 'app-cdb',
templateUrl: './cdb.component.html',
styleUrls: ['./cdb.component.css']
})
export class CdbComponent implements OnInit {

cdbDestaque:Cdb;
constructor(private http:HttpClient) {}

ngOnInit(): void {
  this.loadCdb();
}

public async loadCdb(){
  const cdbs:Cdb[] = await Cdb.todosCdb(this.http);
  if(cdbs.length>0){
  this.cdbDestaque = cdbs[0];
}

}

}
