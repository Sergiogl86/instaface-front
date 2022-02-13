import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InstafaceUserRoutingModule } from "./instaface-user-routing.module";
import { InstafaceUserComponent } from "./instaface-user.component";
import { UserListComponent } from "../../components/user-list/user-list.component";
import { PictureBoxUserComponent } from "../../components/picture-box-user/picture-box-user.component";

@NgModule({
  declarations: [
    InstafaceUserComponent,
    UserListComponent,
    PictureBoxUserComponent,
  ],
  imports: [
    CommonModule,
    InstafaceUserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class InstafaceUserModule {}
