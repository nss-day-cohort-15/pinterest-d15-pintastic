"use strict";

app.factory("DatabaseFactory", function($q, $http, FirebaseURL, AuthFactory) {

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
  return {addNewBoard, getBoardsFromFirebase, addNewPinToFirebase}
});
