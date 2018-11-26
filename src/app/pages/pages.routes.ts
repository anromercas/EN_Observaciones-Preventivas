import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ObservacionesPreventivasComponent } from '../components/observaciones-preventivas/observaciones-preventivas.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { MisObservacionesComponent } from '../components/observaciones-preventivas/mis-observaciones.component';
import { ObservacionComponent } from '../components/observaciones-preventivas/observacion.component';
import { MapaComponent } from './mapa/mapa.component';
import { ModificarObservacionComponent } from '../components/observaciones-preventivas/modificar-observacion.component';
import { FormularioComponent } from '../components/observaciones-preventivas/formulario.component';
import { MiniFormacionComponent } from '../components/observaciones-preventivas/mini-formacion.component';
import { ProcedimientosComponent } from '../components/observaciones-preventivas/procedimientos.component';
import { AdminGuard } from '../services/guards/admin.guard';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ AdminGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Tablero' } },
            { path: 'perfil', component: ProfileComponent, data: { titulo: 'Perfil de Usuario' } },
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Mantenimiento de Usuarios' } },
            { path: 'observaciones', component: ObservacionesPreventivasComponent, data: { titulo: 'Observaciones Preventivas' } },
            { path: 'mis-observaciones', component: MisObservacionesComponent, data: { titulo: 'Mis Observaciones Preventivas' } },
            { path: 'observacion/:id', component: ObservacionComponent, data: { titulo: 'Crear Observación Preventiva' } },
            { path: 'modificar-op/:id', component: ModificarObservacionComponent, data: { titulo: 'Actualizar Observación Preventiva' } },
            { path: 'mapa', component: MapaComponent, data: { titulo: 'Mapa' } },
            { path: 'evalua', component: Graficas1Component, data: { titulo: 'Evalúa' } },
            { path: 'acepta', component: ObservacionesPreventivasComponent, data: { titulo: 'Evalúa' } },
            { path: 'planifica/:id', component: ObservacionComponent, data: { titulo: 'Planifica' } },
        //    { path: 'formulario', component: FormularioComponent, data: { titulo: 'Formulario' } },
        //    { path: 'mini-formacion', component: MiniFormacionComponent, data: { titulo: 'Mini Formación' } },
        //    { path: 'procedimientos', component: ProcedimientosComponent, data: { titulo: 'Procedimeintos' } },
            // rutas de usuario
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
