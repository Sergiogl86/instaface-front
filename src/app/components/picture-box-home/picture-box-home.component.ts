import { Component, Input, OnInit } from "@angular/core";
import { PictureInterface } from "src/app/interfaces/interfaces";
import { AuthService } from "src/app/auth/auth.service";
import { UserStoreService } from "src/app/store/user-store.service";
import { PictureStoreService } from "src/app/store/picture-store.service";

@Component({
  selector: "app-picture-box-home",
  templateUrl: "./picture-box-home.component.html",
  styleUrls: ["./picture-box-home.component.css"],
})
export class PictureBoxHomeComponent implements OnInit {
  @Input() picture!: PictureInterface;

  messageList: boolean = false;

  constructor(
    public auth: AuthService,
    public userStore: UserStoreService,
    private picturesStore: PictureStoreService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.userStore.getUserLoggedStore();
    }
  }

  openListButton() {
    this.messageList = true;
  }

  closeListButton() {
    this.messageList = false;
  }

  deletePicture(id: string) {
    this.picturesStore.postDeletePictureStore(id);
  }
}
