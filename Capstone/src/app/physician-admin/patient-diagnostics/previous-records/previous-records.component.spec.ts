import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousRecordsComponent } from './previous-records.component';

describe('PreviousRecordsComponent', () => {
  let component: PreviousRecordsComponent;
  let fixture: ComponentFixture<PreviousRecordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousRecordsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
