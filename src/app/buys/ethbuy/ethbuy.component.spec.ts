import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthbuyComponent } from './ethbuy.component';

describe('EthbuyComponent', () => {
  let component: EthbuyComponent;
  let fixture: ComponentFixture<EthbuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthbuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthbuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
