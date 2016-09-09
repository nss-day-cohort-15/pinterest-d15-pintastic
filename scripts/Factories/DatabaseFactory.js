"use strict";

app.factory("DatabaseFactory", function($q, $http, FirebaseURL, AuthFactory) {

  let addNewBoard = (newBoard)=>{
    return $q((resolve, reject)=>{
      $http.post(`${FirebaseURL}boards.json`,
      JSON.stringify(newBoard))
      .success((objFromFirebase) => {
        resolve(objFromFirebase)
        console.log(objFromFirebase)
      })
      .error((error)=>{
        reject(error)
      })
    })
  }

  let getBoardFromFirebase = ()=>{
    let boards = []
    return $q((resolve, reject)=>{
      $http.get(`${FirebaseURL}boards.json`)
    .success((boardsObj)=>{
      Object.keys(boardsObj).forEach((key)=>{
      boards.push(boardsObj[key])
      })
      resolve(boards)
      console.log(boards)
    })
    .error((error)=>{
      reject(error)
      })
    })
  }
  return {addNewBoard, getBoardFromFirebase}
});
