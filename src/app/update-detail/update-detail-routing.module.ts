import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateDetailPage } from './update-detail.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateDetailPageRoutingModule {}
