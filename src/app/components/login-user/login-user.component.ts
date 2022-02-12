import { Component, OnInit } from "@angular/core";
import { Login } from "src/app/interfaces/interfaces";
import { Validators, FormBuilder } from "@angular/forms";
import { UserStoreService } from "src/app/store/user-store.service";

@Component({
  selector: "app-login-user",
  templateUrl: "./login-user.component.html",
  styleUrls: ["./login-user.component.css"],
})
export class LoginUserComponent implements OnInit {
  login: Login = {
    nombreUsuario: "",
    password: "",
  };

  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    public userStore: UserStoreService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      nombreUsuario: [
        this.login.nombreUsuario,
        [Validators.required, Validators.minLength(4)],
      ],
      password: [
        this.login.password,
        [Validators.required, Validators.minLength(4)],
      ],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSudmit() {
    this.userStore.loginUserStore(this.loginForm.value);
  }
}
