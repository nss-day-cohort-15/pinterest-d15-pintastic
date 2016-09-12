"use strict";

app.factory("DatabaseFactory", function($q, $http, FirebaseURL, AuthFactory) {

  let boardId = []
  let pinId = []

  let addNewBoard = (newBoard) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseURL}boards.json`,
      JSON.stringify(newBoard))
      .success((objFromFirebase) => {
        resolve(objFromFirebase)
        console.log(objFromFirebase)
      })
      .error((error) => {
        reject(error)
      })
    })
  }

  let getBoardsFromFirebase = () => {
    let boards = []
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}boards.json`)
    .success((boardsObj) => {
      Object.keys(boardsObj).forEach((key) => {
        boardsObj[key].boardId = key
        boards.push(boardsObj[key])
        boardId = boardsObj[key].boardId
        console.log(boardId, "boardId")
      })
      resolve(boards)
      console.log("boards", boards)
    })
    .error((error) => {
      reject(error)
      })
    })
  }

  let addNewPinToFirebase = (pins) => {
    return $q((resolve, reject) => {
      $http.post(`${FirebaseURL}pins.json`,
      JSON.stringify(pins))
      .success((objFromFirebase) => {
        resolve(objFromFirebase)
        console.log(objFromFirebase)
      })
      .error((error) => {
        reject(error)
      })
    })
  }

  let getPinFromFirebase = () => {
    let pinsArray = []
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}pins.json`)
    .success((pinsObj) => {
      Object.keys(pinsObj).forEach((key) => {
        pinsObj[key].pinId = key
        pinsArray.push(pinsObj[key])
        pinId = pinsObj[key].boardId
        console.log(pinId, "boardId")
      })
      resolve(pinsArray)
      console.log("pins", pinsArray)
    })
    .error((error) => {
      reject(error)
      })
    })
  }

  let deleteBoardFromFirebase = (boardId) => {
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}boards/${boardId}.json`)
      .success((objFromFirebase) => {
        resolve(objFromFirebase)
      })
        .error((error) => {
          reject(error)
        })
    })
  }

  let setBoardId = (id) => {
    boardId = id
    console.log(boardId)
  }

  let getBoardId = () => {
    return boardId
  }

  let deletePin = function(pinId){
    return $q((resolve, reject) => {
      $http.delete(`${FirebaseURL}pins/${pinId}.json`)
      .success((deleteRsp) => {
        resolve(deleteRsp)
      })
      .error((error) => {
        reject(error)
      })
    })
  }

  let compare = function($scope, pins, boards){
    let matches = []
    for(var i = 0; i < $scope.pins.length; i++){
      for(var j = 0; j < $scope.boards.length; j++){
        if($scope.pins[i].boardId === $scope.boards[j].boardId){
          matches.push($scope.pins[i].boardId)
          console.log('MATCHES', matches)
          // var myEl = angular.element(document.querySelector('.$scope.boardArray[j].boardId'))
          console.log('AHHHH', $scope.pinArray[i].boardId)
          console.log('AHHHH', $scope.boardArray[j].boardId)
          // myEl.append($scope.pinArray[i])
        }
      }
    // console.log('STATUS', $scope.pinArray[i].boardId === $scope.boardArray[j].boardId)
    }
  }

  return {
    addNewBoard,
    getBoardsFromFirebase,
    addNewPinToFirebase,
    deleteBoardFromFirebase,
    getBoardId,
    setBoardId,
    getPinFromFirebase,
    deletePin,
    compare
  }
})
