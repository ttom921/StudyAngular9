import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mat-fullscreen-button',
  templateUrl: './mat-fullscreen-button.component.html',
  styleUrls: ['./mat-fullscreen-button.component.scss']
})
export class MatFullscreenButtonComponent implements OnInit {
  @Input() canFullscreen = false;
  @Input() fullscreen = false;
  constructor() { }

  ngOnInit(): void {
    console.log(`canFullscreen=${this.canFullscreen}`);
  }

}
