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
import { Formulario1Component } from './formulariosDemo/formulario1/formulario1.component';
import { Formulario2Component } from './formulariosDemo/formulario2/formulario2.component';
import { Formulario3Component } from './formulariosDemo/formulario3/formulario3.component';
import { Formulario4Component } from './formulariosDemo/formulario4/formulario4.component';




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
        ProcedimientosComponent,
        Formulario1Component,
        Formulario2Component,
        Formulario3Component,
        Formulario4Component
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
        ProcedimientosComponent,
        Formulario1Component,
        Formulario2Component,
        Formulario3Component,
        Formulario4Component
    ],
    providers: []

})

export class ComponentsModule { }
