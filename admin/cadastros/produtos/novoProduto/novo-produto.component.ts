import { NovoProduto } from './novo-produto';
import { NCMS } from './ncms';
import { NovoProdutoService } from './novo-produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  ncms: NCMS[] = [];

  constructor(private NovoProdutoService: NovoProdutoService) { } 

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');      
  }    
  
    getAllNcms() {    
          console.log(this.ncms); 
      this.NovoProdutoService.getAllNcms()
		  .subscribe(       
          data => {
            this.ncms = data.ncm; //ncm porque é o nome da tabela                
          });
    }    
}
