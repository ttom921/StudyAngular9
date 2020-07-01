import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AngularProgressBarsComponent } from '../angular-progress-bars/angular-progress-bars.component';
import { NgCircleProgressComponent } from '../ng-circle-progress/ng-circle-progress.component';
import { NgTestSilderComponent } from '../ng-test-silder/ng-test-silder.component';
import { NgTestAnimateComponent } from '../ng-test-animate/ng-test-animate.component';
import { NgTestMapComponent } from '../ng-test-map/ng-test-map.component';
import { NgTestToastrComponent } from '../ng-test-toastr/ng-test-toastr.component';
import { NgTestSSEComponent } from '../ng-test-sse/ng-test-sse.component';
import { NgTestMultiVideosComponent } from '../ng-test-multi-videos/ng-test-multi-videos.component';
import { NgTestSingleVideosComponent } from '../ng-test-single-videos/ng-test-single-videos.component';
import { NgTestIE11videoComponent } from '../ng-test-ie11video/ng-test-ie11video.component';
import { NgTestDateTimePickerComponent } from '../ng-test-date-time-picker/ng-test-date-time-picker.component';


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
      { path: 'ngtesttoastr', component: NgTestToastrComponent },
      { path: 'ngtestsse', component: NgTestSSEComponent },
      { path: 'ngtestmultivideos', component: NgTestMultiVideosComponent },
      { path: 'ngtestsinglevideos', component: NgTestSingleVideosComponent },
      { path: 'ngtestie11video', component: NgTestIE11videoComponent },
      { path: 'ngtestdatetimepicker', component: NgTestDateTimePickerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
