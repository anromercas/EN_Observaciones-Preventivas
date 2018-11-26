import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';



@Component({
  selector: 'app-mini-formacion',
  templateUrl: './mini-formacion.component.html',
  styles: []
})
export class MiniFormacionComponent implements OnInit {

  clase: string = 'single-column';
  usuario: Usuario;
  videoUrl = '9oGKf-zr9M0';
  active: number = 0;

  videos: any = [
    {nombre: 'Cras justo odio', url: '9oGKf-zr9M0'},
    {nombre: 'Dapibus ac facilisis in', url: 'MSI3ZaY6Ll4'},
    {nombre: 'Morbi leo risus', url: 'mEq8t0p-CaA'},
    {nombre: 'Porta ac consectetur ac', url: 'zx6XCKUlX8g'},
    {nombre: 'Vestibulum at eros', url: 'IRHxOx2J47Y'},
  ];

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = JSON.parse( localStorage.getItem('usuario') );
    // javascript nativo para que borre el estilo que hace que no tenga menú lateral la aplicación
    if ( this.usuario.role === 'ADMIN_ROLE') {
      $('body').addClass(this.clase);
    } else {
      $('body').removeClass(this.clase);
    }
  }

  cambiarVideo(url: string, index: number) {
    this.videoUrl = url;
    this.active = index;
  }


}
