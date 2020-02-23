import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BamCompanyListComponent } from './bam-company-list.component';

describe('BamCompanyListComponent', () => {
  let component: BamCompanyListComponent;
  let fixture: ComponentFixture<BamCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BamCompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BamCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
