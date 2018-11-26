import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

 // Rutas
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';
import { PagesUserModule } from './pages-user/pages-user.module';
import { FullCalendarModule } from 'ng-fullcalendar';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';
import { FullCalendarComponent } from './components/full-calendar/full-calendar.component';

// Servicios
import { ServiceModule } from './services/service.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { EventService } from './services/calendario/event.service';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    PagesUserModule,
 //   ComponentsModule,
    ServiceModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
