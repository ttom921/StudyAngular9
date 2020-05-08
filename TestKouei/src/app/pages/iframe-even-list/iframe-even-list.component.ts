import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ViewVideoDialogComponent } from './dialog/view-video-dialog/view-video-dialog.component';

@Component({
  selector: 'app-iframe-even-list',
  templateUrl: './iframe-even-list.component.html',
  styleUrls: ['./iframe-even-list.component.scss']
})
export class IframeEvenListComponent implements OnInit {
  eventDataSource = new MatTableDataSource<any>();
  eventItems: {
    eventid: string,
    eventname: string,
    carid: string,
  }[] = [];
  innerWidth: number = 0;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(`this.innerWidth=>${this.innerWidth}`);
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
    let vurl = 'http://172.18.2.33:4200/videoplaymanager';
    let carnum = row.carid;
    let eventid = row.eventid;
    let tokendata = "thisatokendataverylong";
    let url = `${vurl}/${carnum}/${eventid}/${tokendata}`
    //
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let relativeWidth = (this.innerWidth * 80) / 100; // take up to 80% of the screen size
    if (this.innerWidth > 1500) {
      relativeWidth = (1500 * 80) / 100;
    } else {
      relativeWidth = (this.innerWidth * 80) / 100;
    }

    const relativeHeight = (relativeWidth * 9) / 16; // 16:9 to which we add 120 px for the dialog action buttons ("close")
    dialogConfig.width = relativeWidth + 'px';
    dialogConfig.height = relativeHeight + 'px';
    //
    console.log(`dialogConfig=>${dialogConfig.width},${dialogConfig.height}`);
    dialogConfig.data = {
      url: url
    };
    const dialogRef = this.dialog.open(ViewVideoDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
    // console.log(row);
    // //let vurl = 'http://localhost:4200/videoplaymanager';
    // let vurl = 'http://172.18.2.33:4200/videoplaymanager';
    // let carnum = row.carid;
    // let eventid = row.eventid;
    // let tokendata = "thisatokendataverylong";
    // let url = `${vurl}/${carnum}/${eventid}/${tokendata}`
    // //window.open('http://localhost:4200/videoplaymanager/わ2-674/eventid123/tokendata');
    // window.open(url);
  }
  shwoViewVideoDialog() {
    this.dialog.open(ViewVideoDialogComponent);
  }
}
