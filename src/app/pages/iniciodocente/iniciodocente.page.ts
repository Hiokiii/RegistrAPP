import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras,Router } from '@angular/router';

@Component({
  selector: 'app-iniciodocente',
  templateUrl: './iniciodocente.page.html',
  styleUrls: ['./iniciodocente.page.scss'],
})
export class IniciodocentePage implements OnInit {
  
  usuario={
    username:'',
    password:''

  }

  constructor(private alertController:AlertController, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){

    if(this.usuario.username==="Wacoldo" && this.usuario.password=="123"){
      //Ir al inicio
      //console.log(this.usuario.username + " " + this.usuario.password);
      let navextras:NavigationExtras=
      {
        state: {miusuario:this.usuario}
      }

      this.router.navigate(['/pag1'],navextras);

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

