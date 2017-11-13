import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]

})
export class TextInputComponent implements ControlValueAccessor, OnInit {

  data: string;

  @Input() controlName: string;
  @Input() maxLength: string;
  @Input() placeHolder: string;

  constructor() { }

  ngOnInit() {
  }

  // The method set in registerOnChange to emit changes back to the form
  private propagateChange = (_: any) => { };

  // this is the initial value set to the component
  writeValue(obj: string): void {
    if (typeof obj === 'string') {
      this.data = obj;
    }
    else {
      this.data = '';
    }
  }

  // registers 'fn' that will be fired wheb changes are made
  // this is how we emit the changes back to the form
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  // not used, used for touch input
  registerOnTouched(fn: any): void { }

  setDisabledState?(isDisabled: boolean): void { }

  // Blur events from the text input
  onBlur(event) {

    // get value from text area
    const newValue = event.target.value;

    this.data = newValue ? newValue : '';

    // update the form
    this.propagateChange(this.data);
  }
}

// <text-input controlName="planName" formControlName="planName"
//   maxLength="100" placeHolder="Plan Name"></text-input>
