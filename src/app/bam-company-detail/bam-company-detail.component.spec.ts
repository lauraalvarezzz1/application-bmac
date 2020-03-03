import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BamCompanyDetailComponent } from './bam-company-detail.component';

describe('BamCompanyDetailComponent', () => {
  let component: BamCompanyDetailComponent;
  let fixture: ComponentFixture<BamCompanyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BamCompanyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BamCompanyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
