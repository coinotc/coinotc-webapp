import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTrustedComponent } from './user-trusted.component';

describe('UserTrustedComponent', () => {
  let component: UserTrustedComponent;
  let fixture: ComponentFixture<UserTrustedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTrustedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTrustedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
