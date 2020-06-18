import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTimeControlComponent } from './mat-time-control.component';

describe('MatTimeControlComponent', () => {
  let component: MatTimeControlComponent;
  let fixture: ComponentFixture<MatTimeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTimeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTimeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
