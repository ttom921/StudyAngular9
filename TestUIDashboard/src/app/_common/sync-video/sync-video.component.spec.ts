import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncVideoComponent } from './sync-video.component';

describe('SyncVideoComponent', () => {
  let component: SyncVideoComponent;
  let fixture: ComponentFixture<SyncVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
