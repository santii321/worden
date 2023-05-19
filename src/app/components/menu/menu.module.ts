import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PuestoPageRoutingModule } from 'src/app/puesto/puesto-routing.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    FormsModule,
    IonicModule,
    PuestoPageRoutingModule,
    CommonModule
  ],
  exports:[MenuComponent]
})
export class MenuModule { }
