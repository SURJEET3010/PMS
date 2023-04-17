import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianNavbarComponent } from './physician-navbar.component';

describe('PhysicianNavbarComponent', () => {
  let component: PhysicianNavbarComponent;
  let fixture: ComponentFixture<PhysicianNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicianNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
