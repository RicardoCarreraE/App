import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisViajesAlumnoPageRoutingModule } from './mis-viajes-alumno-routing.module';

import { MisViajesAlumnoPage } from './mis-viajes-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisViajesAlumnoPageRoutingModule
  ],
  declarations: [MisViajesAlumnoPage]
})
export class MisViajesAlumnoPageModule {}
