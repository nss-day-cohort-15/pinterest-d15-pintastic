"use strict";

app.controller("BoardCtrl", function($scope, $location, DatabaseFactory){
  $scope.boardArray = []
  $scope.pinArray = []

  DatabaseFactory.getBoardsFromFirebase()
  .then((boardsData) => {
    console.log(boardsData, "boardsData")
    for(var key in boardsData) {
      console.log(key, "key")
    $scope.boardArray.push(boardsData[key])
    }
  })

  DatabaseFactory.getPinFromFirebase()
  .then((pin)=>{
    for(var key in pin) {
      $scope.pinArray.push(pin[key])
      console.log('PINARRAY', $scope.pinArray)
    }
    let matches = []
    for(var i = 0; i < $scope.pinArray.length; i++){
      for(var j = 0; j < $scope.boardArray.length; j++){
        if($scope.pinArray[i].boardId === $scope.boardArray[j].boardId){
          matches.push($scope.pinArray[i].boardId)
          console.log('HOPEFUL', matches)
        }
        console.log('STATUS', $scope.pinArray[i], $scope.boardArray[j].boardId)
      }
    }
    // $scope.pinArray.push(pin)
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
