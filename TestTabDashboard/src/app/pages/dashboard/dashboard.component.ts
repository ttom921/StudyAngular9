import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(
    private router: Router
  ) {
    this.navLinks = [
      {
        label: 'home',
        link: 'home',
        index: 0
      },
      {
        label: 'live',
        link: 'live',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
