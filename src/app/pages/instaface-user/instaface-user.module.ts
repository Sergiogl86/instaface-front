import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstafaceUserRoutingModule } from './instaface-user-routing.module';
import { InstafaceUserComponent } from './instaface-user.component';


@NgModule({
  declarations: [
    InstafaceUserComponent
  ],
  imports: [
    CommonModule,
    InstafaceUserRoutingModule
  ]
})
export class InstafaceUserModule { }
