/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DragonsListResolveService } from './dragons-list-resolve.service';

describe('Service: DragonsListResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragonsListResolveService]
    });
  });

  it('should ...', inject([DragonsListResolveService], (service: DragonsListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
