import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSedangPage } from './detail-sedang.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSedangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSedangPageRoutingModule {}
