import { Component, OnInit } from "@angular/core";
import { PictureStoreService } from "src/app/store/picture-store.service";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  constructor(public picturesStore: PictureStoreService) {}

  ngOnInit(): void {
    this.picturesStore.getUserPicturesStore();
  }

  allPictures() {
    this.picturesStore.getUserPicturesStore();
  }

  messagesPictures() {
    this.picturesStore.getUserMessagesPicturesStore();
  }

  noMessagesPictures() {
    this.picturesStore.getUserNoMessagesPicturesStore();
  }
}
