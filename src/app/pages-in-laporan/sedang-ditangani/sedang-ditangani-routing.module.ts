import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SedangDitanganiPage } from './sedang-ditangani.page';

const routes: Routes = [
  {
    path: '',
    component: SedangDitanganiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SedangDitanganiPageRoutingModule {}
