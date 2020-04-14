import { Component, OnInit } from '@angular/core';
import { SnackbarService } from 'src/app/_common/Snackbar/snackbar.module';

@Component({
  selector: 'app-ng-test-silder',
  templateUrl: './ng-test-silder.component.html',
  styleUrls: ['./ng-test-silder.component.scss']
})
export class NgTestSilderComponent implements OnInit {

  constructor(private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }
  btntest() {
    window.open('http://localhost:4300/dashboard/videoplaymanager/%E3%82%8F2-674/eventid123/eyJhbGciOiJIUzUxMiIsImlhdCI6MTU4');
  }
  addtoastr() {
    const _this = this;
    this.snackbarService.add({
      msg: '<strong>Message sent</strong>',
      timeout: 5000,
      action: {
        text: 'Undo',
        onClick: (snack) => {
          console.log('dismissed: ' + snack.id);
          //_this.undo();
        }
      },
      onAdd: (snack) => {
        console.log('added: ' + snack.id)
      },
      onRemove: (snack) => {
        console.log('removed: ' + snack.id);
      }
    });
  }
  cleartoastr() {
    this.snackbarService.clear();
  }
  // undo() {
  //   ...
  // }
}
