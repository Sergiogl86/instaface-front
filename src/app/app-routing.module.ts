import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "instaface-home",
    loadChildren: () =>
      import("./pages/instaface-home/instaface-home.module").then(
        (m) => m.InstafaceHomeModule
      ),
  },
  {
    path: "instaface-user",
    loadChildren: () =>
      import("./pages/instaface-user/instaface-user.module").then(
        (m) => m.InstafaceUserModule
      ),
  },
  {
    path: "**",
    redirectTo: "/instaface-home",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
class AppRoutingModule {}

export default AppRoutingModule;
