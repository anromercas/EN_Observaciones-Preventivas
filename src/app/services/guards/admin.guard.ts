import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor ( public _usuarioService: UsuarioService,
                public router: Router ) {

  }
  canActivate() {
    if ( JSON.parse( localStorage.getItem('usuario') ) !== null ) {
      if ( this._usuarioService.esAdmin() && this._usuarioService.estaLogueado()) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
