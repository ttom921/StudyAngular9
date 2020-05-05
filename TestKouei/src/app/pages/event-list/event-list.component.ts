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
      let carnum = index;
      // if (index == 0) {
      //   carnum = 8888;
      // }
      const element = {
        eventid: `eventid_${index}`,
        eventname: `eventname_${index}`,
        carid: `car-${carnum}`
      }
      this.eventItems.push(element);
    }
    this.eventItems[0].carid = '8888';
    this.eventDataSource.data = this.eventItems;
  }
  View(row) {
    console.log(row);
    let vurl = 'http://localhost:4200/videoplaymanager';
    let carnum = row.carid;
    let eventid = row.eventid;
    let tokendata = "thisatokendataverylong";
    let url = `${vurl}/${carnum}/${eventid}/${tokendata}`
    //window.open('http://localhost:4200/videoplaymanager/わ2-674/eventid123/tokendata');
    window.open(url);
  }
}
