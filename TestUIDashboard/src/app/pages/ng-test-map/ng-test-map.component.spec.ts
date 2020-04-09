import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestMapComponent } from './ng-test-map.component';

describe('NgTestMapComponent', () => {
  let component: NgTestMapComponent;
  let fixture: ComponentFixture<NgTestMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
