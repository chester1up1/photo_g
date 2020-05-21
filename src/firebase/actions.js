import { storage, database } from "./index";
import * as firebase from "firebase";

export const SingUpFirebase = (email, password) => {
  return async () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };
};
export const GetStateData = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      //   var displayName = user.displayName;
      //   var email = user.email;
      //   var emailVerified = user.emailVerified;
      //   var photoURL = user.photoURL;
      //   var isAnonymous = user.isAnonymous;
      //   var uid = user.uid;
      //   var providerData = user.providerData;
      console.log("USER---->", user);
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
};
export const SignOutFirebase = () => {
  return async (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          dispatch({ type: "LOGOUT", data: "" });
        },
        function (error) {
          console.log("// An error happened.");
        }
      );
  };
};

export const SignInFirebase = (email, password) => {
  return async (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        dispatch({ type: "LOGIN", data: true });
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };
};
