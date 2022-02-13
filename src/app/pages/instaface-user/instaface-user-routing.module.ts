import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InstafaceUserComponent } from "./instaface-user.component";
import { UserListComponent } from "../../components/user-list/user-list.component";
import { CreatePictureComponent } from "../../components/create-picture/create-picture.component";

const routes: Routes = [
  {
    path: "",
    component: InstafaceUserComponent,
    children: [
      { path: "pictures", component: UserListComponent },
      { path: "create-picture", component: CreatePictureComponent },
      {
        path: "**",
        redirectTo: "pictures",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstafaceUserRoutingModule {}
