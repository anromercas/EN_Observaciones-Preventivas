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
    {nombre: 'Cras justo odio', url: '../../../assets/images/infograma.jpg'},
    {nombre: 'Dapibus ac facilisis in', url: '../../../assets/images/infograma2.jpg'},
    {nombre: 'Morbi leo risus', url: '../../../assets/images/infograma3.jpg'},
    {nombre: 'Porta ac consectetur ac', url: '../../../assets/images/infograma4.jpg'},
    {nombre: 'Vestibulum at eros', url: '../../../assets/images/infograma5.jpg'},
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
