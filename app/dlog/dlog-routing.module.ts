import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlogPage } from './dlog.page';

const routes: Routes = [
  {
    path: '',
    component: DlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlogPageRoutingModule {}
