import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrpsellComponent } from './xrpsell.component';

describe('XrpsellComponent', () => {
  let component: XrpsellComponent;
  let fixture: ComponentFixture<XrpsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrpsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrpsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
