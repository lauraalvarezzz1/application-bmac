import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLaborerComponent } from './general-laborer.component';

describe('GeneralLaborerComponent', () => {
  let component: GeneralLaborerComponent;
  let fixture: ComponentFixture<GeneralLaborerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLaborerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLaborerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
