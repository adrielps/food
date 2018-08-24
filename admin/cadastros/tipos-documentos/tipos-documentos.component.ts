import { TiposDocumentosService } from './tipos-documentos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClient , HttpClientModule, HttpHeaders  } from '@angular/common/http';
import { TiposDocumentos } from './tipos-documentos';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Component({
  selector: 'app-tipos-documentos',
  templateUrl: './tipos-documentos.component.html',
  styleUrls: ['./tipos-documentos.component.css']
})

export class TiposDocumentosComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  
  tipos: TiposDocumentos[] = [];

  //formTiposDocumentos: FormGroup;
  constructor(private tiposService: TiposDocumentosService) { } 

  //constructor(private http : HttpClient) { }
  
  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
    this.getAllTipos();
  }

  getAllTipos() {
    this.tiposService.getAllTipos()
    .subscribe(       
        data => {
          this.tipos = data.tipos_documentos;
        });
  }


  tiposdocs = {};
  docsObj:object = {};

  addNewTipos = function (tipos) {
    const url ="http://localhost:8080/datasnap/rest/TServerMethods1/padrao";

    this.docsObj = {
      "id" : 0,
      "descricao" : tipos.nome  
    }
    
    this.tabela = {
      "tipos_documentos" :[this.docsObj]
    }      
      var data = this.tabela;

      console.log(JSON.stringify(data));
      let headers = new HttpHeaders();
      headers.append('Content-Type' , 'application/json');

      let body = JSON.stringify(data);
      
      this.http.put(url, data, { headers: headers }).subscribe((res:Response) => {console.log(res);});
      console.log(url);
    }
}
 