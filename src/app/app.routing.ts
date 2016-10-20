import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'dragons', loadChildren: 'app/dragons/dragons.module#DragonsModule' }
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
