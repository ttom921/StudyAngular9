import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVideoDialogComponent } from './view-video-dialog.component';

describe('ViewVideoDialogComponent', () => {
  let component: ViewVideoDialogComponent;
  let fixture: ComponentFixture<ViewVideoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewVideoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVideoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
