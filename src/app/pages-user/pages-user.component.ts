import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();

@Component({
  selector: 'app-pages-user',
  templateUrl: './pages-user.component.html',
  styleUrls: []
})
export class PagesUserComponent implements OnInit {

  clase: string = 'single-column';
  usuario: Usuario;
  esAdmin: boolean;

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.usuario = JSON.parse( localStorage.getItem('usuario') );
    // javascript nativo para que borre el estilo que hace que no tenga menú lateral la aplicación
    if ( this.usuario.role === 'ADMIN_ROLE') {
      $('body').addClass(this.clase);
      this.esAdmin = true;
    } else {
      $('body').removeClass(this.clase);
      this.esAdmin = false;
    }
  }

}
