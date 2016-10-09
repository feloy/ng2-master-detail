import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DragonsListResolveService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | any {
    console.log('resolve list');
  }
}
