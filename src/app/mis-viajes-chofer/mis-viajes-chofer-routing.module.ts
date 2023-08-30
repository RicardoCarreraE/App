import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisViajesChoferPage } from './mis-viajes-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: MisViajesChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisViajesChoferPageRoutingModule {}
