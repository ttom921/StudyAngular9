import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestMultiMatVideoComponent } from './ng-test-multi-mat-video.component';

describe('NgTestMultiMatVideoComponent', () => {
  let component: NgTestMultiMatVideoComponent;
  let fixture: ComponentFixture<NgTestMultiMatVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestMultiMatVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestMultiMatVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
