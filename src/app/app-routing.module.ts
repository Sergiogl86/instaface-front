import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AuthService } from "./auth/auth.service";

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
    canActivate: [AuthService],
  },
  {
    path: "instaface-login",
    loadChildren: () =>
      import("./pages/instaface-login/instaface-login.module").then(
        (m) => m.InstafaceLoginModule
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
