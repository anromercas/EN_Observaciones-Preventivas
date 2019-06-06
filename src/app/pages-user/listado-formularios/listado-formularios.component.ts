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
    {nombre: 'Incident investigation', url: '/formulario', icon: 'fa fa-info'},
    {nombre: 'Boiler Maintenance', url: '/formulario1', icon: 'fa fa-building'},
    {nombre: 'Report Near Misses', url: '/formulario2', icon: 'fa fa-bug'},
    {nombre: 'General inspection', url: '/formulario3', icon: 'fa fa-cubes'},
    {nombre: 'Confined Space Entry', url: '/formulario4', icon: 'fa fa-group'},
  ];

  constructor() { }

  ngOnInit() {
  }

  cambiarFormulario(url: string, index: number) {
    this.formUrl = url;
    this.active = index;
  }

}
