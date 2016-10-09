/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DragonsService } from './dragons.service';

describe('Service: Dragons', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragonsService]
    });
  });

  it('should ...', inject([DragonsService], (service: DragonsService) => {
    expect(service).toBeTruthy();
  }));
});
