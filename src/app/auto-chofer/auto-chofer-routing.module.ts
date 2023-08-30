import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoChoferPage } from './auto-chofer.page';

const routes: Routes = [
  {
    path: '',
    component: AutoChoferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AutoChoferPageRoutingModule {}
