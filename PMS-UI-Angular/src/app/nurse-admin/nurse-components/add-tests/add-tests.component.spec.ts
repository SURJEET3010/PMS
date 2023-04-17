import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTestsComponent } from './add-tests.component';

describe('AddTestsComponent', () => {
  let component: AddTestsComponent;
  let fixture: ComponentFixture<AddTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
