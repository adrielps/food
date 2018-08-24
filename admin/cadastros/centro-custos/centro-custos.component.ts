import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CentroCustosService } from './centro-custos.service';
import { CentroCustos} from './centro-custos';

@Component({
  selector: 'app-centro-custos',
  templateUrl: './centro-custos.component.html',
  styleUrls: ['./centro-custos.component.css']
})
export class CentroCustosComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  //allcentrocustoss: CentroCustos[];
  //statusCode: number;
  //requestProcessing = false;
  //centrocustosIdToUpdate = null;
  //processValidation = false;
  centros: CentroCustos[] = [];
  centrosAny: any[];
  addDescricao = {
    id: 0,
    descricao:""
  }   

  //questions: CentroCustos[] = [];   
 
  // Cria um construtor para obter o construtor de instância de serviço
  constructor(private centrocustosService: CentroCustosService) { } 

  ngOnInit() {
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');    
    this.getAllcentrocustoss();    
  }

    centrocustosForm = new FormGroup({
      descricao: new FormControl('', Validators.required)
    });

    //Listar Centros Custos
    getAllcentrocustoss() {
      this.centrocustosService.getAllcentrocustoss()
		  .subscribe(       
          data => {
            this.centros = data.centro_custos;
          } );
    }
      
  // Apagar o C.C.
    deleteCC(ID: number){
      if (confirm('Apagar ?') == true) {
        this.centrocustosService.deleteCC(ID)
        .subscribe(x => {
          this.centrocustosService.getAllcentrocustoss();
          //alert("Deleted Successfully","Employee Register");
        }) 
      }      
    }
/*
    updateCC(ID: number){
      if (confirm('Apagar ?') == true) {
        this.centrocustosService.updateCC(ID)
        .subscribe(x => {
          this.centrocustosService.getAllcentrocustoss();
          //alert("Deleted Successfully","Employee Register");
        }) 
      }      
    }*/




    /* salvar() {
          this.centrocustosService.addCentros(this.addDescricao)
          .subscribe(
              descricao => { this.addDescricao.unshift(this.addDescricao);
              })
     }*/
          
      /*this.centrocustosService.addCentros(this.addDescricao)
      .subscribe(       
          data => {
            let res: CentroCustos = <CentroCustos>data;
          });
}*/
     

/*
   //Handle create and update centrocustos
   oncentrocustosFormSubmit() {
	  this.processValidation = true;  
	  if (this.centrocustosForm.invalid) {
	       return; //Validation failed, exit from method.
	  }
	  //Form is valid, now perform create or update
    this.preProcessConfigurations();
	  let centrocustos = this.centrocustosForm.value;
    debugger
	  if (this.centrocustosIdToUpdate === null) {  
	    //Generate centrocustos id then create centrocustos
        this.centrocustosService.getAllcentrocustoss()
	      .subscribe(data => {
			
		   //Generate centrocustos id	 
		   //let maxIndex = data.length - 1;
		   //let centrocustosWithMaxIndex = data[maxIndex];
		   //let centrocustosId = centrocustosWithMaxIndex.id + 1;
		   //centrocustos.id = centrocustosId;
		   console.log(centrocustos);
		    //Create centrocustos
     	  this.centrocustosService.createcentrocustos(centrocustos)
			  .subscribe(successCode => {
				   this.statusCode = successCode;
				   this.getAllcentrocustoss();	
				   this.backToCreatecentrocustos();
				 },
				 errorCode => this.statusCode = errorCode
			   );
		 });		
	   } else {  
   	     //Handle update centrocustos
      centrocustos.id = this.centrocustosIdToUpdate; 		
	    this.centrocustosService.updatecentrocustos(centrocustos)
	      .subscribe(successCode => {
		    this.statusCode = successCode;
		    this.getAllcentrocustoss();	
		    this.backToCreatecentrocustos();
		},
		errorCode => this.statusCode = errorCode);	  
	   }
   }
   //Load centrocustos by id to edit
   /*loadcentrocustosToEdit(centrocustosId: string) {
      this.preProcessConfigurations();
      this.centrocustosService.getcentrocustosById(centrocustosId)
	   .subscribe(centrocustos => {
	            this.centrocustosIdToUpdate = centrocustos.id;   
	            this.centrocustosForm.setValue({descricao: centrocustos.descricao});
	   	    this.processValidation = true;
		    this.requestProcessing = false;   
	   },
      errorCode =>  this.statusCode = errorCode);   
   }
   //Delete centrocustos
   deletecentrocustos(centrocustosId: string) {
      this.preProcessConfigurations();
      this.centrocustosService.deletecentrocustosById(centrocustosId)
	      .subscribe(successCode => {
		  //this.statusCode = successCode;
	   //Expecting success code 204 from server
		  this.statusCode = 204;
		  this.getAllcentrocustoss();	
		  this.backToCreatecentrocustos();
		},
		errorCode => this.statusCode = errorCode);    
   }
   //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
      this.requestProcessing = true;   
   }
   //Go back from update to create
   backToCreatecentrocustos() {
      this.centrocustosIdToUpdate = null;
      this.centrocustosForm.reset();	  
      this.processValidation = false;
   }*/

}

