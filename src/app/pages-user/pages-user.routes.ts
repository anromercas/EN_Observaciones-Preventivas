import { RouterModule, Routes } from '@angular/router';
import { PagesUserComponent } from './pages-user.component';
import { DashboardUserComponent } from './dashboard/dashboard-user.component';
import { LoginGuard } from '../services/service.index';
import { CalendarioComponent } from './calendario/calendario.component';
import { MiniFormacionComponent } from '../components/observaciones-preventivas/mini-formacion.component';
import { ProcedimientosComponent } from '../components/observaciones-preventivas/procedimientos.component';
import { MisObservacionesComponent } from '../components/observaciones-preventivas/mis-observaciones.component';
import { IncidenteComponent } from './incidente/incidente.component';
import { ListadoFormulariosComponent } from './listado-formularios/listado-formularios.component';
import { FormularioComponent } from '../components/observaciones-preventivas/formulario.component';
import { EmergenciaComponent } from './emergencia/emergencia.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesUserComponent,
        canActivate: [ LoginGuard ],
        children: [
            // rutas de usuario
            { path: 'dashboard-user', component: DashboardUserComponent, data: { titulo: 'Tablero' } },
            { path: 'calendario', component: CalendarioComponent, data: { titulo: 'Calendario' } },
          //  { path: 'listado-formularios', component: MisObservacionesComponent, data: { titulo: 'Listado Formularios' } },
            { path: 'mini-formacion', component: MiniFormacionComponent, data: { titulo: 'Mini Formación' } },
            { path: 'procedimientos', component: ProcedimientosComponent, data: { titulo: 'Procedimeintos' } },
            { path: 'incidente', component: IncidenteComponent, data: { titulo: 'Incidente' } },
            { path: 'listado-formularios', component: ListadoFormulariosComponent, data: { titulo: 'Listado Formularios' } },
            { path: 'formulario', component: FormularioComponent, data: { titulo: 'Formulario' } },
            { path: 'emergencia', component: EmergenciaComponent, data: { titulo: 'Emergencia' } },
            { path: '', redirectTo: '/dashboard-user', pathMatch: 'full' },
        ]
    }
];

export const PAGES_USER_ROUTES = RouterModule.forChild( pagesRoutes );
