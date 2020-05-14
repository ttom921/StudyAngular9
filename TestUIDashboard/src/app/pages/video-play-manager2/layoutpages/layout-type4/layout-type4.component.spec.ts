import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutType4Component } from './layout-type4.component';

describe('LayoutType4Component', () => {
  let component: LayoutType4Component;
  let fixture: ComponentFixture<LayoutType4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutType4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutType4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
