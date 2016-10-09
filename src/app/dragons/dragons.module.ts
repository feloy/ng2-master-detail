import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DragonsCenterComponent } from './dragons-center/dragons-center.component';
import { dragonsRouting } from './dragons.routing';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    dragonsRouting
  ],
  declarations: [ DragonsCenterComponent],
  providers: [ ]
})
export class DragonsModule {
}
