import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';
import { DomseguroPipe } from './domseguro.pipe';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ImagenPipe,
    DomseguroPipe
  ],
  exports: [
    ImagenPipe,
    DomseguroPipe
  ]
})
export class PipesModule { }
