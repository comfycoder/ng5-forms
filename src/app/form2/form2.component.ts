import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

import { FormValidationService } from '../services/form-validation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Form2Component implements OnInit {

  nameForm: FormGroup;
  errors: any;
  status: string;
  model: any = {
    firstName: null,
    lastName: null
  };

  constructor(
    private formValidationService: FormValidationService
  ) { }

  ngOnInit() {
    this.status = 'VALID';

    this.nameForm = new FormGroup({
      firstName: new FormControl(this.model.firstName, {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ]
      }),
      lastName: new FormControl(this.model.lastName, {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ]
      })
    }, { updateOn: 'blur' });

    this.nameForm.valueChanges.subscribe((data) => {
      console.log('value changes =' + JSON.stringify(data));
      this.model = Object.assign({}, this.nameForm.value);
    });

    this.nameForm.statusChanges.subscribe((status) => {
      this.status = status;
      console.log('status = ' + status);
      if (status === 'INVALID') {
        this.errors = {};
        const errors = this.formValidationService.getFormValidationErrors(this.nameForm);
        errors.forEach((item) => {
          this.errors[item.key] = this.getMessage(item.key, item.keyError, item.value);
        });
        console.log(JSON.stringify(this.errors));
      }
    });
  }

  getMessage(key: string, keyError: string, value: any): any {

    let message: string;

    switch (key) {

      case 'firstName':
        message = this.formValidationService.buildMessage('First name', keyError, value);
        break;

      case 'lastName':
        message = this.formValidationService.buildMessage('Last name', keyError, value);
        break;
    }

    return message;
  }

  onSubmit() {
    console.log(this.model);
  }
}
