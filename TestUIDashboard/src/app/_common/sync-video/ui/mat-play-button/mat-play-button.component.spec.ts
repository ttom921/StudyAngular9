import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPlayButtonComponent } from './mat-play-button.component';

describe('MatPlayButtonComponent', () => {
  let component: MatPlayButtonComponent;
  let fixture: ComponentFixture<MatPlayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPlayButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
