import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtaSetCarComponent } from './ota-set-car.component';

describe('OtaSetCarComponent', () => {
  let component: OtaSetCarComponent;
  let fixture: ComponentFixture<OtaSetCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtaSetCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtaSetCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
