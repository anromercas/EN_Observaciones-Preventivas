import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  seleccionado: boolean[] = [false, false, false, false, false, false];
  epis: boolean[] = [false, false, false, false, false, false, false, false, false];
  avatar: boolean[] = [false, false, false, false, false, false, false, false, false];

  config: any = {
    'fade': true,
    'alwaysOn': true,
    'neverOn': false,
    'fill': true,
    'fillColor': '#ffffff',
    'fillOpacity': 0.4,
    'stroke': true,
    'strokeColor': '#4d0ec0',
    'strokeOpacity': 1,
    'strokeWidth': 1,
    'shadow': true,
    'shadowColor': '#000000',
    'shadowOpacity': 0.8,
    'shadowRadius': 10
  };


  constructor() { }

  ngOnInit() {
  }

}
