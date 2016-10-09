import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DragonsCenterComponent } from './dragons-center/dragons-center.component';
import { dragonsRouting } from './dragons.routing';
import { DragonsListComponent } from './dragons-list/dragons-list.component';
import { DragonsDetailsComponent } from './dragons-details/dragons-details.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    dragonsRouting
  ],
  declarations: [ DragonsCenterComponent, DragonsListComponent, DragonsDetailsComponent],
  providers: [ ]
})
export class DragonsModule {
}
