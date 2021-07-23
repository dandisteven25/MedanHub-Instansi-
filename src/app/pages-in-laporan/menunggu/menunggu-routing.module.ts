import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenungguPage } from './menunggu.page';

const routes: Routes = [
  {
    path: '',
    component: MenungguPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenungguPageRoutingModule {}
