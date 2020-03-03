import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeConductPolicyComponent } from './employee-conduct-policy.component';

describe('EmployeeConductPolicyComponent', () => {
  let component: EmployeeConductPolicyComponent;
  let fixture: ComponentFixture<EmployeeConductPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeConductPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeConductPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
