import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SstPage } from './sst.page';

const routes: Routes = [
  {
    path: '',
    component: SstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SstPageRoutingModule {}
