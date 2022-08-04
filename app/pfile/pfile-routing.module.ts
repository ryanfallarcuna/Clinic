import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PfilePage } from './pfile.page';

const routes: Routes = [
  {
    path: '',
    component: PfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PfilePageRoutingModule {}
