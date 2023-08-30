import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeRutaAlumnoPageRoutingModule } from './viaje-ruta-alumno-routing.module';

import { ViajeRutaAlumnoPage } from './viaje-ruta-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeRutaAlumnoPageRoutingModule
  ],
  declarations: [ViajeRutaAlumnoPage]
})
export class ViajeRutaAlumnoPageModule {}
