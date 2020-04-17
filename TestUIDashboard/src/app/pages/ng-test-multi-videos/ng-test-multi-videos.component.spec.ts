import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestMultiVideosComponent } from './ng-test-multi-videos.component';

describe('NgTestMultiVideosComponent', () => {
  let component: NgTestMultiVideosComponent;
  let fixture: ComponentFixture<NgTestMultiVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestMultiVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestMultiVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
