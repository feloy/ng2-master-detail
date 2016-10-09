import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface FormDeactivable {
  canDeactivate: () => boolean;
}

@Injectable()
export class CanDeactivateFormGuardService implements CanDeactivate<FormDeactivable> {

  constructor() { }

canDeactivate(component: FormDeactivable): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
