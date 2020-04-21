import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'mat-play-button',
  templateUrl: './mat-play-button.component.html',
  styleUrls: ['./mat-play-button.component.scss']
})
export class MatPlayButtonComponent implements OnInit {

  //可播放
  @Input() canPlay$ = new BehaviorSubject(false);

  constructor() { }

  ngOnInit(): void {
  }

}
