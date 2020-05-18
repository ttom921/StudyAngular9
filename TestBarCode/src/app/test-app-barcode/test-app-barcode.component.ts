import { Component, OnInit, ElementRef, ViewChild, PLATFORM_ID, Inject, OnDestroy, Renderer2, AfterViewInit } from '@angular/core';
import { BrowserBarcodeReader, BrowserMultiFormatReader, BarcodeFormat } from '@zxing/library';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'test-app-barcode',
  templateUrl: './test-app-barcode.component.html',
  styleUrls: ['./test-app-barcode.component.scss']
})
export class TestAppBarcodeComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ViewChild('video', { static: true }) videoElement: ElementRef;
  // @ViewChild('canvas', { static: true }) canvas: ElementRef;
  // constraints = {
  //   video: {
  //     facingMode: "environment",
  //     width: { ideal: 4096 },
  //     height: { ideal: 2160 }
  //   }
  // };
  message: any;
  // @ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement>;
  // _video: any;
  // isPlaying = false;
  // displayControls = true;

  // barcodeReader: BrowserBarcodeReader;
  // message: any;
  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];
  qrResultString: string;

  constructor(
    @Inject(PLATFORM_ID) private _platform: Object,
    private renderer: Renderer2
  ) { }
  ngAfterViewInit(): void {
  }



  ngOnInit(): void {

  }
  ngOnDestroy() {
  }
  clearResult(): void {
    this.qrResultString = null;
  }
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
  }

}
