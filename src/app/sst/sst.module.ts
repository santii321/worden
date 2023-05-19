import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SstPageRoutingModule } from './sst-routing.module';

import { SstPage } from './sst.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SstPageRoutingModule
  ],
  declarations: [SstPage]
})
export class SstPageModule {}
