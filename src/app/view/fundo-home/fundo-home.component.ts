import { Component, OnInit } from '@angular/core';
import { Cdb } from 'src/app/models/cdb';

@Component({
  selector: 'app-fundo-home',
  templateUrl: './fundo-home.component.html',
  styleUrls: ['./fundo-home.component.css']
})
export class FundoHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    // this.cdb = cdbGlobal

    // this.cdb = JSON.parse(localStorage.getItem("cdb"))

  }

  cdb:Cdb

}
