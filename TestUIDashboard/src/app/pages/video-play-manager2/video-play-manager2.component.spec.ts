import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPlayManager2Component } from './video-play-manager2.component';

describe('VideoPlayManager2Component', () => {
  let component: VideoPlayManager2Component;
  let fixture: ComponentFixture<VideoPlayManager2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPlayManager2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPlayManager2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
