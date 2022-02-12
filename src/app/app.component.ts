import { Component, OnInit } from "@angular/core";
import { AuthService } from "./auth/auth.service";
import { UserStoreService } from "./store/user-store.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "instaface";

  constructor(private auth: AuthService, private userStore: UserStoreService) {}

  ngOnInit(): void {
    this.auth.userNavbar();
    this.userStore.getUserLoggedStore();
  }
}

export default AppComponent;
