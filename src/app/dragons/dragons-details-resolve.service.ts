import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Dragon, DragonsService } from './dragons.service';

@Injectable()
export class DragonsDetailsResolveService implements Resolve<Dragon> {

  constructor(private service: DragonsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Dragon {
    let id = +route.params['id'];
    return this.service.dragonsDetails(id);
  }
}
