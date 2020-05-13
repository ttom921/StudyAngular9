import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutType2Component } from './layout-type2.component';

describe('LayoutType2Component', () => {
  let component: LayoutType2Component;
  let fixture: ComponentFixture<LayoutType2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutType2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
