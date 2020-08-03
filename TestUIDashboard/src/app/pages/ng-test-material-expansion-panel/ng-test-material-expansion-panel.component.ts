import { Component, OnInit } from '@angular/core';

export const titles = [
  {
    title: 'First Title',
    titleId: 'firstTitle',
    info: [
      { name: 'Info One', code: 'infoOne' },
      { name: 'Info Two', code: 'infoTwo' },
      { name: 'Info Three', code: 'infoThree' },
      { name: 'Info Four', code: 'infoFour' }
    ]
  },
  {
    title: 'Second Title',
    titleId: 'secondTitle',
    info: [
      { name: 'Package', code: 'package' },
      { name: 'Package Two', code: 'packageTwo' }
    ]
  },
  {
    title: 'Third Title',
    titleId: 'thirdTitle',
    info: [
      { name: 'Widget One', code: 'widgetOne' },
      { name: 'Widget Two', code: 'widgetTwo' },
      { name: 'Widget Three', code: 'widgetThree' },
      { name: 'Widget Four', code: 'widgetFour' }
    ]
  }
];

@Component({
  selector: 'app-ng-test-material-expansion-panel',
  templateUrl: './ng-test-material-expansion-panel.component.html',
  styleUrls: ['./ng-test-material-expansion-panel.component.scss']
})
export class NgTestMaterialExpansionPanelComponent implements OnInit {
  titlesForIterate = [];
  constructor() {
    this.initGroupData();
    console.log(this.titlesForIterate);
  }

  ngOnInit(): void {
  }
  initGroupData() {
    for (let index = 0; index < titles.length; index++) {
      const element = titles[index];
      let itemdata = {
        title: element.title,
        dataSource: element.info,
      };
      this.titlesForIterate.push(itemdata);
    }
  }
}
