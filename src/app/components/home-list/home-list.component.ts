import { Component, OnInit } from "@angular/core";
import { PictureStoreService } from "src/app/store/picture-store.service";

@Component({
  selector: "app-home-list",
  templateUrl: "./home-list.component.html",
  styleUrls: ["./home-list.component.css"],
})
export class HomeListComponent implements OnInit {
  constructor(public picturesStore: PictureStoreService) {}

  ngOnInit(): void {
    this.picturesStore.getAllPicturesStore();
  }
}
