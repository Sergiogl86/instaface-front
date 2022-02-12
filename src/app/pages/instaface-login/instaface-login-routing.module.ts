import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InstafaceLoginComponent } from "./instaface-login.component";

import { LoginUserComponent } from "../../components/login-user/login-user.component";

import { RegisterUserComponent } from "../../components/register-user/register-user.component";

const routes: Routes = [
  {
    path: "",
    component: InstafaceLoginComponent,
    children: [
      { path: "login", component: LoginUserComponent },
      { path: "register", component: RegisterUserComponent },
      {
        path: "**",
        redirectTo: "login",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstafaceLoginRoutingModule {}
