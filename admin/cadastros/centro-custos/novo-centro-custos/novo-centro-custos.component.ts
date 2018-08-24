import { Component, OnInit } from '@angular/core';
import { NovoCentroCustosService } from './novo-centro-custos.service';
import { Empresas } from './novo-centro-custos';

@Component({
  selector: 'app-novo-centro-custos',
  templateUrl: './novo-centro-custos.component.html',
  styleUrls: ['./novo-centro-custos.component.css']
})
export class NovoCentroCustosComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  empresas: Empresas[] = [];

  constructor(private NovoCentroCustosService: NovoCentroCustosService) { }

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini'); 
    this.getEmpresas();
  }

  getEmpresas() {
    this.NovoCentroCustosService.getEmpresas()
    .subscribe(       
        data => {
          this.empresas = data.empresas;
        });
  }  

}
