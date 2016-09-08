"use strict";

app.controller("NavCtrl", function($scope, $location){

  $scope.navItems = [
      {name: "Logout", url: "#/logout", showState: "$parent.isLoggedIn"},
      {name: "Login", url: "#/items/login", showState: "!$parent.isLoggedOut"},
      {name: "All Items", url: "#/items/list", showState: "$parent.isLoggedIn"},
      {name: "New Items", url: "#/items/new", showState: "$parent.isLoggedIn"}
  ];

  $scope.register = function() {

    }
  }
  $scope.isActive = (viewLocation) => viewLocation === $location.path();
});