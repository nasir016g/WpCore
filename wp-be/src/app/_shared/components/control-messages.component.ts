import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../../_services/validation.service';

@Component({
  selector: 'control-messages',
  template: `<div class="error float-left" *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessagesComponent {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let validatorName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(validatorName) && this.control.touched) {
        return ValidationService.getValidatorErrorMessage(validatorName, this.control.errors[validatorName]);
      }
    }

    return null;
  }
}
