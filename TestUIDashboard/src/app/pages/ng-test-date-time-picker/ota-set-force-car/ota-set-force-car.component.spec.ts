import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaSetForceCarComponent } from './ota-set-force-car.component';

describe('OtaSetForceCarComponent', () => {
  let component: OtaSetForceCarComponent;
  let fixture: ComponentFixture<OtaSetForceCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaSetForceCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaSetForceCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
