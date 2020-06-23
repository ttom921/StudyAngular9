import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPhotoButtonComponent } from './mat-photo-button.component';

describe('MatPhotoButtonComponent', () => {
  let component: MatPhotoButtonComponent;
  let fixture: ComponentFixture<MatPhotoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPhotoButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPhotoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
