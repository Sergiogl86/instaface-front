/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { Router } from "@angular/router";
import { Login, UserInterface } from "../interfaces/interfaces";
import { UserStoreService } from "./user-store.service";
import { UserServiceService } from "../service/user-service.service";
import { AuthService } from "../auth/auth.service";

describe("UserStoreService", () => {
  let service: UserStoreService;

  let routerFake: Router;

  let localStore: any;

  const user: UserInterface = {
    nombre: "Mario",
    nombreUsuario: "Mario",
    urlFotoUser:
      "https://storage.googleapis.com/back-final-project-202109.appspot.com/QueTeca-User-User_de_prueba-1638704876480-.jpg",
    id: "619e87f964c30a7f3ddb2595",
  };

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const login: Login = {
    nombreUsuario: "Test-User",
    password: "1234",
  };

  const id: string = "619fcb5e6eeba2c6cec30454";

  const token: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWU4N2Y5NjRjMzBhN2YzZGRiMjU5NSIsIm5vbWJyZSI6Ik1hcmlvIiwibm9tYnJlVXN1YXJpbyI6Ik1hcmlvIiwidXJsRm90b1VzZXIiOiJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYmFjay1maW5hbC1wcm9qZWN0LTIwMjEwOS5hcHBzcG90LmNvbS9RdWVUZWNhLVVzZXItc29mdHdhcmUtZGV2ZWxvcG1lbnQtaXMtbm90LXN0cmVzc2Z1bC1zYXlzLXJvYmVydC0yMi15ZWFycy1vbGQtNDk0NTg4MjMtMTYzODcwMjg4MTI0NS0ucG5nIiwibGlrZXNVc2VyIjo2LCJyZWNldGFzIjpbIjYxOWZjYjVlNmVlYmEyYzZjZWMzMDQ1NCIsIjYxOWZkMWU4M2MxZmJmODIzYTQzZDgyNyIsIjYxYTdkNmRjNmZjYzk2MGFkMjdlOWQ5NCIsIjYxYTdkOTc5NmZjYzk2MGFkMjdlOWUxOCJdLCJpYXQiOjE2Mzg3MDQ2OTYsImV4cCI6MTYzODc5MTA5Nn0.eciI0CA2RNO1UidNLSu7ELlK5ZZF_SAVANytiqtQels";

  const tokenObj = { token };

  const registerForm = new FormData();
  registerForm.append("nombre", "nombre");
  registerForm.append("nombreUsuario", "nombreUsuario");
  registerForm.append("password", "password");
  registerForm.append("userImg", "userImg");

  const routerMock = {
    navigate: () => {},
    routeReuseStrategy: {
      shouldReuseRoute: () => {},
    },
  };

  beforeEach(() => {
    const getSpy = jasmine.createSpyObj("HttpClient", [
      "get",
      "post",
      "put",
      "patch",
    ]);

    localStore = { token };

    spyOn(window.localStorage, "getItem").and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    spyOn(window.localStorage, "setItem").and.callFake(
      (key, value) => (localStore[key] = `${value}`)
    );
    spyOn(window.localStorage, "clear").and.callFake(() => (localStore = {}));

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        UserStoreService,
        { provide: HttpClient, useValue: getSpy },
        { provide: UserServiceService, useClass: UserServiceService },
        { provide: AuthService, useClass: AuthService },
        { provide: Router, useValue: routerMock },
      ],
    });
    service = TestBed.inject(UserStoreService);
    routerFake = TestBed.inject(Router);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call registerUserStore", (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(
      of({
        user: "Creado correctamente!",
      })
    );
    const spyFnRoute = spyOn(routerFake, "navigate").and.callThrough();
    service.registerUserStore(registerForm);
    service.userPublico$.subscribe(() => {
      expect(spyFnRoute).toHaveBeenCalled();
      done();
    }, done.fail);
  });

  it("should call loginUserStore", (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(of(tokenObj));
    const spyFnRoute = spyOn(routerFake, "navigate").and.callThrough();
    const spyFn = spyOn(service, "loginUserStore").and.callThrough();
    service.loginUserStore(login);
    service.userPublico$.subscribe(() => {
      expect(spyFnRoute).toHaveBeenCalled();
      done();
    }, done.fail);
  });
});
