import { AuthModule } from './../auth/auth.module';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './../auth/login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService: AuthService, //serviço de login
              private router: Router            //serviço de rotas
             ) { }

  canActivate(
    route: ActivatedRouteSnapshot, //recebe a rota
    state: RouterStateSnapshot,    //recebe o estado da rota
  ) : Observable<boolean> | boolean{
    
  if (this.authService.usuarioEstaAutenticado()){ //verifica se usuário esta logado
    return true;
  }
    this.router.navigate(['auth/login']) 
    return false;
  }

}
