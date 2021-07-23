import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SedangDitanganiPageRoutingModule } from './sedang-ditangani-routing.module';

import { SedangDitanganiPage } from './sedang-ditangani.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SedangDitanganiPageRoutingModule
  ],
  declarations: [SedangDitanganiPage]
})
export class SedangDitanganiPageModule {}
