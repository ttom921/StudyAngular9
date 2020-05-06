import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyncMgrComponent } from './sync-mgr.component';

describe('SyncMgrComponent', () => {
  let component: SyncMgrComponent;
  let fixture: ComponentFixture<SyncMgrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyncMgrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyncMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
