import { Component, OnInit, HostListener, Inject } from "@angular/core";
import { PictureStoreService } from "src/app/store/picture-store.service";
import { PictureInterface } from "src/app/interfaces/interfaces";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  listPictures: PictureInterface[] = [];

  loadListPictures: PictureInterface[] = [];

  showButton = false;

  private scrollHeight = 300;

  private start = 0;

  private end = 4;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    public picturesStore: PictureStoreService
  ) {}

  @HostListener("window:scroll")
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const { scrollTop } = this.document.documentElement;
    this.showButton = (yOffSet || scrollTop) > this.scrollHeight;
  }

  startScroll() {
    this.start = 0;
    this.end = 4;
    this.onScrollTop();
    this.picturesStore.listaPicturesPublica$.subscribe((pictures) => {
      this.listPictures = pictures as PictureInterface[];
      this.loadListPictures = this.listPictures.slice(this.start, this.end);
    });
  }

  ngOnInit(): void {
    this.picturesStore.getUserPicturesStore();

    this.startScroll();
  }

  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }

  onScrollDown(): void {
    this.start = this.end;
    this.end *= 2;

    this.loadListPictures.push(
      ...this.listPictures.slice(this.start, this.end)
    );
  }

  allPictures() {
    this.picturesStore.getUserPicturesStore();
    this.startScroll();
  }

  messagesPictures() {
    this.picturesStore.getUserMessagesPicturesStore();
    this.startScroll();
  }

  noMessagesPictures() {
    this.picturesStore.getUserNoMessagesPicturesStore();
    this.startScroll();
  }
}
