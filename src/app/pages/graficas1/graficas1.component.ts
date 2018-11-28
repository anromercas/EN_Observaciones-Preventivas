import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styleUrls: []
})
export class Graficas1Component implements OnInit {



  graficos: any = {
    'grafico1': {
      'labels': ['Pending to perform', 'Pending Approval', 'Accepted', 'expired', ],
      'data':  [24, 30, 46, 15],
      'type': 'doughnut',
      'leyenda': 'Total Tasks'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': ''
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': ''
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
