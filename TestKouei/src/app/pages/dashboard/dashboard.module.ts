import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedAngularMaterialModule } from 'src/app/share/shared-angular-material/shared-angular-material.module';
import { EventListComponent } from '../event-list/event-list.component';
import { IframeEvenListComponent } from '../iframe-even-list/iframe-even-list.component';
import { ViewVideoDialogComponent } from '../iframe-even-list/dialog/view-video-dialog/view-video-dialog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    EventListComponent,
    IframeEvenListComponent,
    ViewVideoDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedAngularMaterialModule,
  ],
  entryComponents: [ViewVideoDialogComponent]
})
export class DashboardModule { }
