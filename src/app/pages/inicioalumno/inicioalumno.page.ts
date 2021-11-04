import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { Usuario, Sesion } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-inicioalumno',
  templateUrl: './inicioalumno.page.html',
  styleUrls: ['./inicioalumno.page.scss'],
})
export class InicioalumnoPage implements OnInit {

  usuario1:Usuario=
  {
    username1:'',
    correo1:'',
    password1:''
  }

  sesion:Sesion=
  {
    valor:0,
    username:''
  }

  constructor(private alertController:AlertController, private router:Router, private storage:Storage) { }

  
  ngOnInit() {
  }

  onSubmit(){

    this.validarusuario(this.usuario1);
    
    //Ir al inicio
      //console.log(this.usuario.username + " " + this.usuario.password);
      /* let navextras:NavigationExtras=
      {
        state: {miusuario:this.usuario}
      } */
       //this.router.navigate(['/menualumno'],navextras);
  }

  async validarusuario(u:Usuario)
  {
    let usuario1=await this.storage.get(u.username1);
    if(usuario1!=null)
    {
      if(u.password1===usuario1.password1)
      {
        this.sesion.valor=1;
        this.sesion.username=this.usuario1.username1;
        await this.storage.set('sesion',this.sesion);
        let navextras:NavigationExtras=
        {
          state: {miusuario:this.usuario1}
        } 
        this.router.navigate(['/menualumno'],navextras);
        return
      }
    }
    this.presentAlert();
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'miclase',
      header: 'Error',
      subHeader: 'No se puede iniciar sesión',
      message: 'Usuario y/o password no existe',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
