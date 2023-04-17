import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionInfoComponent } from './prescription-info.component';

describe('PrescriptionInfoComponent', () => {
  let component: PrescriptionInfoComponent;
  let fixture: ComponentFixture<PrescriptionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
