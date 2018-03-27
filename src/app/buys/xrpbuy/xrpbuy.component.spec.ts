import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XrpbuyComponent } from './xrpbuy.component';

describe('XrpbuyComponent', () => {
  let component: XrpbuyComponent;
  let fixture: ComponentFixture<XrpbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XrpbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XrpbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
