import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlogPageRoutingModule } from './plog-routing.module';

import { PlogPage } from './plog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlogPageRoutingModule
  ],
  declarations: [PlogPage]
})
export class PlogPageModule {}
