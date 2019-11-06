import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})

export class AutenticacaoGuard implements CanActivate {
 
  
  constructor(public usuario: UsuarioService, public router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot){
      return Observable.create(observer => {
        this.usuario.getUser().subscribe(user => {
          if(user.isOnline){
            observer.next(true);
          } else {
            this.router.navigateByUrl('lista5/login');
          }
        });
      });
  }

}
