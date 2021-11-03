import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-registroalumno',
  templateUrl: './registroalumno.page.html',
  styleUrls: ['./registroalumno.page.scss'],
})
export class RegistroalumnoPage implements OnInit {

  usuario1:Usuario=
  {
    username1:'',
    correo1:'',
    password1:'',
    activo1:0
  }

  constructor(private storage:Storage) { }

  ngOnInit() {
  }

  onSubmit(){
    this.guardar(this.usuario1);
  }

  async guardar(usr:Usuario)
  {
    await this.storage.set(usr.username1.toString(), usr);
  }
}
