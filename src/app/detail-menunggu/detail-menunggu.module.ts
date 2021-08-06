import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMenungguPageRoutingModule } from './detail-menunggu-routing.module';

import { DetailMenungguPage } from './detail-menunggu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailMenungguPageRoutingModule
  ],
  declarations: [DetailMenungguPage]
})
export class DetailMenungguPageModule {}
