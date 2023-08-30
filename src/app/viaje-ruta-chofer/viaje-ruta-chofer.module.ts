import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeRutaChoferPageRoutingModule } from './viaje-ruta-chofer-routing.module';

import { ViajeRutaChoferPage } from './viaje-ruta-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeRutaChoferPageRoutingModule
  ],
  declarations: [ViajeRutaChoferPage]
})
export class ViajeRutaChoferPageModule {}
