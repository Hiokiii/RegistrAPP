import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

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
    password1:''
  }

  constructor(private storage:Storage, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.guardar(this.usuario1);
    this.router.navigate(['/inicioalumno']);
  }

  async guardar(usuario1:Usuario)
  {
    await this.storage.set(this.usuario1.username1,usuario1);
    
  }
}
