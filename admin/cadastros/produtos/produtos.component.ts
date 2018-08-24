import { ProdutosService } from './produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produtos } from './produtos';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  produtos: Produtos[] = [];

  constructor(private ProdutosService: ProdutosService) { } 

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');    
    this.getAllProdutos();      
  }

    getAllProdutos() {
      this.ProdutosService.getAllProdutos()
		  .subscribe(       
          data => {
            this.produtos = data.produtos;
          } );
    }  

}
