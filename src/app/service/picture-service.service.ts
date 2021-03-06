import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { PostMessageInterface } from "../interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class PictureServiceService {
  constructor(private http: HttpClient) {}

  getAllPictures(): Observable<any> {
    return this.http.get(environment.allPictures);
  }

  getAllMessagesPictures(): Observable<any> {
    return this.http.get(environment.allMessagesPictures);
  }

  getAllNoMessagesPictures(): Observable<any> {
    return this.http.get(environment.allNoMessagesPictures);
  }

  getUserPictures(): Observable<any> {
    return this.http.get(environment.userPictures, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  }

  getUserMessagesPictures(): Observable<any> {
    return this.http.get(environment.userMessagesPictures, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  }

  getUserNoMessagesPictures(): Observable<any> {
    return this.http.get(environment.userNoMessagesPictures, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  }

  postDeletePictureService(pictureId: string): Observable<any> {
    return this.http.post(
      environment.deletePicture,
      { pictureId },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
  }

  postMessageService(message: PostMessageInterface): Observable<any> {
    return this.http.post(environment.postMessage, message, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  }

  postDeleteMessageService(messageId: string): Observable<any> {
    return this.http.post(
      environment.postDeleteMessage,
      { messageId },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
  }

  postPictureService(picture: FormData): Observable<any> {
    return this.http.post(environment.postPictureService, picture, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  }
}
