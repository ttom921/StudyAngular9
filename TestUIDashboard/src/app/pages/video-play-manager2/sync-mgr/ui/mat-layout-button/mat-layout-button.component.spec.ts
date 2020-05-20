import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatLayoutButtonComponent } from './mat-layout-button.component';

describe('MatLayoutButtonComponent', () => {
  let component: MatLayoutButtonComponent;
  let fixture: ComponentFixture<MatLayoutButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatLayoutButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatLayoutButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
