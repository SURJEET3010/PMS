import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTestComponent } from './all-test.component';

describe('AllTestComponent', () => {
  let component: AllTestComponent;
  let fixture: ComponentFixture<AllTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
