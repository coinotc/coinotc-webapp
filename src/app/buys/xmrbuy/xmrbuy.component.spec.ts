import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmrbuyComponent } from './xmrbuy.component';

describe('XmrbuyComponent', () => {
  let component: XmrbuyComponent;
  let fixture: ComponentFixture<XmrbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmrbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmrbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
