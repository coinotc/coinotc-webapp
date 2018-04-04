import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrustingComponent } from './user-trusting.component';

describe('UserTrustingComponent', () => {
  let component: UserTrustingComponent;
  let fixture: ComponentFixture<UserTrustingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrustingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrustingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
