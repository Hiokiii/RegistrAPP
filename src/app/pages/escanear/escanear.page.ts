import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NgxQrcodeElementTypes } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  qrData:'https://experienciavivo.duoc.cl/';
  scannedCode = null;
  elementType: NgxQrcodeElementTypes.URL | NgxQrcodeElementTypes.CANVAS | NgxQrcodeElementTypes.IMG = NgxQrcodeElementTypes.CANVAS;

  constructor(private barcodeScanner:BarcodeScanner, private base64ToGallery:Base64ToGallery,
    private toastCtrl:ToastController) { }

  ngOnInit() {}

  scanCode(){
    this.barcodeScanner.scan().then(
      barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedCode = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
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
