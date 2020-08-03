import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTestMaterialExpansionPanelComponent } from './ng-test-material-expansion-panel.component';

describe('NgTestMaterialExpansionPanelComponent', () => {
  let component: NgTestMaterialExpansionPanelComponent;
  let fixture: ComponentFixture<NgTestMaterialExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTestMaterialExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTestMaterialExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
