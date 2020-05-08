import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-view-video-dialog',
  templateUrl: './view-video-dialog.component.html',
  styleUrls: ['./view-video-dialog.component.scss']
})
export class ViewVideoDialogComponent implements OnInit {
  safeURL: SafeResourceUrl;
  constructor(
    private dialogRef: MatDialogRef<ViewVideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _sanitizer: DomSanitizer,
  ) {
    console.log(data.url);
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(data.url);
  }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
