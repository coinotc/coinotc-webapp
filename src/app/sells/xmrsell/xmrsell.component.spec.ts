import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmrsellComponent } from './xmrsell.component';

describe('XmrsellComponent', () => {
  let component: XmrsellComponent;
  let fixture: ComponentFixture<XmrsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmrsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmrsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
