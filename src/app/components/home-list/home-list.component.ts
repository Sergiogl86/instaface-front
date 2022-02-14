import { Component, OnInit, HostListener, Inject } from "@angular/core";
import { PictureStoreService } from "src/app/store/picture-store.service";
import { PictureInterface } from "src/app/interfaces/interfaces";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-home-list",
  templateUrl: "./home-list.component.html",
  styleUrls: ["./home-list.component.css"],
})
export class HomeListComponent implements OnInit {
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
    this.picturesStore.getAllPicturesStore();

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
    this.picturesStore.getAllPicturesStore();
    this.startScroll();
  }

  messagesPictures() {
    this.picturesStore.getAllMessagesPicturesStore();
    this.startScroll();
  }

  noMessagesPictures() {
    this.picturesStore.getAllNoMessagesPicturesStore();
    this.startScroll();
  }
}
