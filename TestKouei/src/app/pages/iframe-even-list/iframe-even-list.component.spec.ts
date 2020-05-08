import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeEvenListComponent } from './iframe-even-list.component';

describe('IframeEvenListComponent', () => {
  let component: IframeEvenListComponent;
  let fixture: ComponentFixture<IframeEvenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IframeEvenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IframeEvenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
