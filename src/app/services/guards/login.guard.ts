import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor ( public _usuarioService: UsuarioService,
                public router: Router ) {

  }
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

  //  console.log(next);
    if ( this._usuarioService.estaLogueado() ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
