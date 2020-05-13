import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutType1Component } from './layout-type1.component';

describe('LayoutType1Component', () => {
  let component: LayoutType1Component;
  let fixture: ComponentFixture<LayoutType1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutType1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutType1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
