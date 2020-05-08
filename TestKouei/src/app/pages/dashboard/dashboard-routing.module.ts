import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EventListComponent } from '../event-list/event-list.component';
import { IframeEvenListComponent } from '../iframe-even-list/iframe-even-list.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'eventlist', pathMatch: 'full' },
      { path: 'eventlist', component: EventListComponent },
      { path: 'iframeeventlist', component: IframeEvenListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
