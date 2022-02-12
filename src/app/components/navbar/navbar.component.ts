import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";
import { UserStoreService } from "src/app/store/user-store.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(public auth: AuthService, public userStore: UserStoreService) {}

  ngOnInit(): void {}

  logoutUser() {
    this.auth.authlogoutUser();
  }
}
