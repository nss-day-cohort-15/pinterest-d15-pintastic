"use strict";

app.factory("DatabaseFactory", function($q, $http, FirebaseURL, AuthFactory) {

  let boardId = []

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
        pinsObj[key].boardId = key
        pinsArray.push(pinsObj[key])
        boardId = pinsObj[key].boardId
        console.log(boardId, "boardId")
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



  return {
    addNewBoard,
    getBoardsFromFirebase,
    addNewPinToFirebase,
    deleteBoardFromFirebase,
    getBoardId,
    setBoardId,
    getPinFromFirebase
  }
});
