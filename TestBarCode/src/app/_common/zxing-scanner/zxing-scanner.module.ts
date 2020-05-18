import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerComponent } from './zxing-scanner.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ZXingScannerComponent],
  exports: [ZXingScannerComponent],
})
export class ZxingScannerModule { }
