import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../services/service.index';
import { ModalUploadService } from './modal-upload.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  @ViewChild( 'inputFile' ) inputFile: any;
  imagenSubir: File;
  imagenTemp: string;

  constructor(
              public _subirArchivoService: SubirArchivoService,
              public _modalUploadService: ModalUploadService
  ) {
   }

  ngOnInit() {
  }

  clearForm() {
    console.log('Aqui obtienes el elemento para atribuir algo vazio: ', this.inputFile.nativeElement);

    this.inputFile.nativeElement.value = '';
  }

  cerrarModal() {
    this.imagenTemp = null;
    this.imagenSubir = null;
    this._modalUploadService.ocultarModal();
  }

  seleccionImange( archivo: File ) {

    if ( !archivo ) {
      this.imagenSubir = null;
      return;
    }

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Solo imágenes', 'El archivo seleccionado no es una imgane', 'error');
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

  subirImagen() {
    this._subirArchivoService.subirArchivo( this.imagenSubir, this._modalUploadService.tipo, this._modalUploadService.id)
    .then( resp => {
        this._modalUploadService.notificacion.emit( resp );
        this.cerrarModal();
        this.clearForm();
    })
    .catch( err => {
        console.log('Error en la carga...');
    });
  }


}
