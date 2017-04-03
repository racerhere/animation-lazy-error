import { NgModule } from '@angular/core';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy/lazy.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    LazyRoutingModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
