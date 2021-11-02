import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  scannedCode = null;
  
  constructor(private barcodeScanner:BarcodeScanner) { }

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
}
