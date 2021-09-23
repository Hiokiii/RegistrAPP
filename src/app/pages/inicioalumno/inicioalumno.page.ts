import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-inicioalumno',
  templateUrl: './inicioalumno.page.html',
  styleUrls: ['./inicioalumno.page.scss'],
})
export class InicioalumnoPage implements OnInit {

  usuario={
    username:'',
    password:''

  }

  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){

    if(this.usuario.username==="Diego" && this.usuario.password=="duoc"){
      //Ir al inicio
      //console.log(this.usuario.username + " " + this.usuario.password);
      let navextras:NavigationExtras=
      {
        state: {miusuario:this.usuario}
      }

      this.router.navigate(['/menualumno'],navextras);

    }
    else{
      this.presentAlert();
    }
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
