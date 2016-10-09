import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Dragon, DragonsService } from './dragons.service';

@Injectable()
export class DragonsListResolveService implements Resolve<Dragon[]> {

  constructor(private service: DragonsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Dragon[] {
    return this.service.dragonsList();
  }
}
