import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-procedimientos',
  templateUrl: './procedimientos.component.html',
  styles: []
})
export class ProcedimientosComponent implements OnInit {

  clase: string = 'single-column';
  usuario: Usuario;
  imagenUrl = '../../../assets/images/infograma.jpg';
  active: number = 0;

  imagenes: any = [
    {nombre: 'Incident investigation', url: '../../../assets/images/infograma.svg', icon: 'fa fa-info'},
    {nombre: 'Boiler Maintenance', url: '../../../assets/images/infograma2.svg', icon: 'fa fa-building'},
    {nombre: 'Report Near Misses', url: '../../../assets/images/infograma3.svg', icon: 'fa fa-bug'},
    {nombre: 'General inspection', url: '../../../assets/images/infograma4.svg', icon: 'fa fa-cubes'},
    {nombre: 'Confined Space Entry', url: '../../../assets/images/infograma5.svg', icon: 'fa fa-group'},
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

  cambiarImagen(url: string, index: number) {
    this.imagenUrl = url;
    this.active = index;
  }
}
