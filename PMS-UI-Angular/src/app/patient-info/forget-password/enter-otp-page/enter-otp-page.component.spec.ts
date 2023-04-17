import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterOtpPageComponent } from './enter-otp-page.component';

describe('EnterOtpPageComponent', () => {
  let component: EnterOtpPageComponent;
  let fixture: ComponentFixture<EnterOtpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterOtpPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterOtpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
