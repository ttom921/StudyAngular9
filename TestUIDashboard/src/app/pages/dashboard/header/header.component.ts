import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggle = new EventEmitter<void>();

  user_id = "元件測試";
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.toggle.emit();
  }
}
