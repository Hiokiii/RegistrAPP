import { EncabezadodocenteComponent } from './encabezadodocente/encabezadodocente.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [EncabezadoComponent,FooterComponent, EncabezadodocenteComponent],
  exports:[EncabezadoComponent,
    FooterComponent,
    EncabezadodocenteComponent,
    
    
  ],
  imports: [
    CommonModule,
    IonicModule,

  ]
})
export class ComponentsModule { }
