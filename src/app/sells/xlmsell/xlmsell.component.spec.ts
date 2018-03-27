import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XlmsellComponent } from './xlmsell.component';

describe('XlmsellComponent', () => {
  let component: XlmsellComponent;
  let fixture: ComponentFixture<XlmsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XlmsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XlmsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
