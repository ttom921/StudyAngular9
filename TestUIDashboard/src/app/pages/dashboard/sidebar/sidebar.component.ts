import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavItem } from 'src/app/_common/menu-list-item/nav-item';
import { NavService } from 'src/app/_common/menu-list-item/nav.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() navClicked = new EventEmitter<void>();

  navItem的物件
  navItems: NavItem[] = [
    {
      displayName: '元件測試',
      iconName: 'recent_actors',
      route: '',
      children: [
        {
          displayName: '元件ngcircleprogress',
          iconName: 'person',
          route: 'dashboard/ngcircleprogress',
        },
        {
          displayName: '元件animate程式庫',
          iconName: 'star_rate',
          route: 'dashboard/ngtestanimate',
        },

        {
          displayName: '測試隱藏選單',
          disabled: true,
          iconName: 'person',
          route: 'dashboard/ch03',
        }
      ]
    },
    {
      displayName: '一般測試',
      iconName: 'recent_actors',
      route: '',
      children: [
        {
          displayName: '測試IE11播放影像',
          iconName: 'star_rate',
          route: 'dashboard/ngtestie11video'

        },
        {
          displayName: '測試同步播放多個影像',
          iconName: 'star_rate',
          route: 'dashboard/ngtestmultivideos'
        },
        {
          displayName: '測試angularprogressbars',
          iconName: 'person',
          route: 'dashboard/angularprogressbars',
        },
        {
          displayName: '測試sliderbar',
          iconName: 'person',
          route: 'dashboard/ngtestsilder',
        },
        {
          displayName: '測試toastr',
          iconName: 'star_rate',
          route: 'dashboard/ngtesttoastr',
        },
        {
          displayName: '測試SSE',
          iconName: 'star_rate',
          route: 'dashboard/ngtestsse',
        },
        //ngtestmatexpansionpanel
        {
          displayName: '測試MaterialExpansionPanel',
          iconName: 'star_rate',
          route: 'dashboard/ngtestmatexpansionpanel',
        },
      ]
    }
  ];
  constructor(private navService: NavService) { }

  ngOnInit(): void {
    this.navService.appDrawer = this;
  }
  handleClicked(ev: Event) {
    if (!isNullOrUndefined(ev))
      ev.preventDefault();
    this.navClicked.emit();
  }
}
