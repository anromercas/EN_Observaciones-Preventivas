import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {


  menu: any = [

        /* { titulo: 'Inicio', icono: 'fa fa-home fa-10x', url: '/dashboard-user' }, */
        { titulo: 'Calendario', icono: 'fa fa-calendar fa-10x', url: '/calendario' },
        { titulo: 'Incidente', icono: 'fa fa-exclamation-triangle fa-10x', url: '/incidente' },
        { titulo: 'Listado Formularios', icono: 'fa fa-list fa-10x', url: '/listado-formularios' },

  ];
  /* menu: any = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Tablero Principal', url: '/dashboard' },
        { titulo: 'Graficas', url: '/graficas1' },

      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo : 'Observaciones Preventivas', url: '/observaciones' },
        { titulo : 'Mis Observaciones Preventivas', url: '/mis-observaciones' },
        { titulo : 'Crear Observacion Preventiva', url: '/observacion/nuevo' }

      ]
    }
  ]; */

  constructor() { }
}
