import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseNavbarComponent } from './nurse-navbar.component';

describe('NurseNavbarComponent', () => {
  let component: NurseNavbarComponent;
  let fixture: ComponentFixture<NurseNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurseNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
