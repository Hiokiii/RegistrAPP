import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscanearPageRoutingModule } from './escanear-routing.module';

import { EscanearPage } from './escanear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscanearPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EscanearPage]
})
export class EscanearPageModule {}
