/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { PictureStoreService } from "./picture-store.service";
import { PictureServiceService } from "../service/picture-service.service";

describe("PictureStoreService", () => {
  let service: PictureStoreService;

  let routerFake: Router;

  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let localStore: any;

  const token: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWU4N2Y5NjRjMzBhN2YzZGRiMjU5NSIsIm5vbWJyZSI6Ik1hcmlvIiwibm9tYnJlVXN1YXJpbyI6Ik1hcmlvIiwidXJsRm90b1VzZXIiOiJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYmFjay1maW5hbC1wcm9qZWN0LTIwMjEwOS5hcHBzcG90LmNvbS9RdWVUZWNhLVVzZXItc29mdHdhcmUtZGV2ZWxvcG1lbnQtaXMtbm90LXN0cmVzc2Z1bC1zYXlzLXJvYmVydC0yMi15ZWFycy1vbGQtNDk0NTg4MjMtMTYzODcwMjg4MTI0NS0ucG5nIiwibGlrZXNVc2VyIjo2LCJyZWNldGFzIjpbIjYxOWZjYjVlNmVlYmEyYzZjZWMzMDQ1NCIsIjYxOWZkMWU4M2MxZmJmODIzYTQzZDgyNyIsIjYxYTdkNmRjNmZjYzk2MGFkMjdlOWQ5NCIsIjYxYTdkOTc5NmZjYzk2MGFkMjdlOWUxOCJdLCJpYXQiOjE2Mzg3MDQ2OTYsImV4cCI6MTYzODc5MTA5Nn0.eciI0CA2RNO1UidNLSu7ELlK5ZZF_SAVANytiqtQels";

  const tokenObj = { token };

  const postMessage = {
    messageText: "Sin mensajes en Sergio 2",
    pictureId: "6206a7cedfb69b8436057267",
  };

  const createPicture = new FormData();
  createPicture.append("description", "description");
  createPicture.append("picture", "picture");

  const id: string = "619fcb5e6eeba2c6cec30454";

  const pictureTest = {
    description: "De User-Test",
    pictureDate: "2022-02-11T17:53:10.281Z",
    userId: {
      nombreUsuario: "User-Test",
      urlFotoUser:
        "https://storage.googleapis.com/instaface-back.appspot.com/instaface-User-Bert-1644602026842-.jpeg",
      id: "6206a2abb4bca75598bd6ac0",
    },
    messageId: [
      {
        messageText: "Mensaje de User-Test",
        messageDate: "2022-02-11T17:53:10.291Z",
        userId: {
          nombreUsuario: "User-Test",
          urlFotoUser:
            "https://storage.googleapis.com/instaface-back.appspot.com/instaface-User-Bert-1644602026842-.jpeg",
          id: "6206a2abb4bca75598bd6ac0",
        },
        id: "6206a31eb4bca75598bd6ac7",
      },
    ],
    urlPicture:
      "https://storage.googleapis.com/instaface-back.appspot.com/instaface-Picture-angular-logo-1644602059648-.png",
    __v: 1,
    id: "6206a2ccb4bca75598bd6ac3",
  };

  const pictureTestArray = [pictureTest];

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
        PictureServiceService,
        { provide: HttpClient, useValue: getSpy },
        { provide: Router, useValue: routerMock },
      ],
    });
    service = TestBed.inject(PictureStoreService);
    routerFake = TestBed.inject(Router);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call getAllPicturesStore", (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(pictureTestArray));
    const spyFn = spyOn(service, "getAllPicturesStore").and.callThrough();
    service.getAllPicturesStore();
    service.listaPicturesPublica$.subscribe((pictureGetArray) => {
      expect(pictureGetArray).toEqual(pictureTestArray);
      done();
    }, done.fail);
  });

  it("should call getUserPicturesStore", (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(pictureTestArray));
    const spyFn = spyOn(service, "getUserPicturesStore").and.callThrough();
    service.getUserPicturesStore();
    service.listaPicturesPublica$.subscribe((pictureGetArray) => {
      expect(pictureGetArray).toEqual(pictureTestArray);
      done();
    }, done.fail);
  });

  it("should call postPictureStore", (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(
      of({
        picture: "Creada correctamente!",
      })
    );
    const spyFnRoute = spyOn(routerFake, "navigate").and.callThrough();
    const spyFn = spyOn(service, "postPictureStore").and.callThrough();
    service.postPictureStore(createPicture);
    service.listaPicturesPublica$.subscribe(() => {
      expect(spyFnRoute).toHaveBeenCalled();
      done();
    }, done.fail);
  });

  it("should call postMessageStore", (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(
      of({
        message: "Creado correctamente!",
      })
    );
    const spyFnRoute = spyOn(routerFake, "navigate").and.callThrough();
    const spyFn = spyOn(service, "postMessageStore").and.callThrough();
    service.postMessageStore(postMessage);
    service.listaPicturesPublica$.subscribe(() => {
      expect(spyFnRoute).toHaveBeenCalled();
      done();
    }, done.fail);
  });
});
