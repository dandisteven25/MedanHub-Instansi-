import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSelesaiPage } from './detail-selesai.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSelesaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSelesaiPageRoutingModule {}
