import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private authPrivado = new BehaviorSubject<boolean>(false);

  public readonly authPublico$: Observable<boolean> =
    this.authPrivado.asObservable();

  constructor(private route: Router) {}

  authlogoutUser() {
    localStorage.removeItem("token");
    this.authPrivado.next(false);
    const currentUrl = this.route.url;
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
    this.route.onSameUrlNavigation = "reload";
    this.route.navigate([currentUrl]);
  }

  userNavbar() {
    if (localStorage.getItem("token")) {
      this.authPrivado.next(true);
    } else {
      this.authPrivado.next(false);
    }
  }

  canActivate(): boolean {
    if (localStorage.getItem("token")) {
      return true;
    }
    this.route.navigate(["/instaface-home"]);
    return false;
  }
}
