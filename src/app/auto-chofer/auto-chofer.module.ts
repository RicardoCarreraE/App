import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoChoferPageRoutingModule } from './auto-chofer-routing.module';

import { AutoChoferPage } from './auto-chofer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoChoferPageRoutingModule
  ],
  declarations: [AutoChoferPage]
})
export class AutoChoferPageModule {}
