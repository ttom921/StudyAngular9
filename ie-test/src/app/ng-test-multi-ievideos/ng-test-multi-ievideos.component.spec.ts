import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestMultiIEVideosComponent } from './ng-test-multi-ievideos.component';

describe('NgTestMultiIEVideosComponent', () => {
  let component: NgTestMultiIEVideosComponent;
  let fixture: ComponentFixture<NgTestMultiIEVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestMultiIEVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestMultiIEVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
