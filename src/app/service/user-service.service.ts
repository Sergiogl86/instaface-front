import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Login } from "../interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  loginUserService(login: Login): Observable<any> {
    return this.http.post(environment.userLogin, login);
  }
}
