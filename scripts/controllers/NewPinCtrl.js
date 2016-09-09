"use strict";

app.controller("NewPinCtrl", function($scope, $location, DatabaseFactory){
  $scope.btnText = "Add Pin"

    $scope.newPin = {
    name: "",
    url: "",
    description: ""
  };

  $scope.addNewPinToBoard = () => {
    console.log($scope.newPin, "newPin")
    DatabaseFactory.addNewPinToFirebase($scope.newPin)
    .then((newPinData)=>{
    console.log("new Pin Data", $scope.newPinData)
    })
  }
});
