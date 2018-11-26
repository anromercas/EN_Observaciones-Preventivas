import { NgModule, LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData, CommonModule } from '@angular/common';
registerLocaleData(localeEs);

// Rutas
import { PAGES_USER_ROUTES } from './pages-user.routes';

// MODULOS
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from 'ng-fullcalendar';



// COMPONENTES
import { CalendarioComponent } from './calendario/calendario.component';
import { DashboardUserComponent } from '../pages-user/dashboard/dashboard-user.component';
import { PagesUserComponent } from './pages-user.component';
import { ComponentsModule } from '../components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventService } from '../services/service.index';
import { IncidenteComponent } from './incidente/incidente.component';
import { ListadoFormulariosComponent } from './listado-formularios/listado-formularios.component';
import { EmergenciaComponent } from './emergencia/emergencia.component';


@NgModule({
    declarations: [
        PagesUserComponent,
        DashboardUserComponent,
        CalendarioComponent,
        IncidenteComponent,
        ListadoFormulariosComponent,
        EmergenciaComponent
      ],
      exports: [
        PagesUserComponent,
        DashboardUserComponent,
        CalendarioComponent,
      ],
      imports: [
        PAGES_USER_ROUTES,
        SharedModule,
        FormsModule,
        PipesModule,
        ComponentsModule,
        BrowserAnimationsModule,
        BrowserModule,
        FullCalendarModule
      ],
      providers: [
        { provide: LOCALE_ID, useValue: 'es' },
        EventService
    ]
})
export class PagesUserModule { }
