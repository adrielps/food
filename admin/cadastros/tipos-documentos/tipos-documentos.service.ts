import { environment } from './../../../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { TiposDocumentos } from './tipos-documentos';
import { GenericModels } from '../GenericModels';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class TiposDocumentosService {

  constructor(private http: Http) { }
  public environment = environment;

  getAllTipos(): Observable<GenericModels> {        
      return this.http.get(this.environment.urlFood + '/tipos_documentos')
      .map(this.extractData)
      .catch(this.handleError);
    }    

    inserir(data: TiposDocumentos)  {
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: cpHeaders });        
      this.http.put(this.environment.urlFood, data, options)
      .subscribe((res:Response) => {console.log(res);});
      //console.log(environment.urlFood);      
    }

  /*  addCentros(centroscus: CentroCustos){         
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });        
        return this.http.post(this.centrocustosUrl, JSON.stringify(centroscus), options);
       // return this.http.post(this.centrocustosUrl, centroscus, options);

        //.map(res => res.json());
    }*/    

  private extractData(res: Response) {
	let body = res.json();
      return body;
    }
    private handleError (error: Response | any) {
	    console.error(error.message || error);
	    return Observable.throw(error.status);
    }

}
