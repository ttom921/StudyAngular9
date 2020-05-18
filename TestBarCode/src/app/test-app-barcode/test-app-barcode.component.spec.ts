import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestAppBarcodeComponent } from './test-app-barcode.component';

describe('TestAppBarcodeComponent', () => {
  let component: TestAppBarcodeComponent;
  let fixture: ComponentFixture<TestAppBarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestAppBarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestAppBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
