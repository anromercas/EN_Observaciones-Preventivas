import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  clase: string = 'single-column';

  imagenSubir: File;
  imagenTemp: string;

  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.usuario = this._usuarioService.usuario;
   }

  ngOnInit() {
    this.usuario = JSON.parse( localStorage.getItem('usuario') );
    // javascript nativo para que borre el estilo que hace que no tenga menú lateral la aplicación
    if ( this.usuario.role === 'ADMIN_ROLE') {
      $('body').addClass(this.clase);
    } else {
      $('body').removeClass(this.clase);
    }
  }


  guardar( usuario: Usuario ) {
    this.usuario.nombre = usuario.nombre;
    this.usuario.email = usuario.email;

    this._usuarioService.actualizarUsuario(this.usuario)
                        .subscribe( resp => {

                        });
  }

  seleccionImange( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Solo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;

    let reader = new FileReader();
    let urlImagenTemp = reader.readAsDataURL( archivo );

    reader.onloadend = () => {
       this.imagenTemp = reader.result.toString();
    };

  }

  cambiarImagen() {
      this._usuarioService.cambiarImagen( this.imagenSubir, this.usuario._id );
  }
}
