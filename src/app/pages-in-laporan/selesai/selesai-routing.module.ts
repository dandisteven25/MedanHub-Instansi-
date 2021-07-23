import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelesaiPage } from './selesai.page';

const routes: Routes = [
  {
    path: '',
    component: SelesaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelesaiPageRoutingModule {}
