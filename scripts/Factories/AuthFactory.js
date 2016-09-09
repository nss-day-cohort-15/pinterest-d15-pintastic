"use strict";

app.factory("AuthFactory", function(){
  let currentUserId = null;
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().onAuthStateChanged(function(user){
    if(user) {
      currentUserId = user.uid;
    }
  })
  let authWithProvider = function(){
    return firebase.auth().signInWithPopup(provider)
  }

  let getUser = () => {
    return currentUserId
  }
return {authWithProvider, getUser};
});
