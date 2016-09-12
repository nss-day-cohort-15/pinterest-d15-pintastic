"use strict";

app.factory("AuthFactory", function(){
  let currentUserId = null;
  let userInfo = {
    name: null,
    img: null,
  }
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().onAuthStateChanged(function(user){
    if(user) {
      currentUserId = user.uid;
      userInfo.name = user.displayName
      userInfo.img = user.photoURL
    }
  })
  let authWithProvider = function(){
    return firebase.auth().signInWithPopup(provider)
  }

  let getUser = () => {
    return currentUserId
  }

  let getUserInfo = function(){
    return userInfo
  }

return {authWithProvider, getUser, getUserInfo};
});
