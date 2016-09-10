"use strict";

app.controller("NewPinCtrl", function($scope, $location, DatabaseFactory){
  $scope.btnText = "Add Pin"

    $scope.newPin = {
    name: "",
    url: "",
    description: "",
    boardId: DatabaseFactory.getBoardId()
  };
  console.log("DatabaseFactory boardId", DatabaseFactory.getBoardId())

  $scope.addNewPinToFirebase = () => {
    console.log($scope.newPin, "newPin")
    DatabaseFactory.addNewPinToFirebase($scope.newPin)
    .then((newPinData)=>{
    console.log("new Pin Data", newPinData)
    $location.path('boards')
    })
  }
});
