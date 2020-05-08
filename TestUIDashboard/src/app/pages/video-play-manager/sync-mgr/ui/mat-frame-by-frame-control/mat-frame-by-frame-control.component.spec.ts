import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFrameByFrameControlComponent } from './mat-frame-by-frame-control.component';

describe('MatFrameByFrameControlComponent', () => {
  let component: MatFrameByFrameControlComponent;
  let fixture: ComponentFixture<MatFrameByFrameControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFrameByFrameControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFrameByFrameControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
