import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeRutaAlumnoPage } from './viaje-ruta-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeRutaAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeRutaAlumnoPageRoutingModule {}
