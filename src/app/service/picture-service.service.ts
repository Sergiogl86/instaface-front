import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

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
}
