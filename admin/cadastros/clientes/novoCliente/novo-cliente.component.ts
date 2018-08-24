import { NovoClienteService } from './novo-cliente.service';
import { Component, OnInit } from '@angular/core';
import { NovoCliente } from './novo-cliente';

@Component({
  selector: 'app-novo-cliente',
  templateUrl: './novo-cliente.component.html',
  styleUrls: ['./novo-cliente.component.css']
})
export class NovoClienteComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  cidades: NovoCliente[] = [];

 constructor(private NovoClienteService: NovoClienteService) { } 

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');   
  }
    
    getAllCidades() {
      this.NovoClienteService.getAllCidades()
		  .subscribe(       
          data => {
            this.cidades = data.cidades;
          });
    }
}
