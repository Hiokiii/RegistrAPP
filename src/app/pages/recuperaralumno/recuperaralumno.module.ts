import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperaralumnoPageRoutingModule } from './recuperaralumno-routing.module';

import { RecuperaralumnoPage } from './recuperaralumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperaralumnoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RecuperaralumnoPage]
})
export class RecuperaralumnoPageModule {}
