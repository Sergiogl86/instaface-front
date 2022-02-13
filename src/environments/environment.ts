// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  allPictures: "http://localhost:4500/instaface/picture/all",
  allMessagesPictures: "http://localhost:4500/instaface/picture/allMessage",
  allNoMessagesPictures: "http://localhost:4500/instaface/picture/allNoMessage",
  userPictures: "http://localhost:4500/instaface/picture/user",
  userMessagesPictures: "http://localhost:4500/instaface/picture/userMessage",
  userNoMessagesPictures:
    "http://localhost:4500/instaface/picture/userNoMessage",
  userLogin: "http://localhost:4500/instaface/users/login",
  userRegister: "http://localhost:4500/instaface/users/register",
  deletePicture: "http://localhost:4500/instaface/picture/borrar",
  postMessage: "http://localhost:4500/instaface/message/crear",
  postDeleteMessage: "http://localhost:4500/instaface/message/borrar",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
