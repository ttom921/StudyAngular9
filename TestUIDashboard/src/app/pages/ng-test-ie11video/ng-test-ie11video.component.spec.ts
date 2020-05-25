import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestIE11videoComponent } from './ng-test-ie11video.component';

describe('NgTestIE11videoComponent', () => {
  let component: NgTestIE11videoComponent;
  let fixture: ComponentFixture<NgTestIE11videoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestIE11videoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestIE11videoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
