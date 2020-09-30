import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestLazyloadComponent } from './ng-test-lazyload.component';

describe('NgTestLazyloadComponent', () => {
  let component: NgTestLazyloadComponent;
  let fixture: ComponentFixture<NgTestLazyloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestLazyloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestLazyloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
