import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { InstafaceHomeRoutingModule } from "./instaface-home-routing.module";
import { InstafaceHomeComponent } from "./instaface-home.component";

import { HomeListComponent } from "../../components/home-list/home-list.component";
import { PictureBoxHomeComponent } from "../../components/picture-box-home/picture-box-home.component";

@NgModule({
  declarations: [
    InstafaceHomeComponent,
    HomeListComponent,
    PictureBoxHomeComponent,
  ],
  imports: [
    CommonModule,
    InstafaceHomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InfiniteScrollModule,
  ],
})
export class InstafaceHomeModule {}
