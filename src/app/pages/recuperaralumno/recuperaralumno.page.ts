import { Component, OnInit } from '@angular/core';
import { NavigationExtras,Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-recuperaralumno',
  templateUrl: './recuperaralumno.page.html',
  styleUrls: ['./recuperaralumno.page.scss'],
})
export class RecuperaralumnoPage implements OnInit {

  usuario={
    username:'',
    password:'duoc'

  }
  constructor(private alertController:AlertController, private router:Router, private loadingController:LoadingController) { }

  ngOnInit() {
  }


  onSubmit(){

    if(this.usuario.username==="Diego"){
      //Ir al inicio
      console.log(this.usuario.username + " " + this.usuario.password);
      this.presentAlert1();

    }
    else{
      this.presentAlert();
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'miclase',
      header: 'Error',
      subHeader: 'Usuario no existe',
      message: 'Ingrese usuario valido',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    
  }
  async presentAlert1() {
    let navextras:NavigationExtras=
    {
      state: {miusuario:this.usuario}
    }
    const loading = await this.loadingController.create({
      cssClass: 'miclase',
      message: 'Por favor espere...',
      duration: 2000
    });
    await loading.present();

    const alert = await this.alertController.create({
      cssClass: 'miclase',
      header: 'Su contraseña es:',
      message: this.usuario.password,
      buttons: ['OK']
    });

    await loading.onDidDismiss();
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.router.navigate(['/inicioalumno'],navextras);
  }
}

