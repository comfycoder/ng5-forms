import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Injectable()
export class FormValidationService {

  constructor() { }

  getFormValidationErrorMessages(form: FormGroup): any {
    const errors = new Object();
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          // console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          // const type = new Object();
          // type[keyError] = controlErrors[keyError];
          // errors[key] = type;
          errors[key] = this.getMessage(key, keyError, controlErrors[keyError]);
        });
      }
    });
    return errors;
  }

  getMessage(key: string, keyError: string, value: any): any {

    let message: string;

    const messageKey: string = key + '_' + keyError;

    switch (messageKey) {

      case 'firstName_required':
        message = 'First name is required';
        break;

      case 'firstName_minlength':
        message = 'First name must be at least ' + value.requiredLength + '-characters long.';
        break;

      case 'lastName_required':
        message = 'Last name is required';
        break;

      case 'lastName_minlength':
        message = 'Last name must be at least ' + value.requiredLength + '-characters long.';
        break;
    }

    return message;
  }

  getFormValidationErrors(form: FormGroup): any[] {
    const errors: any[] = [];
    Object.keys(form.controls).forEach(key => {
      const controlErrors: ValidationErrors = form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          // console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          errors.push({ key, keyError, value: controlErrors[keyError] });
        });
      }
    });

    return errors;
  }

  buildMessage(fieldName: string, keyError: string, value: any): any {

    let message: string;

    switch (keyError.toLowerCase()) {

      case 'required':
        message = `${fieldName} is required.`;
        break;

      case 'minlength':
        message = `${fieldName} must be at least ${value.requiredLength}-characters long.`;
        break;
    }

    return message;
  }
}
