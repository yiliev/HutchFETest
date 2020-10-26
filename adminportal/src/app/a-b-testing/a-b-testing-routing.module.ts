import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ABTestingComponent } from './a-b-testing.component';

const routes: Routes = [{ path: '', component: ABTestingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ABTestingRoutingModule { }
