/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DragonsDetailsResolveService } from './dragons-details-resolve.service';

describe('Service: DragonsDetailsResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragonsDetailsResolveService]
    });
  });

  it('should ...', inject([DragonsDetailsResolveService], (service: DragonsDetailsResolveService) => {
    expect(service).toBeTruthy();
  }));
});
