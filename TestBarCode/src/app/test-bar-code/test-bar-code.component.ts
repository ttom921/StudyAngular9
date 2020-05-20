import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { BrowserQRCodeReader, BrowserBarcodeReader, BrowserMultiFormatReader, DecodeHintType, BarcodeFormat } from '@zxing/library';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'test-bar-code',
  templateUrl: './test-bar-code.component.html',
  styleUrls: ['./test-bar-code.component.scss']
})
export class TestBarCodeComponent implements OnInit {
  @ViewChild('img', { static: true }) img: ElementRef;
  imagePath;
  imgURL: any;
  message: any;
  codeReader: BrowserMultiFormatReader;
  barcodeReader: BrowserBarcodeReader;
  qrcodeReader: BrowserQRCodeReader;
  constructor(
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.initbarcode();
    //this.initqrcode();


    //console.log(this.codeReader);

  }
  initbarcode() {
    this.barcodeReader = new BrowserBarcodeReader();
    console.log(this.barcodeReader);
    this.message = "init barcode";
  }
  initqrcode() {
    this.qrcodeReader = new BrowserQRCodeReader();
    console.log(this.qrcodeReader);
  }
  initmulticode() {
    const hints = new Map();
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [
      BarcodeFormat.QR_CODE,
      BarcodeFormat.CODE_128,
      BarcodeFormat.CODE_39
    ]);
    this.codeReader = new BrowserMultiFormatReader(hints);

  }
  preview(files) {
    if (files.length == 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    this.imgURL = undefined;
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.message = typeof (reader.result);
      this.imgURL = reader.result;
    }
  }
  decodeclick() {
    //console.log(this.img);
    try {
      this.codeReader.decodeFromImageUrl(this.imgURL)
        .then(result => {
          console.log(`codeReader=>${result}`);
          this.message = result.getText();
        })
        .catch(errresult => {
          this.message = errresult;
          console.log(`errresult=>${errresult}`);
        });

      // this.qrcodeReader.decodeFromImage(this.img.nativeElement)
      //   .then(result => {
      //     console.log(`qrcode=>${result}`);
      //   }).catch(errresult => {
      //     this.barcodeReader.decodeFromImage(this.img.nativeElement).then(result => {
      //       console.log(`barcode=>${result}`);
      //     }).catch(errresult => {
      //       console.log(`decode=>${errresult}`);
      //     });
      //   });
    } catch (err) {
      console.error(err);
    }


  }
  decodebarcodeclick() {
    this.message = "click barcode";
    try {
      this.barcodeReader.decodeFromImageUrl(this.imgURL)
        .then(result => {
          console.log(`barcode=>${result}`);
          this.message = result.getText();
        })
        .catch(errresult => {
          this.message = errresult;
          console.log(`barcode errresult=>${errresult}`);
        });
    } catch (error) {
      console.error(error);
    }
  }
  decodeqrcodeclick() {
    try {
      this.qrcodeReader.decodeFromImageUrl(this.imgURL)
        .then(result => {
          console.log(`qrcode=>${result}`);
          this.message = result.getText();
        })
        .catch(errresult => {
          this.message = errresult;
          console.log(`qrcode errresult=>${errresult}`);
        });
    } catch (error) {
      console.error(error);
    }
  }
}
