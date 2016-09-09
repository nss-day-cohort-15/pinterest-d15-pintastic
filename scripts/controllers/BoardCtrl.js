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
  })

  $scope.boardIdToPin = (id) => {
    DatabaseFactory.setBoardId(id)
  }

  $scope.deleteBoard = (boardId) => {
    DatabaseFactory.deleteBoardFromFirebase(boardId)
    .then( (response) => {
      DatabaseFactory.getBoardsFromFirebase()
    .then( (boards) => {
      console.log("board array", $scope.boardArray)
      $scope.boardArray = []
      console.log(boards, "boards")
      for (var key in boards) {
      $scope.boardArray.push(boards[key])
        }
      })
    })
  }
});