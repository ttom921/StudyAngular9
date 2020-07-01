import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestDateTimePickerComponent } from './ng-test-date-time-picker.component';

describe('NgTestDateTimePickerComponent', () => {
  let component: NgTestDateTimePickerComponent;
  let fixture: ComponentFixture<NgTestDateTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestDateTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestDateTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
