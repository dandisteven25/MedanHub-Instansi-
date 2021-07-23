import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenungguPageRoutingModule } from './menunggu-routing.module';

import { MenungguPage } from './menunggu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenungguPageRoutingModule
  ],
  declarations: [MenungguPage]
})
export class MenungguPageModule {}
