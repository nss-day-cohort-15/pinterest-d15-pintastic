"use strict";

let app = angular.module("Pintastic", ["ngRoute"])
          .constant("FirebaseURL", "https://pintastic-76e69.firebaseio.com/");

  app.config(function($routeProvider, FBCreds){
    let authConfig = {
      apiKey: FBCreds.apiKey,
      authDomain: FBCreds.authDomain
    };
    firebase.initializeApp(authConfig);

    $routeProvider
      .when("/boards", {
        templateUrl: "partials/boards.html",
        controller: "BoardCtrl"
      })
      .when("/pins", {
        templateUrl: "partials/pins.html",
        controller: "PinCtrl"
      })
      .when("/newboard", {
        templateUrl: "partials/newBoard.html",
        controller: "NewBoardCtrl"
      })
      .when("/newpin", {
        templateUrl: "partials/newPin.html",
        controller: "NewPinCtrl"
      })
      .otherwise("/");
  });