import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEmailComponent } from './type-email.component';

describe('TypeEmailComponent', () => {
  let component: TypeEmailComponent;
  let fixture: ComponentFixture<TypeEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
