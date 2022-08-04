import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlogPage } from './plog.page';

const routes: Routes = [
  {
    path: '',
    component: PlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlogPageRoutingModule {}
