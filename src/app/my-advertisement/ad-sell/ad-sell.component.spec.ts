import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdSellComponent } from './ad-sell.component';

describe('AdSellComponent', () => {
  let component: AdSellComponent;
  let fixture: ComponentFixture<AdSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
