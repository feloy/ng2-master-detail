import { Routes, RouterModule } from '@angular/router';

import { DragonsCenterComponent } from './dragons-center/dragons-center.component';

const dragonsRoutes: Routes = [
  { path: '', component: DragonsCenterComponent },
];

export const dragonsRouting = RouterModule.forChild(dragonsRoutes);
