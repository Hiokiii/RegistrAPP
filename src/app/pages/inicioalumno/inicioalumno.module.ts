import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioalumnoPageRoutingModule } from './inicioalumno-routing.module';

import { InicioalumnoPage } from './inicioalumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioalumnoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InicioalumnoPage]
})
export class InicioalumnoPageModule {}
