import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DragonsCenterComponent } from './dragons-center/dragons-center.component';
import { dragonsRouting } from './dragons.routing';
import { DragonsListComponent } from './dragons-list/dragons-list.component';
import { DragonsDetailsComponent } from './dragons-details/dragons-details.component';

import { DragonsListResolveService } from './dragons-list-resolve.service';
import { DragonsDetailsResolveService } from './dragons-details-resolve.service';

import { DragonsService } from './dragons.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    dragonsRouting
  ],
  declarations: [ DragonsCenterComponent, DragonsListComponent, DragonsDetailsComponent],
  providers: [ DragonsListResolveService, DragonsDetailsResolveService, DragonsService ]
})
export class DragonsModule {
}
