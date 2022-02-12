import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { PictureInterface } from "../interfaces/interfaces";
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
}
