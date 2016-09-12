"use strict";

app.controller("BoardCtrl", function($scope, $location, DatabaseFactory){
  $scope.boardArray = []
  $scope.pinArray = []
  $scope.matches = []

  DatabaseFactory.getBoardsFromFirebase()
  .then((boardsData) => {
    console.log(boardsData, "boardsData")
    for(var key in boardsData) {
      console.log(key, "key")
    $scope.boardArray.push(boardsData[key])
    }

  DatabaseFactory.getPinFromFirebase()
  .then((pin)=>{
    for(var key in pin) {
      $scope.pinArray.push(pin[key])
      console.log('PINARRAY', $scope.pinArray)
    }
    for(var i = 0; i < $scope.boardArray.length; i++){
      $scope.boardArray[i].pins = []
      for(var j = 0; j < $scope.pinArray.length; j++){
        if($scope.pinArray[j].boardId === $scope.boardArray[i].boardId){
           $scope.boardArray[i].pins.push($scope.pinArray[j])
        }
      }
    }
  })
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

  $scope.delete = (pinId) => {
    DatabaseFactory.deletePin(pinId)
    .then((response) => {
      DatabaseFactory.getBoardsFromFirebase()
      .then((boards) => {
        $scope.boardArray = []
        for (var key in boards) {
          $scope.boardArray.push(boards[key])
        }
        DatabaseFactory.getPinFromFirebase()
      })
        .then((pins) => {
          $scope.pinArray = []
          for(var key in pins) {
            $scope.pinArray.push(pins[key])
            console.log(pins)
          }
        })
    })
  }

});
