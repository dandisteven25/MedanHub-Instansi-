import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSelesaiPageRoutingModule } from './detail-selesai-routing.module';

import { DetailSelesaiPage } from './detail-selesai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSelesaiPageRoutingModule
  ],
  declarations: [DetailSelesaiPage]
})
export class DetailSelesaiPageModule {}
