import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-tests',
  templateUrl: './add-tests.component.html',
  styleUrls: ['./add-tests.component.css']
})
export class AddTestsComponent {
  testForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      testName: ['', Validators.required],
      result: ['', Validators.required],
      notes: ['', Validators.required],
    });
  }

  saveTest() {
    console.log(this.testForm.value);
  }

}
