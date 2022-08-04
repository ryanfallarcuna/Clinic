import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Doc2PageRoutingModule } from './doc2-routing.module';

import { Doc2Page } from './doc2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Doc2PageRoutingModule
  ],
  declarations: [Doc2Page]
})
export class Doc2PageModule {}
