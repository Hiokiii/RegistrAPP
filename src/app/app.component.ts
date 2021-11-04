import { Opmenu } from './interfaces/opmenu';
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Sesion } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  opciones1:Opmenu[]=[
    {
      link:"menualumno",
      texto:"Inicio",
      icono:"home"
    },
    {
      link:"escanear",
      texto:"Escanear codigo",
      icono:"barcode-outline"
    },
    {
      link:"home",
      texto:"Cerrar sesión",
      icono:"power"
    } 
  ]

  sesion:Sesion=
  {
    valor:0,
    username:''
  }
  constructor(private storage:Storage) {}

  async ngOnInit() {
    await this.storage.create();
    await this.storage.set('sesion',this.sesion);
  }
}
