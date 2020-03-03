import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentControllerComponent } from './employment-controller.component';

describe('EmploymentControllerComponent', () => {
  let component: EmploymentControllerComponent;
  let fixture: ComponentFixture<EmploymentControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
