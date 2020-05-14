import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutType8Component } from './layout-type8.component';

describe('LayoutType8Component', () => {
  let component: LayoutType8Component;
  let fixture: ComponentFixture<LayoutType8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutType8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutType8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
