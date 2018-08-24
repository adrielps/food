import { ClientesService } from './clientes.service';
import { Component, OnInit } from '@angular/core';
import { Clientes } from './clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  clientes: Clientes[] = [];

  constructor(private ClientesService: ClientesService) { } 

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');    
    this.getAllClientes();     
  }

    getAllClientes() {
      this.ClientesService.getAllClientes()
		  .subscribe(       
          data => {
            this.clientes = data.clientes;
          } );
    }

}
