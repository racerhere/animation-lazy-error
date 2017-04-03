import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ]
})
export class CoreModule {
  // prevent re-import of the core feature module - DO NOT REMOVE THIS CHECK
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
