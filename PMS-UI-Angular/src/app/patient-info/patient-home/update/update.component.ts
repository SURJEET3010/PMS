import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  addressForm = this.fb.group({
    email: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
   
    Reason: [null],
    state: [null, Validators.required],
    postalCode: [null, Validators.compose([
      Validators.required, Validators.minLength(0), Validators.maxLength(10)])
    ],
   // shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  states = [
    {name: 'A -', abbreviation: 'A'},
    {name: 'A +', abbreviation: 'A'},
    {name: 'B -', abbreviation: 'B'},
    {name: 'B +', abbreviation: 'B'},
    {name: 'AB -', abbreviation: 'Ab'},
    {name: 'AB +', abbreviation: 'AB'},
    {name: 'O -', abbreviation: 'O'},
    {name: 'O +', abbreviation: 'O'},
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}
