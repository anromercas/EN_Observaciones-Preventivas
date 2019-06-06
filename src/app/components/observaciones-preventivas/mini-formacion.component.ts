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
    {nombre: 'Incident investigation', url: '9oGKf-zr9M0', icon: 'fa fa-info'},
    {nombre: 'Boiler Maintenance', url: 'MSI3ZaY6Ll4', icon: 'fa fa-building'},
    {nombre: 'Report Near Misses', url: 'mEq8t0p-CaA', icon: 'fa fa-bug'},
    {nombre: 'General inspection', url: 'zx6XCKUlX8g', icon: 'fa fa-cubes'},
    {nombre: 'Confined Space Entry', url: 'IRHxOx2J47Y', icon: 'fa fa-group'},
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
