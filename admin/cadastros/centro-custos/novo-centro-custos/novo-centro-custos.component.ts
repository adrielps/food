import { HttpHeaders } from '@angular/common/http';
import { environment } from './../../../../../environments/environment.prod';
import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/map';

import { NovoCentroCustosService } from './novo-centro-custos.service';
import { Empresas } from './novo-centro-custos';
import { CentroCustos } from './../centro-custos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Component({
  selector: 'app-novo-centro-custos',
  templateUrl: './novo-centro-custos.component.html',
  styleUrls: ['./novo-centro-custos.component.css']
})
export class NovoCentroCustosComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  empresas: Empresas[] = [];  
  
  private environment = environment;
  formulario: FormGroup;

  constructor(private http: Http,
              private NovoCentroCustosService: NovoCentroCustosService,
              private formBuilder: FormBuilder
            ) { }

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini'); 
    this.getEmpresas();
    /*this.formulario = new FormGroup({
      nome: new FormControl('null'),
      idEmpresa: new FormControl('null')
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null],
      idEmpresa: [null]
    });

  }

  getEmpresas() {
    this.NovoCentroCustosService.getEmpresas()
    .subscribe(       
        data => {
          this.empresas = data.empresas;
        });
  }

  onSubmit(){   
  var data = '/centro_custos';

  let headers = new HttpHeaders();
  headers.append('Content-Type' , 'application/json');
  
  let body = JSON.stringify(data);

    console.log(this.formulario.value);
    console.log(data);

    this.http.put(this.environment.urlFood, data, { headers: headers })
              .subscribe((res:Response) => {console.log(res);});

/*
    this.http.put(this.environment.urlFood, data, { headers: headers })//, 
                    // JSON.stringify(this.formulario.value))
    .map(res => res)
    .subscribe(dados => {
      console.log(dados);
      this.formulario.reset();
    });*/
  }

}
