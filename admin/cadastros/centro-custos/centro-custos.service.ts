import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CentroCustos } from './centro-custos';
import { GenericModels } from '../GenericModels';

@Injectable()
export class CentroCustosService {
    
    constructor(private http: Http) { }
    public environment = environment;

    getAllcentrocustoss(): Observable<GenericModels> {        
        return this.http.get(this.environment.urlFood + 'centro_custos')
        .map(this.extractData)
        .catch(this.handleError);
    }

    //Delete Centro Custos	
    deleteCC(ID: number): Observable<number> {
        debugger
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.delete(this.environment.urlFood + 'centro_custos&id=' + ID, options)
        .map(success => success.status)
        .catch(this.handleError);
    }	  

    //Update Centro Custos
    updateCC(ID: string){
        var body = JSON.stringify(ID);
        var headerOptions = new Headers({'Content-Type':'application/json'});
        var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
        return this.http.post(this.environment.urlFood + 'centro_custos&id=' + ID, body, requestOptions)
        .map(x => x.json());
     }

    /*
    addCentros(centroscus: CentroCustos){         
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });        
        return this.http.post(this.environment.urlFood, JSON.stringify(centroscus), options);
       // return this.http.post(this.centrocustosUrl, centroscus, options);

        //.map(res => res.json());
    }*/

    /*addCentros(descricao){         
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });        
        return this.http.post(this.centrocustosUrl, JSON.stringify(descricao), options);        
        /*return this.http.post(this.centrocustosUrl, addDescricao)
        .map(res=>res.json());*
    }    */




/*
    //Create centrocustos
    createcentrocustos(centrocustos: CentroCustos):Observable<number> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.centrocustosUrl, centrocustos, options)
               .map(success => success.status)
               .catch(this.handleError);
    }

    //Fetch centrocustos by id
    getcentrocustosById(centrocustosId: string): Observable<CentroCustos> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
    console.log(this.centrocustosUrl +"/"+ centrocustosId);
    return this.http.get(this.centrocustosUrl +"/"+ centrocustosId)
      .map(this.extractData)
      .catch(this.handleError);
    }	

    //Update centrocustos
    updatecentrocustos(centrocustos: CentroCustos):Observable<number> {
	   let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.centrocustosUrl +"/"+ centrocustos.ID, centrocustos, options)
               .map(success => success.status)
               .catch(this.handleError);
    }

    */
    private extractData(res: Response) {
	let body = res.json();
        return body;
    }
    private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
}
