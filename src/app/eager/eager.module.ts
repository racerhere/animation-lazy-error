import { NgModule } from '@angular/core';

import { EagerRoutingModule } from './eager-routing.module';
import { EagerComponent } from './eager/eager.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    EagerRoutingModule
  ],
  declarations: [EagerComponent]
})
export class EagerModule { }
