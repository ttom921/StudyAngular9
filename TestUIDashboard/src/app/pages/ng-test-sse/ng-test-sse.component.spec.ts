import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestSSEComponent } from './ng-test-sse.component';

describe('NgTestSSEComponent', () => {
  let component: NgTestSSEComponent;
  let fixture: ComponentFixture<NgTestSSEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestSSEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestSSEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
