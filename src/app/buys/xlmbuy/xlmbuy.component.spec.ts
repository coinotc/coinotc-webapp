import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XlmbuyComponent } from './xlmbuy.component';

describe('XlmbuyComponent', () => {
  let component: XlmbuyComponent;
  let fixture: ComponentFixture<XlmbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XlmbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XlmbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
