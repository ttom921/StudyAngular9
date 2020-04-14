import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestToastrComponent } from './ng-test-toastr.component';

describe('NgTestToastrComponent', () => {
  let component: NgTestToastrComponent;
  let fixture: ComponentFixture<NgTestToastrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestToastrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
