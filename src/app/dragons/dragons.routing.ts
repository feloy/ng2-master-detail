import { Routes, RouterModule } from '@angular/router';

import { DragonsCenterComponent } from './dragons-center/dragons-center.component';
import { DragonsListComponent } from './dragons-list/dragons-list.component';
import { DragonsDetailsComponent } from './dragons-details/dragons-details.component';

const dragonsRoutes: Routes = [
  {
    path: '', component: DragonsCenterComponent,
    children: [
      { path: '', component: DragonsListComponent }
    ]
  },
  {
    path: 'new', component: DragonsCenterComponent,
    children: [
      { path: '', component: DragonsListComponent },
      { path: '', component: DragonsDetailsComponent, outlet: 'details'}
    ]
  },
  {
    path: ':id', component: DragonsCenterComponent,
    children: [
      { path: '', component: DragonsListComponent },
      { path: '', component: DragonsDetailsComponent, outlet: 'details'}
    ]
  }
];

export const dragonsRouting = RouterModule.forChild(dragonsRoutes);
