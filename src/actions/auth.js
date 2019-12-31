import { SET_USER, SET_AUTH_LOADING } from './types';
import firebase from 'firebase/app';
import 'firebase/auth';

export const authUser = () => async dispatch => {
  try {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const userObject = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        };
        dispatch({
          type: SET_USER,
          payload: userObject
        });
        dispatch(authLoading(false));
      } else {
        dispatch({
          type: SET_USER,
          payload: null
        });
        dispatch(authLoading(false));
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = provider => dispatch => {
  let loginProvider;
  if (provider === 'google') {
    loginProvider = new firebase.auth.GoogleAuthProvider();
  } else if (provider === 'facebook') {
    loginProvider = new firebase.auth.FacebookAuthProvider();
  }
  firebase
    .auth()
    .signInWithPopup(loginProvider)
    .then(function(result) {
      console.log('User logged in...');
    })
    .catch(function(error) {
      console.error(error);
    });
};

export const logoutUser = () => dispatch => {
  try {
    firebase
      .auth()
      .signOut()
      .then(function() {
        dispatch({
          type: SET_USER,
          payload: null
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  } catch (error) {
    console.log(error);
  }
};

export const authLoading = value => async dispatch => {
  await dispatch({
    type: SET_AUTH_LOADING,
    payload: value
  });
};
