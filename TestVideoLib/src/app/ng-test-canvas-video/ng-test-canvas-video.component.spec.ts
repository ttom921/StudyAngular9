import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestCanvasVideoComponent } from './ng-test-canvas-video.component';

describe('NgTestCanvasVideoComponent', () => {
  let component: NgTestCanvasVideoComponent;
  let fixture: ComponentFixture<NgTestCanvasVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestCanvasVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestCanvasVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
