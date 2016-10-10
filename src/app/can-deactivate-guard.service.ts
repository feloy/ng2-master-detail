import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface ComponentDeactivable {
  canDeactivate: () => boolean;
}

@Injectable()
export class CanDeactivateFormGuardService implements CanDeactivate<ComponentDeactivable> {

  constructor() { }

canDeactivate(component: ComponentDeactivable): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
