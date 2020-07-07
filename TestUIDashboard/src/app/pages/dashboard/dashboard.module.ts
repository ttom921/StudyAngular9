import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedAngularMaterialModule } from 'src/app/share/shared-angular-material/shared-angular-material.module';
import { MenuListItemComponent } from 'src/app/_common/menu-list-item/menu-list-item.component';
import { BarComponent } from '../angular-progress-bars/bar/bar.component';
import { AngularProgressBarsComponent } from '../angular-progress-bars/angular-progress-bars.component';
import { SvgbarComponent } from '../angular-progress-bars/svgbar/svgbar.component';
import { SpinnerComponent } from '../angular-progress-bars/spinner/spinner.component';
import { CircleProgressComponent } from '../../_common/circle-progress/circle-progress.component';
import { NgCircleProgressComponent } from '../ng-circle-progress/ng-circle-progress.component';
import { NgTestSilderComponent } from '../ng-test-silder/ng-test-silder.component';
import { NgTestAnimateComponent } from '../ng-test-animate/ng-test-animate.component';
import { NgTestMapComponent } from '../ng-test-map/ng-test-map.component';
import { OsmViewComponent } from 'src/app/_common/map/osm-view/osm-view.component';
import { NgTestToastrComponent } from '../ng-test-toastr/ng-test-toastr.component';
import { NgTestSSEComponent } from '../ng-test-sse/ng-test-sse.component';
import { NgTestMultiVideosComponent } from '../ng-test-multi-videos/ng-test-multi-videos.component';
import { NgTestSingleVideosComponent } from '../ng-test-single-videos/ng-test-single-videos.component';
import { MatVideoModule } from 'src/app/_common/video/video.module';
import { SyncVideoModule } from 'src/app/_common/sync-video/sync-video.module';
import { NgTestIE11videoComponent } from '../ng-test-ie11video/ng-test-ie11video.component';
import { NgTestDateTimePickerComponent } from '../ng-test-date-time-picker/ng-test-date-time-picker.component';
import { NgxMatTimepickerModule } from 'src/app/_common/datetime-picker/timepicker.module';
import { NgxMatNativeDateModule } from 'src/app/_common/datetime-picker/core/native-date.module';
import { NgxMatDatetimePickerModule } from 'src/app/_common/datetime-picker/datetime-picker.module';
import { OtaSetCarComponent } from '../ng-test-date-time-picker/ota-set-car/ota-set-car.component';
import { OtaSetForceCarComponent } from '../ng-test-date-time-picker/ota-set-force-car/ota-set-force-car.component';


@NgModule({
  declarations: [DashboardComponent, MenuListItemComponent, HeaderComponent, SidebarComponent,
    AngularProgressBarsComponent,
    BarComponent,
    SvgbarComponent,
    SpinnerComponent,
    CircleProgressComponent,

    OsmViewComponent,
    NgCircleProgressComponent,
    NgTestSilderComponent,
    NgTestAnimateComponent,
    NgTestMapComponent,
    NgTestToastrComponent,
    NgTestSSEComponent,
    NgTestMultiVideosComponent,
    NgTestSingleVideosComponent,
    NgTestIE11videoComponent,
    NgTestDateTimePickerComponent,
    OtaSetCarComponent,
    OtaSetForceCarComponent,


  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedAngularMaterialModule,
    MatVideoModule,
    //日曆時間元件
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    //日曆時間元件
    SyncVideoModule,
  ]
})

export class DashboardModule { }
