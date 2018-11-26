import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/service.index';

declare var swal: any;

@Component({
  selector: 'app-usuarios-mapa',
  templateUrl: './usuarios-mapa.component.html',
  styles: []
})
export class UsuariosMapaComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  cargando: boolean = true;

  totalRegistros: number = 0;

  constructor(public _usuarioServce: UsuarioService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.cargando = true;
    this._usuarioServce.cargarUsuarios( this.desde )
                        .subscribe( (resp: any) => {
                          this.totalRegistros = resp.total;
                          this.usuarios = resp.usuarios;
                          this.cargando = false;
                        });
  }

  cambiarDesde( valor: number ) {
    let desde = this.desde + valor;

    if ( desde >= this.totalRegistros ) {
      return;
    }

    if ( desde < 0 ) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario( termino: string ) {
    if ( termino.length <= 0 ) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;
    this._usuarioServce.buscarUsuarios( termino )
                        .subscribe( (usuarios: Usuario[]) => {
                            this.usuarios = usuarios;
                            this.cargando = false;

    });
  }

  mensaje() {
    swal('Escribir Mensaje:', {
      content: 'input'
    })
    .then(() => {
      swal('Mensaje enviado', 'Mensaje enviado con éxito ', 'success');
    });
  }
}
