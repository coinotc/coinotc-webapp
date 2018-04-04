import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdabuyComponent } from './adabuy.component';

describe('AdabuyComponent', () => {
  let component: AdabuyComponent;
  let fixture: ComponentFixture<AdabuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdabuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdabuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
