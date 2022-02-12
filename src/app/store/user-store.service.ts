import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import jwtDecode from "jwt-decode";
import { ErrorInterface, Login, UserInterface } from "../interfaces/interfaces";

import { UserServiceService } from "../service/user-service.service";

@Injectable({
  providedIn: "root",
})
export class UserStoreService {
  private userError = new BehaviorSubject<ErrorInterface>({});

  public readonly userErrorPublico$: Observable<ErrorInterface> =
    this.userError.asObservable();

  private user = new BehaviorSubject<UserInterface>({
    nombre: "",
    nombreUsuario: "",
    urlFotoUser: "",
    id: "",
  });

  public readonly userPublico$: Observable<UserInterface> =
    this.user.asObservable();

  constructor(private userSvc: UserServiceService, private route: Router) {}

  registerUserStore(register: FormData) {
    this.userSvc.registerUserService(register).subscribe({
      next: () => this.route.navigate(["/instaface-login/login"]),
    });
  }

  loginUserStore(login: Login) {
    this.userSvc.loginUserService(login).subscribe({
      next: (res) => {
        localStorage.setItem("token", res.token);
        const userData: UserInterface = jwtDecode(res.token);
        this.userError.next({});
        console.log(userData);
        this.user.next(userData);
        this.route.navigate(["/instaface-user"]);
      },
      error: (e) => this.userError.next(e.error),
    });
  }
}
