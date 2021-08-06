import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSedangPageRoutingModule } from './detail-sedang-routing.module';

import { DetailSedangPage } from './detail-sedang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSedangPageRoutingModule
  ],
  declarations: [DetailSedangPage]
})
export class DetailSedangPageModule {}
