import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeRutaChoferPage } from './viaje-ruta-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeRutaChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeRutaChoferPageRoutingModule {}
