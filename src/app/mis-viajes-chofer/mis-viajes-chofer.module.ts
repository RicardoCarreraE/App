import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisViajesChoferPageRoutingModule } from './mis-viajes-chofer-routing.module';

import { MisViajesChoferPage } from './mis-viajes-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisViajesChoferPageRoutingModule
  ],
  declarations: [MisViajesChoferPage]
})
export class MisViajesChoferPageModule {}
