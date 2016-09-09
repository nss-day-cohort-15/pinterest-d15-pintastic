"use strict";

app.controller("BoardCtrl", function($scope, $location, DatabaseFactory){
  $scope.boardArray = []

  DatabaseFactory.getBoardsFromFirebase()
  .then((boardsData) => {
    console.log(boardsData, "boardsData")
    for(var key in boardsData) {
      console.log(key, "key")
    $scope.boardArray.push(boardsData[key])
    }
    console.log($scope.boards, "boards")
  })

});