import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import jwtDecode from "jwt-decode";
import { AuthService } from "../auth/auth.service";
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

  constructor(
    private userSvc: UserServiceService,
    private auth: AuthService,
    private route: Router
  ) {}

  cleanUser() {
    this.user.next({
      nombre: "",
      nombreUsuario: "",
      urlFotoUser: "",
      id: "",
    });
  }

  registerUserStore(register: FormData) {
    this.userSvc.registerUserService(register).subscribe({
      next: () => this.route.navigate(["/instaface-login/login"]),
    });
  }

  loginUserStore(login: Login) {
    this.userSvc.loginUserService(login).subscribe({
      next: (res) => {
        localStorage.setItem("token", res.token);
        this.userError.next({});
        this.auth.userNavbar();
        this.getUserLoggedStore();
        this.route.navigate(["/instaface-user"]);
      },
      error: (e) => this.userError.next(e.error),
    });
  }

  getUserLoggedStore() {
    const token: any = localStorage.getItem("token");
    const userData: UserInterface = jwtDecode(token);
    this.user.next(userData);
  }
}
