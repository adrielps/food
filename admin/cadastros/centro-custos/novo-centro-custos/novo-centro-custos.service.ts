import { GenericModels } from './../../GenericModels';
import { Observable } from 'rxjs';
import { environment } from './../../../../../environments/environment.prod';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NovoCentroCustosService {

  constructor(private http: Http) { }
  public environment = environment;

  getEmpresas(): Observable<GenericModels> {        
    return this.http.get(this.environment.urlFood + '/empresas')
    .map(this.extractData)
    .catch(this.handleError);
  }

  private extractData(res: Response) {
      let body = res.json();
      return body;
  }

  private handleError (error: Response | any) {
      console.error(error.message || error);
      return Observable.throw(error.status);
  }  

}
