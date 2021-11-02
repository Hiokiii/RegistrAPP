import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearqrPageRoutingModule } from './crearqr-routing.module';

import { CrearqrPage } from './crearqr.page';

import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearqrPageRoutingModule,
    NgxQRCodeModule,
    ComponentsModule,
  ],
  declarations: [CrearqrPage]
})
export class CrearqrPageModule {}
