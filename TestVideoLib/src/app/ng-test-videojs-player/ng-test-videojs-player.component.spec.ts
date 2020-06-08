import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestVideojsPlayerComponent } from './ng-test-videojs-player.component';

describe('NgTestVideojsPlayerComponent', () => {
  let component: NgTestVideojsPlayerComponent;
  let fixture: ComponentFixture<NgTestVideojsPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestVideojsPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestVideojsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
