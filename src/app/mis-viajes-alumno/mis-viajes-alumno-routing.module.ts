import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisViajesAlumnoPage } from './mis-viajes-alumno.page';

const routes: Routes = [
  {
    path: '',
    component: MisViajesAlumnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisViajesAlumnoPageRoutingModule {}
