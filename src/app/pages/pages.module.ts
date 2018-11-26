import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Modulos
import { SharedModule } from '../shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from '../components/components.module';

// Pipes Module
import { PipesModule } from '../pipes/pipes.module';

// Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ObservacionesPreventivasComponent } from '../components/observaciones-preventivas/observaciones-preventivas.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { MisObservacionesComponent } from '../components/observaciones-preventivas/mis-observaciones.component';
import { ObservacionComponent } from '../components/observaciones-preventivas/observacion.component';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './mapa/mapa.component';
import { ModificarObservacionComponent } from '../components/observaciones-preventivas/modificar-observacion.component';
import { FormularioComponent } from '../components/observaciones-preventivas/formulario.component';
import { UsuariosMapaComponent } from './usuarios/usuarios-mapa.component';
import { MiniFormacionComponent } from '../components/observaciones-preventivas/mini-formacion.component';
import { ProcedimientosComponent } from '../components/observaciones-preventivas/procedimientos.component';
import { MaphilightModule } from 'ng-maphilight';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProfileComponent,
        UsuariosComponent,
   //     ModalUploadComponent,
        ObservacionesPreventivasComponent,
   //     MisObservacionesComponent,
        Graficas1Component,
   //     GraficoDonaComponent,
   //     ObservacionComponent,
   //     GoogleMapsComponent,
        MapaComponent,
   //     GraficoBarrasComponent,
   //     ModificarObservacionComponent,
   //     FormularioComponent,
        UsuariosMapaComponent,
   //     MiniFormacionComponent,
   //     ProcedimientosComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        PipesModule,
        CommonModule,
        ReactiveFormsModule,
        NgSelectModule,
        ChartsModule,
        BrowserAnimationsModule,
        ComponentsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCzVxJimwuNE-2EYMnp4IUUh0skkgVOFic',
            libraries: ['places']
          })
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es' }
    ]
})

export class PagesModule { }
