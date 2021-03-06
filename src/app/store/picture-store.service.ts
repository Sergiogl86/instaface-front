import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import {
  PictureInterface,
  PostMessageInterface,
} from "../interfaces/interfaces";
import { PictureServiceService } from "../service/picture-service.service";

@Injectable({
  providedIn: "root",
})
export class PictureStoreService {
  private listaPicturesPrivada = new BehaviorSubject<PictureInterface[]>([]);

  public readonly listaPicturesPublica$: Observable<PictureInterface[]> =
    this.listaPicturesPrivada.asObservable();

  constructor(
    private picturesSvc: PictureServiceService,
    private route: Router
  ) {}

  getAllPicturesStore() {
    this.picturesSvc.getAllPictures().subscribe({
      next: (pictures: PictureInterface[]) =>
        this.listaPicturesPrivada.next(pictures),
    });
  }

  getAllMessagesPicturesStore() {
    this.picturesSvc.getAllMessagesPictures().subscribe({
      next: (pictures: PictureInterface[]) =>
        this.listaPicturesPrivada.next(pictures),
    });
  }

  getAllNoMessagesPicturesStore() {
    this.picturesSvc.getAllNoMessagesPictures().subscribe({
      next: (pictures: PictureInterface[]) =>
        this.listaPicturesPrivada.next(pictures),
    });
  }

  getUserPicturesStore() {
    this.picturesSvc.getUserPictures().subscribe({
      next: (pictures: PictureInterface[]) =>
        this.listaPicturesPrivada.next(pictures),
    });
  }

  getUserMessagesPicturesStore() {
    this.picturesSvc.getUserMessagesPictures().subscribe({
      next: (pictures: PictureInterface[]) =>
        this.listaPicturesPrivada.next(pictures),
    });
  }

  getUserNoMessagesPicturesStore() {
    this.picturesSvc.getUserNoMessagesPictures().subscribe({
      next: (pictures: PictureInterface[]) =>
        this.listaPicturesPrivada.next(pictures),
    });
  }

  postDeletePictureStore(id: string) {
    this.picturesSvc.postDeletePictureService(id).subscribe({
      next: () => {
        const currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = "reload";
        this.route.navigate([currentUrl]);
      },
    });
  }

  postMessageStore(message: PostMessageInterface) {
    this.picturesSvc.postMessageService(message).subscribe({
      next: () => {
        const currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = "reload";
        this.route.navigate([currentUrl]);
      },
    });
  }

  postDeleteMessageStore(id: string) {
    this.picturesSvc.postDeleteMessageService(id).subscribe({
      next: () => {
        const currentUrl = this.route.url;
        this.route.routeReuseStrategy.shouldReuseRoute = () => false;
        this.route.onSameUrlNavigation = "reload";
        this.route.navigate([currentUrl]);
      },
    });
  }

  postPictureStore(picture: FormData) {
    this.picturesSvc.postPictureService(picture).subscribe({
      next: () => this.route.navigate(["/instaface-user/pictures"]),
    });
  }
}
