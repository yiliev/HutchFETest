import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ABTestingRoutingModule } from './a-b-testing-routing.module';
import { ABTestingComponent } from './a-b-testing.component';


@NgModule({
  declarations: [ABTestingComponent],
  imports: [
    CommonModule,
    ABTestingRoutingModule
  ]
})
export class ABTestingModule { }
