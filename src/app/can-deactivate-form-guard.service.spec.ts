/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CanDeactivateFormGuardService } from './can-deactivate-form-guard.service';

describe('Service: CanDeactivateFormGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanDeactivateFormGuardService]
    });
  });

  it('should ...', inject([CanDeactivateFormGuardService], (service: CanDeactivateFormGuardService) => {
    expect(service).toBeTruthy();
  }));
});
