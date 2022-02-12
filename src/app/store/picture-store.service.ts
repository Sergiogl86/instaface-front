import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { PictureInterface } from "../interfaces/interfaces";
import { PictureServiceService } from "../service/picture-service.service";

@Injectable({
  providedIn: "root",
})
export class PictureStoreService {
  private listaPicturesPrivada = new BehaviorSubject<PictureInterface[]>([]);

  public readonly listaPicturesPublica$: Observable<PictureInterface[]> =
    this.listaPicturesPrivada.asObservable();

  constructor(private picturesSvc: PictureServiceService) {}

  getAllPicturesStore() {
    this.picturesSvc.getAllPictures().subscribe({
      next: (pictures: PictureInterface[]) =>
        this.listaPicturesPrivada.next(pictures),
    });
  }
}
