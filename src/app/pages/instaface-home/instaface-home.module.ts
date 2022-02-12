import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstafaceHomeRoutingModule } from './instaface-home-routing.module';
import { InstafaceHomeComponent } from './instaface-home.component';


@NgModule({
  declarations: [
    InstafaceHomeComponent
  ],
  imports: [
    CommonModule,
    InstafaceHomeRoutingModule
  ]
})
export class InstafaceHomeModule { }
