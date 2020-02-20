# React & Firebase Authentication Demo

## Set up

Clone project then:

```
npm install
```

## Firebase config

Create a new file in src/components/Firebase called `firebaseConfig.js` with your own details. Some of these aren't needed for this project but this is the full object.

```
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: '<your key>',
  authDomain: '<your auth domain>',
  databaseURL: '<your database url>',
  projectId: '<your projectId>',
  storageBucket: '<your storage bucket>',
  messagingSenderId: '<your id>',
  appId: '<your id>'
};

class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
  }
}

export default Firebase;
```

## Authentication

This project is set up with the `signInWithPopup` method from Firebase. Swap to `signInWithRedirect` for mobile users. Read more about that [here](https://firebase.google.com/docs/auth/web/google-signin)

## React project

This React project also has Redux and React Router configured as well as the Redux Devtools as a dev dependency.
