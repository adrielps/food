import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment.prod';
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Usuario } from './usuario';
import { Quote } from '@angular/compiler';
import { concat } from 'rxjs/observable/concat';

@Injectable()
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private environment = environment;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router,
              private http: Http) { }
//SELECT F.LOGIN, F.SENHA FROM FUNCIONARIOS F WHERE F.LOGIN = 'SCVSUP' AND F.SENHA = 'admin' AND F.STATUS = 'A'
  fazerLogin(usuario, senha: Usuario){
  /*  debugger
    return this.http.get(this.environment.urlFood + 'funcionarios&LOGIN=' + concat(usuario.nome) + ' and SENHA=' + concat(usuario.senha))        
    .map(this.extractData)
    .catch(this.handleError);
*/
    if (usuario.nome === 'SCVSUP' &&
      usuario.senha === 'admin'){
        this.usuarioAutenticado = true;

        this.mostrarMenuEmitter.emit(true); 

        this.router.navigate(['/admin']);
        
      } else {
        this.usuarioAutenticado = false;
        this.mostrarMenuEmitter.emit(false);
      }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }

  private extractData(res: Response) {
    let body = res.json();
    return body;
  }
  private handleError (error: Response | any) {
    debugger
    console.error(error.message || error);
    return Observable.throw(error.status);
   }

}
