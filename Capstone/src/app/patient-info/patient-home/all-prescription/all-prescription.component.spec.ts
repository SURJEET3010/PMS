import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPrescriptionComponent } from './all-prescription.component';

describe('AllPrescriptionComponent', () => {
  let component: AllPrescriptionComponent;
  let fixture: ComponentFixture<AllPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPrescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
