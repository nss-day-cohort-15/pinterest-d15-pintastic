"use strict";

app.controller("NewBoardCtrl", function($scope, $location, DatabaseFactory, AuthFactory){

  $scope.newBoard = {
    name: "",
    category: "",
    description: "",
    uid: AuthFactory.getUser(),
    boardId: DatabaseFactory.getBoardId()
  };

  $scope.addBoardToFirebase = () => {
    DatabaseFactory.addNewBoard($scope.newBoard)
    .then((data) => {
      DatabaseFactory.getBoardsFromFirebase()
      console.log(data, "data")
      $location.url('/boards')
    })
  }
});
