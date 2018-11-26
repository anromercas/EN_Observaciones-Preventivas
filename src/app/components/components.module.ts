import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Rutas
import { PAGES_ROUTES } from '../pages/pages.routes';


// componentes
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { GraficoDonaComponent } from './grafico-dona/grafico-dona.component';
import { GraficoBarrasComponent } from './grafico-dona/grafico-barras.component';
import { ModalUploadComponent } from './modal-upload/modal-upload.component';
import { MiniFormacionComponent } from './observaciones-preventivas/mini-formacion.component';
import { FormularioComponent } from './observaciones-preventivas/formulario.component';
import { MisObservacionesComponent } from './observaciones-preventivas/mis-observaciones.component';
import { ModificarObservacionComponent } from './observaciones-preventivas/modificar-observacion.component';
import { ObservacionComponent } from './observaciones-preventivas/observacion.component';
import { ProcedimientosComponent } from './observaciones-preventivas/procedimientos.component';

// modulos
import { FullCalendarModule } from 'ng-fullcalendar';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { PipesModule } from '../pipes/pipes.module';
import { SharedModule } from '../shared/shared.module';




@NgModule({

    declarations: [
        FullCalendarComponent,
        GoogleMapsComponent,
        GraficoDonaComponent,
        GraficoBarrasComponent,
        ModalUploadComponent,
        FormularioComponent,
        MiniFormacionComponent,
        MisObservacionesComponent,
        ModificarObservacionComponent,
        ObservacionComponent,
        ProcedimientosComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FullCalendarModule,
        AgmCoreModule,
        ChartsModule,
        PipesModule,
        SharedModule,
        PAGES_ROUTES
    ],
    exports: [
        FullCalendarComponent,
        GoogleMapsComponent,
        GraficoDonaComponent,
        GraficoBarrasComponent,
        ModalUploadComponent,
        CommonModule,
        FormularioComponent,
        MiniFormacionComponent,
        MisObservacionesComponent,
        ModificarObservacionComponent,
        ObservacionComponent,
        ProcedimientosComponent
    ],
    providers: []

})

export class ComponentsModule { }
