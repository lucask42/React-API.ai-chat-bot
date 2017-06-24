import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyD7fHJ3XUQrSKyrx2j93HG8jq7x0jb03NY",
  authDomain: "awesomeproject-50d1b.firebaseapp.com",
  databaseURL: "https://awesomeproject-50d1b.firebaseio.com",
  projectId: "awesomeproject-50d1b",
  storageBucket: "awesomeproject-50d1b.appspot.com",
  messagingSenderId: "718208255523"
};
firebase.initializeApp(config);
export default firebase;
