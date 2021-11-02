import { Component, OnInit } from '@angular/core';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crearqr',
  templateUrl: './crearqr.page.html',
  styleUrls: ['./crearqr.page.scss'],
})
export class CrearqrPage implements OnInit {

  qrData:'https://experienciavivo.duoc.cl/';
  elementType: NgxQrcodeElementTypes.URL | NgxQrcodeElementTypes.CANVAS | NgxQrcodeElementTypes.IMG = NgxQrcodeElementTypes.CANVAS;

  constructor(private base64ToGallery:Base64ToGallery, private toastCtrl:ToastController) { }

  ngOnInit() {
  }

  downloadQR(){
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    const imageData = canvas.toDataURL('image/jpeg').toString();
    console.log('data' , imageData);

    let data = imageData.split(',')[1];
    this.base64ToGallery.base64ToGallery(data, {prefix: '__img', mediaScanner: true})
    .then(async res =>{
      let toast =  await this.toastCtrl.create({
        header: 'QR Code saved in your Photolibrary'
      });
      toast.present();
    }, err => console.log('err: ', err)
    );
  }
}
