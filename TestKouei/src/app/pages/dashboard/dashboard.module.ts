import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedAngularMaterialModule } from 'src/app/share/shared-angular-material/shared-angular-material.module';
import { EventListComponent } from '../event-list/event-list.component';


@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SidebarComponent, EventListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedAngularMaterialModule,
  ]
})
export class DashboardModule { }
