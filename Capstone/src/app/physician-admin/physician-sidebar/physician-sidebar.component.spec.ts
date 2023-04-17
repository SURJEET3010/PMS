import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianSidebarComponent } from './physician-sidebar.component';

describe('PhysicianSidebarComponent', () => {
  let component: PhysicianSidebarComponent;
  let fixture: ComponentFixture<PhysicianSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhysicianSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
