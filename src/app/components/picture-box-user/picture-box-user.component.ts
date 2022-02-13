import { Component, Input, OnInit } from "@angular/core";
import {
  PictureInterface,
  PostMessageInterface,
} from "src/app/interfaces/interfaces";
import { Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "src/app/auth/auth.service";
import { UserStoreService } from "src/app/store/user-store.service";
import { PictureStoreService } from "src/app/store/picture-store.service";

@Component({
  selector: "app-picture-box-user",
  templateUrl: "./picture-box-user.component.html",
  styleUrls: ["./picture-box-user.component.css"],
})
export class PictureBoxUserComponent implements OnInit {
  @Input() picture!: PictureInterface;

  messageList: boolean = false;

  message: PostMessageInterface = {
    messageText: "",
    pictureId: "",
  };

  messageForm: any;

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService,
    public userStore: UserStoreService,
    private picturesStore: PictureStoreService
  ) {}

  ngOnInit(): void {
    if (localStorage.getItem("token")) {
      this.userStore.getUserLoggedStore();
    }
    this.messageForm = this.formBuilder.group({
      messageText: [
        this.message.messageText,
        [Validators.required, Validators.minLength(4)],
      ],
      pictureId: [this.picture.id],
    });
  }

  get f() {
    return this.messageForm.controls;
  }

  onSudmit() {
    this.picturesStore.postMessageStore(this.messageForm.value);
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

  deleteMessage(id: string) {
    this.picturesStore.postDeleteMessageStore(id);
  }
}
