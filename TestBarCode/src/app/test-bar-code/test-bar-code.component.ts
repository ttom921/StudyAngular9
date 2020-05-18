import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserQRCodeReader, BrowserBarcodeReader } from '@zxing/library';
@Component({
  selector: 'test-bar-code',
  templateUrl: './test-bar-code.component.html',
  styleUrls: ['./test-bar-code.component.scss']
})
export class TestBarCodeComponent implements OnInit {
  @ViewChild('img', { static: true }) img: ElementRef;
  imagePath;
  imgURL: any;
  message: string;
  barcodeReader: BrowserBarcodeReader;
  qrcodeReader: BrowserQRCodeReader;
  constructor() { }

  ngOnInit(): void {

    this.barcodeReader = new BrowserBarcodeReader();
    this.qrcodeReader = new BrowserQRCodeReader();
    console.log(this.barcodeReader);
  }
  preview(files) {
    if (files.length == 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  decodeclick() {
    console.log(this.img);
    try {
      this.qrcodeReader.decodeFromImage(this.img.nativeElement)
        .then(result => {
          console.log(`qrcode=>${result}`);
        }).catch(errresult => {
          this.barcodeReader.decodeFromImage(this.img.nativeElement).then(result => {
            console.log(`barcode=>${result}`);
          }).catch(errresult => {
            console.log(`decode=>${errresult}`);
          });
        });
    } catch (err) {
      console.error(err);
    }


  }
}
