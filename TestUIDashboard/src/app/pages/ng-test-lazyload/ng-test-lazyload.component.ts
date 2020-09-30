import { Component, OnInit } from '@angular/core';
import { IntersectionStatus } from 'src/app/_common/_directive/intersection-observer.directive';

@Component({
  selector: 'app-ng-test-lazyload',
  templateUrl: './ng-test-lazyload.component.html',
  styleUrls: ['./ng-test-lazyload.component.scss']
})
export class NgTestLazyloadComponent implements OnInit {

  list: {
    idx: number,
    lzstatus: IntersectionStatus,
  }[] = [];
  intersectionStatus = IntersectionStatus;

  constructor() { }

  ngOnInit(): void {
    for (let n = 0; n < 1000; n++) {
      const item = {
        idx: n,
        lzstatus: IntersectionStatus.NotVisible,
      }
      this.list.push(item);
    }
  }
  onVisibilityChanged(item, status: IntersectionStatus) {
    item.lzstatus = status;
  }

}
