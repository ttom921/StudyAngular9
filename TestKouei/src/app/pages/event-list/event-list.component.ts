import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  eventDataSource = new MatTableDataSource<any>();
  eventItems: {
    eventid: string,
    eventname: string,
    carid: string,
  }[] = [];
  constructor() { }

  ngOnInit(): void {
    this.initEventItemsdata();
  }
  initEventItemsdata() {
    for (let index = 0; index < 10; index++) {
      const element = {
        eventid: `eventid_${index}`,
        eventname: `eventname_${index}`,
        carid: `car-${index}`
      }
      this.eventItems.push(element);
    }

    this.eventDataSource.data = this.eventItems;
  }
}
