import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateDetailPageRoutingModule } from './update-detail-routing.module';

import { UpdateDetailPage } from './update-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateDetailPageRoutingModule
  ],
  declarations: [UpdateDetailPage]
})
export class UpdateDetailPageModule {}
