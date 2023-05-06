import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstatesRoutingModule } from './estates-routing.module';
import { EstatesComponent } from './estates.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';


@NgModule({
  declarations: [
    EstatesComponent,
    ListComponent,
    ViewComponent,
    DateFormatPipe,
  ],
  imports: [
    CommonModule,
    EstatesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EstatesModule { }
