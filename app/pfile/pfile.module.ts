import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PfilePageRoutingModule } from './pfile-routing.module';

import { PfilePage } from './pfile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PfilePageRoutingModule
  ],
  declarations: [PfilePage]
})
export class PfilePageModule {}
