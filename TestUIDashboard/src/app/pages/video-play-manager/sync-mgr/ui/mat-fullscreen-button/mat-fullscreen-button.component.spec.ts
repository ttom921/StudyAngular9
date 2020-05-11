import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatFullscreenButtonComponent } from './mat-fullscreen-button.component';

describe('MatFullscreenButtonComponent', () => {
  let component: MatFullscreenButtonComponent;
  let fixture: ComponentFixture<MatFullscreenButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatFullscreenButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatFullscreenButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
