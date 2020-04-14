import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AngularProgressBarsComponent } from '../angular-progress-bars/angular-progress-bars.component';
import { NgCircleProgressComponent } from '../ng-circle-progress/ng-circle-progress.component';
import { NgTestSilderComponent } from '../ng-test-silder/ng-test-silder.component';
import { NgTestAnimateComponent } from '../ng-test-animate/ng-test-animate.component';
import { NgTestMapComponent } from '../ng-test-map/ng-test-map.component';
import { NgTestToastrComponent } from '../ng-test-toastr/ng-test-toastr.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'ngcircleprogress' },
      { path: 'angularprogressbars', component: AngularProgressBarsComponent },
      { path: 'ngtestsilder', component: NgTestSilderComponent },
      { path: 'ngcircleprogress', component: NgCircleProgressComponent },
      { path: 'ngtestanimate', component: NgTestAnimateComponent },
      { path: 'ngtestmap', component: NgTestMapComponent },
      { path: 'ngtesttoastr', component: NgTestToastrComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
