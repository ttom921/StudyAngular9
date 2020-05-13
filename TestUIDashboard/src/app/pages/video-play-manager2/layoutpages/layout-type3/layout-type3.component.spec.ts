import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutType3Component } from './layout-type3.component';

describe('LayoutType3Component', () => {
  let component: LayoutType3Component;
  let fixture: ComponentFixture<LayoutType3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutType3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutType3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
