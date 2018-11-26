import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-formularios',
  templateUrl: './listado-formularios.component.html',
  styles: []
})
export class ListadoFormulariosComponent implements OnInit {

  formUrl = '9oGKf-zr9M0';
  active: number = 0;

  formularios: any = [
    {nombre: 'Cras justo odio', url: '/formulario'},
    {nombre: 'Dapibus ac facilisis in', url: '/mini-formacion'},
    {nombre: 'Vestibulum at eros', url: '/incidente'},
    {nombre: 'Morbi leo risus', url: '/procedimientos'},
    {nombre: 'Porta ac consectetur ac', url: '/calendario'},
  ];

  constructor() { }

  ngOnInit() {
  }

  cambiarFormulario(url: string, index: number) {
    this.formUrl = url;
    this.active = index;
  }

}
