import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestSingleVideosComponent } from './ng-test-single-videos.component';

describe('NgTestSingleVideosComponent', () => {
  let component: NgTestSingleVideosComponent;
  let fixture: ComponentFixture<NgTestSingleVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestSingleVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestSingleVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
