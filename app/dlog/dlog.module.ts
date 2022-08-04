import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlogPageRoutingModule } from './dlog-routing.module';

import { DlogPage } from './dlog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlogPageRoutingModule
  ],
  declarations: [DlogPage]
})
export class DlogPageModule {}
