import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGPXParserComponent } from './test-gpxparser.component';

describe('TestGPXParserComponent', () => {
  let component: TestGPXParserComponent;
  let fixture: ComponentFixture<TestGPXParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestGPXParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGPXParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
