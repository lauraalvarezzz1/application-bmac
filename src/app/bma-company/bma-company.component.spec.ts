import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmaCompanyComponent } from './bma-company.component';

describe('BmaCompanyComponent', () => {
  let component: BmaCompanyComponent;
  let fixture: ComponentFixture<BmaCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmaCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmaCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
