import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InstafaceLoginRoutingModule } from "./instaface-login-routing.module";
import { InstafaceLoginComponent } from "./instaface-login.component";

import { LoginUserComponent } from "../../components/login-user/login-user.component";

import { RegisterUserComponent } from "../../components/register-user/register-user.component";

@NgModule({
  declarations: [
    InstafaceLoginComponent,
    LoginUserComponent,
    RegisterUserComponent,
  ],
  imports: [
    CommonModule,
    InstafaceLoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class InstafaceLoginModule {}
