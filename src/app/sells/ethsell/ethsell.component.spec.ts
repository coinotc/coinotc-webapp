import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthsellComponent } from './ethsell.component';

describe('EthsellComponent', () => {
  let component: EthsellComponent;
  let fixture: ComponentFixture<EthsellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthsellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthsellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
