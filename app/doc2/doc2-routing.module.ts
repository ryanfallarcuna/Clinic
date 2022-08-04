import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Doc2Page } from './doc2.page';

const routes: Routes = [
  {
    path: '',
    component: Doc2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Doc2PageRoutingModule {}
