import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuestoPageRoutingModule } from './puesto-routing.module';

import { PuestoPage } from './puesto.page';
import { MenuComponent } from '../components/menu/menu.component';
import { MenuModule } from '../components/menu/menu.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuestoPageRoutingModule,
    MenuModule,
  ],
  declarations: [PuestoPage]
})
export class PuestoPageModule {}
