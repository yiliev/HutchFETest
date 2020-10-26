import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { SearchComponent } from '../users/search/search.component';
import { ListComponent } from '../users/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { DataVisualisationComponent } from '../users/data-visualisation/data-visualisation.component';
import { DataVisualisationLabelPipe } from '../users/data-visualisation-label.pipe';


@NgModule({
  declarations: [UsersComponent, SearchComponent, ListComponent, DataVisualisationComponent, DataVisualisationLabelPipe],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class UsersModule { }
